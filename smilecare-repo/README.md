# SmileCare

Dentist website: React (Create React App) frontend + Express/MongoDB backend.

## Structure
- `smilecare/smilecare-frontend-main` - React app
- `smilecare/smilecare-backend-main` - Express API (`api/index.js` is the Vercel serverless entry)

## Deploy on Vercel (two projects, same repo)
1. **Backend** - Root Directory: `smilecare/smilecare-backend-main`
   Env vars: `MONGODB_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `CLIENT_URL`
2. **Frontend** - Root Directory: `smilecare/smilecare-frontend-main`
   Env var: `REACT_APP_API_URL` = `https://<backend-url>.vercel.app/api`
3. Set backend `CLIENT_URL` to the frontend URL (no trailing slash), then redeploy the backend.

MongoDB Atlas: allow `0.0.0.0/0` under Network Access.

## Run locally
```
cd smilecare/smilecare-backend-main && npm install && npm run dev
cd smilecare/smilecare-frontend-main && npm install && npm start
```
Copy each `.env.example` to `.env` first (backend) / use the defaults (frontend proxies to localhost:5000).
