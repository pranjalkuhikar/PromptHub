#!/bin/bash

echo "🚀 Deploying to Railway..."

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
fi

# Login to Railway (if not already logged in)
echo "🔐 Checking Railway authentication..."
railway whoami || railway login

# Initialize Railway project (if not already initialized)
if [ ! -f "railway.toml" ]; then
    echo "📋 Initializing Railway project..."
    railway init
fi

# Deploy to Railway
echo "📦 Deploying to Railway..."
railway up

echo "✅ Deployment complete!"
echo "🌐 Your app should be live at the Railway URL"
echo "💡 Use 'railway logs' to view logs if needed"