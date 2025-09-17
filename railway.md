# Railway Deployment Guide

## Prerequisites
- Railway account (https://railway.app)
- GitHub repository with your code

## Environment Variables Required
Set these in your Railway dashboard:

```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=your_frontend_url
```

## Deployment Steps

### Method 1: Using Railway CLI (Recommended)

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize Railway project**
   ```bash
   railway init
   ```

4. **Deploy**
   ```bash
   railway up
   ```

### Method 2: Using GitHub Integration

1. **Connect GitHub to Railway**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select your repository

2. **Configure Environment Variables**
   - Go to your project dashboard
   - Click on "Variables" tab
   - Add all required environment variables

3. **Deploy**
   - Railway will automatically deploy when you push to your main branch

### Method 3: Manual Deployment

1. **Create New Project**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Empty Project"

2. **Add Your Service**
   - Click "Add Service"
   - Select "GitHub Repo"
   - Choose your repository

3. **Configure Build Settings**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Root Directory**: `/server`

## Railway-Specific Features

### Advantages over Render
- **Faster deployments**
- **Better performance**
- **Built-in database support**
- **More generous free tier**
- **Better CLI tools**

### Railway CLI Commands
```bash
# View logs
railway logs

# Add environment variable
railway variables set KEY=value

# Scale your service
railway scale

# Open your project in browser
railway open
```

## Troubleshooting

### Build Issues
If your build fails, check:
1. **Build Command**: Ensure it's `npm install && npm run build`
2. **Start Command**: Ensure it's `npm start`
3. **Environment Variables**: All required variables are set

### Port Configuration
Railway automatically assigns a PORT, but you can override it in environment variables.

### Database Connection
Railway offers built-in MongoDB support. You can:
1. Add MongoDB service from Railway marketplace
2. Use external MongoDB (MongoDB Atlas, etc.)

## Health Check
Your server includes a health check endpoint at `/health` that returns:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Testing Locally
Before deploying, test the Railway build process locally:
```bash
cd server
npm install
npm run build
npm start
```

## Monitoring
Railway provides built-in monitoring:
- Application logs
- Resource usage
- Error tracking
- Performance metrics

## Pricing
Railway offers a generous free tier:
- 500 hours/month
- 512 MB RAM
- 1 GB storage
- Unlimited deployments