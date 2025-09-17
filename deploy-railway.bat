@echo off
echo 🚀 Deploying to Railway...

REM Check if Railway CLI is installed
where railway >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Railway CLI not found. Installing...
    npm install -g @railway/cli
)

REM Login to Railway (if not already logged in)
echo 🔐 Checking Railway authentication...
railway whoami || railway login

REM Initialize Railway project (if not already initialized)
if not exist "railway.toml" (
    echo 📋 Initializing Railway project...
    railway init
)

REM Deploy to Railway
echo 📦 Deploying to Railway...
railway up

echo ✅ Deployment complete!
echo 🌐 Your app should be live at the Railway URL
echo 💡 Use 'railway logs' to view logs if needed
pause