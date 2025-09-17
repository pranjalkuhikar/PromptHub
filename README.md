# PromptHub

A full-stack application for managing and sharing prompts.

## Deployment to Render

### Prerequisites
- Node.js 18 or higher
- MongoDB database

### Environment Variables
Set the following environment variables in your Render dashboard:

```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=your_frontend_url
```

### Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Render deployment"
   git push origin main
   ```

2. **Create Web Service on Render**
   - Go to https://render.com
   - Click "New Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Build Command**: `cd server && npm install && npm run build`
     - **Start Command**: `cd server && npm start`
     - **Environment**: Node

3. **Alternative: Use render.yaml**
   The project includes a `render.yaml` file that automatically configures the service. Simply connect your repository and Render will use this configuration.

### Common Issues and Solutions

#### "Cannot find module '/opt/render/project/src/server/dist/server.js'"
This error typically occurs when:
1. **Build command not running**: Ensure the build command is set correctly
2. **TypeScript compilation failing**: Check the build logs for TypeScript errors
3. **Wrong working directory**: The commands should include `cd server` to navigate to the correct directory

#### Build Configuration
The project has been configured with:
- ES modules support (`"type": "module"` in package.json)
- Proper TypeScript configuration (tsconfig.json)
- All import statements include `.js` extensions for ES module compatibility

### Testing Locally
Before deploying, test the build process locally:
```bash
cd server
npm install
npm run build
npm start
```

The server should start on http://localhost:8000

### Health Check
The server includes a health check endpoint at `/health` that returns:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

Use this endpoint to verify your deployment is working correctly.