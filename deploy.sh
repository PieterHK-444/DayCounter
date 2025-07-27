#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📁 Static files are in the 'out' directory"
    echo ""
    echo "🚀 Deployment options:"
    echo "1. For Vercel: Push to GitHub and connect your repository"
    echo "2. For GitHub Pages:"
    echo "   - Copy contents of 'out' directory to your gh-pages branch"
    echo "   - Or use GitHub Actions to auto-deploy"
    echo ""
    echo "💡 Theme fixes applied:"
    echo "- Fixed hydration issues with theme provider"
    echo "- Removed hardcoded dark theme classes"
    echo "- Added theme-aware background component"
    echo "- Improved theme toggle functionality"
    echo ""
    echo "🎨 The app should now properly switch between light and dark themes!"
else
    echo "❌ Build failed!"
    exit 1
fi 