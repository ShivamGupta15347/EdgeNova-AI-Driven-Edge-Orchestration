# Shell Script Generator API

This Docker container provides an API endpoint that uses Ollama with Llama 3.2:1B to generate shell scripts based on user prompts.

## Features

- **Ollama Integration**: Automatically downloads and sets up Ollama
- **Llama 3.2:1B Model**: Downloads and uses the lightweight 1B parameter model
- **Go API**: Simple REST API endpoint for shell script generation
- **Docker Ready**: Complete containerized solution

## Quick Start

### Using Docker Compose (Recommended)

```bash
docker-compose up --build
```

### Using Docker

```bash
# Build the image
docker build -t shell-api .

# Run the container
docker run -p 8080:8080 -p 11434:11434 shell-api
```

## API Usage

### Generate Shell Script

**Endpoint**: `POST /generate-shell`

**Request Body**:
```json
{
  "prompt": "list all files in current directory"
}
```

**Response**:
```json
{
  "shell_script": "ls -la"
}
```

### Health Check

**Endpoint**: `GET /health`

**Response**:
```json
{
  "status": "healthy"
}
```

## Example Usage

```bash
# Test the API
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "find all Python files in current directory"}'
```

Expected response:
```json
{
  "shell_script": "find . -name '*.py' -type f"
}
```

## More Examples

```bash
# Create a directory and navigate to it
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "create a new directory called test and go into it"}'

# Check system information
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "show system information including OS, memory, and CPU"}'

# Search for text in files
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "search for the word TODO in all files recursively"}'
```

## Container Details

- **Base Image**: Ubuntu 22.04
- **Go Version**: 1.21.0
- **Ollama**: Latest version
- **Model**: llama3.2:1b
- **Ports**: 
  - 8080: Go API server
  - 11434: Ollama API server

## Environment Variables

- `OLLAMA_HOST`: Set to `0.0.0.0` to allow external connections
- `DEBIAN_FRONTEND`: Set to `noninteractive` for automated installation

## Volume Mounting

The Docker Compose setup includes a volume for Ollama data persistence:
- `ollama_data:/root/.ollama` - Stores the downloaded model and Ollama configuration

## Notes

- The container will automatically download the llama3.2:1b model on first run
- The API server waits for Ollama to be ready before starting
- The model is optimized for shell script generation with minimal explanations
- Response format is cleaned to remove markdown formatting

## Troubleshooting

1. **Container fails to start**: Check if ports 8080 and 11434 are available
2. **Model download fails**: Ensure internet connection and sufficient disk space
3. **API returns errors**: Check Ollama service status at `http://localhost:11434/api/tags`
