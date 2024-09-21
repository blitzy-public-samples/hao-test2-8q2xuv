#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Print commands and their arguments as they are executed
set -x

# Run ESLint
echo "Running ESLint..."
npx eslint js/

# Run Jest tests
echo "Running Jest tests..."
npx jest

# Run accessibility tests
echo "Running accessibility tests..."
npx pa11y-ci

echo "All tests completed successfully!"