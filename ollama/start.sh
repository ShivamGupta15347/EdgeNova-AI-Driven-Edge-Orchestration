#!/bin/bash

# Start Ollama in the background
echo "Starting Ollama..."
ollama serve &

# Wait for Ollama to be ready
echo "Waiting for Ollama to start..."
while ! curl -f http://localhost:11434/api/tags >/dev/null 2>&1; do
    sleep 2
done

# Pull the llama3.2:1b model
echo "Pulling phi3 model..."
ollama pull deepseek-coder:6.7b

# Start the Go API server
echo "Starting Go API server..."
exec ./shell-api
