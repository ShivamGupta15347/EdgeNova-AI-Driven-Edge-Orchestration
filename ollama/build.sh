#!/bin/bash

echo "Building Shell Script Generator API..."

# Build and run with Docker Compose
echo "Building Docker image..."
docker-compose build

echo "Starting services..."
docker-compose up -d

echo "Waiting for services to be ready..."
sleep 30

echo "Running tests..."
./test_api.sh

echo -e "\n=== Build Complete ==="
echo "API is running at: http://localhost:8080"
echo "Ollama API is running at: http://localhost:11434"
echo ""
echo "To test the API manually:"
echo "curl -X POST http://localhost:8080/generate-shell -H 'Content-Type: application/json' -d '{\"prompt\": \"list all files\"}'"
echo ""
echo "To stop the services:"
echo "docker-compose down"
