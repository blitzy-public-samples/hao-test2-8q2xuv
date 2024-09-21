#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Print commands and their arguments as they are executed
set -x

# Clean the build directory
rm -rf dist
mkdir dist

# Copy HTML, CSS, and JavaScript files
cp index.html dist/
cp -r css dist/
cp -r js dist/

# Copy assets
cp -r assets dist/

# Minify CSS
npx cleancss -o dist/css/styles.min.css css/styles.css

# Minify JavaScript
npx terser js/main.js js/dateManager.js js/uiController.js -o dist/js/bundle.min.js

# Update index.html to use minified files
sed -i 's/css\/styles.css/css\/styles.min.css/' dist/index.html
sed -i 's/<script.*<\/script>/<script src="js\/bundle.min.js"><\/script>/' dist/index.html

echo "Build completed successfully!"

# Human tasks:
# TODO: Review and adjust the build process based on project-specific needs
# TODO: Ensure all necessary files are included in the build output
# TODO: Consider adding version numbers or hash to output file names for cache busting
# TODO: Implement environment-specific builds if needed (e.g., development, staging, production)
# TODO: Add error handling and logging for build failures
# TODO: Integrate the build script with the deployment workflow
# TODO: Test the build script in different environments to ensure consistency
# TODO: Document any manual steps or requirements for running the build script
# TODO: Consider adding a step to generate a source map for minified files
# TODO: Evaluate the need for additional optimization steps (e.g., image compression, font subsetting)