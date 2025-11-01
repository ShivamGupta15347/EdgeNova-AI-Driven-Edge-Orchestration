package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"time"
)

type GenerateRequest struct {
	Model  string `json:"model"`
	Prompt string `json:"prompt"`
	Stream bool   `json:"stream"`
}

type GenerateResponse struct {
	Response string `json:"response"`
	Done     bool   `json:"done"`
}

type ShellRequest struct {
	Prompt string `json:"prompt"`
}

type ShellResponse struct {
	ShellScript string `json:"shell_script"`
	Error       string `json:"error,omitempty"`
}

func generateShellScript(prompt string) (string, error) {
	// Get current OS and architecture dynamically

	// Create a more specific prompt for shell script generation
	systemPrompt := `You are a shell script or power shell script generator for windows and linux. Generate ONLY shell/power script commands for the given task. Do not include any explanations, comments, or markdown formatting. Just return the raw shell commands that can be executed directly.


Task: ` + prompt

	reqBody := GenerateRequest{
		Model:  "deepseek-coder:6.7b",
		Prompt: systemPrompt,
		Stream: false,
	}

	jsonData, err := json.Marshal(reqBody)
	if err != nil {
		return "", fmt.Errorf("failed to marshal request: %v", err)
	}

	// Make request to Ollama API
	resp, err := http.Post("http://localhost:11434/api/generate", "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return "", fmt.Errorf("failed to make request to Ollama: %v", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read response: %v", err)
	}

	var genResp GenerateResponse
	if err := json.Unmarshal(body, &genResp); err != nil {
		return "", fmt.Errorf("failed to unmarshal response: %v", err)
	}

	// Clean up the response to ensure it's just shell commands
	shellScript := strings.TrimSpace(genResp.Response)

	// Remove common markdown formatting if present
	shellScript = strings.ReplaceAll(shellScript, "```bash", "")
	shellScript = strings.ReplaceAll(shellScript, "```sh", "")
	shellScript = strings.ReplaceAll(shellScript, "```", "")
	shellScript = strings.TrimSpace(shellScript)

	return shellScript, nil
}

func shellScriptHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	var req ShellRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		resp := ShellResponse{Error: "Invalid JSON payload"}
		json.NewEncoder(w).Encode(resp)
		return
	}

	if req.Prompt == "" {
		resp := ShellResponse{Error: "Prompt is required"}
		json.NewEncoder(w).Encode(resp)
		return
	}

	shellScript, err := generateShellScript(req.Prompt)
	if err != nil {
		resp := ShellResponse{Error: fmt.Sprintf("Failed to generate shell script: %v", err)}
		json.NewEncoder(w).Encode(resp)
		return
	}

	resp := ShellResponse{ShellScript: shellScript}
	json.NewEncoder(w).Encode(resp)
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "healthy"})
}

func main() {
	// Wait for Ollama to be ready
	log.Println("Waiting for Ollama to be ready...")
	for {
		resp, err := http.Get("http://localhost:11434/api/tags")
		if err == nil {
			resp.Body.Close()
			break
		}
		log.Println("Ollama not ready, waiting...")
		time.Sleep(5 * time.Second)
	}

	log.Println("Ollama is ready, starting API server...")

	http.HandleFunc("/generate-shell", shellScriptHandler)
	http.HandleFunc("/health", healthHandler)

	log.Println("Server starting on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
