#!/bin/bash

# Test script for the Shell API

echo "Testing Shell Script Generator API..."

# Wait for the service to be ready
echo "Waiting for API to be ready..."
while ! curl -f http://localhost:8080/health >/dev/null 2>&1; do
    sleep 2
    echo "Waiting..."
done

echo "API is ready! Running tests..."

# Test 1: Simple file listing
echo -e "\n=== Test 1: List files ==="
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "list all files in current directory"}' \
  | jq '.'

# Test 2: Find files
echo -e "\n=== Test 2: Find Python files ==="
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "find all Python files in current directory"}' \
  | jq '.'

# Test 3: System info
echo -e "\n=== Test 3: System information ==="
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "show system information including OS and memory"}' \
  | jq '.'

# Test 4: Directory operations
echo -e "\n=== Test 4: Directory operations ==="
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "create a new directory called test and navigate to it"}' \
  | jq '.'

# Test 5: Search in files
echo -e "\n=== Test 5: Search in files ==="
curl -X POST http://localhost:8080/generate-shell \
  -H "Content-Type: application/json" \
  -d '{"prompt": "search for the word TODO in all files recursively"}' \
  | jq '.'

echo -e "\nAll tests completed!"
