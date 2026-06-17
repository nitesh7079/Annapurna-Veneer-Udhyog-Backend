# Annapurna Veneer Udhyog - Full Stack Website

Modern full stack website for a veneer raw material company.

## Tech Stack
- Frontend: React + Tailwind CSS + Framer Motion (Vite)
- Backend: Node.js + Express.js
- Database: MongoDB

## Project Structure
- frontend/
- backend/

## Setup
1. Backend setup:
   - Copy `backend/.env.example` to `backend/.env`
   - Update MongoDB connection string if needed
   - Run:
     ```bash
     cd backend
     npm install
     npm run seed
     npm run dev
     ```

2. Frontend setup:
   - Copy `frontend/.env.example` to `frontend/.env`
   - Run:
     ```bash
     cd frontend
     npm install
     npm run dev
     ```

## API
- GET `/api/products`
- POST `/api/products`

## Notes
- Frontend fetches products from backend API.
- If backend is unavailable, frontend shows fallback product cards.

## Deploy on Render
1. Push this repository to GitHub.
2. In Render Dashboard, click New + and choose Blueprint.
3. Select this repository. Render will detect [render.yaml](render.yaml) and create:
   - Web Service: annapurna-veneer-api (backend)
   - Static Site: annapurna-veneer-site (frontend)
4. Set required environment variables in Render:
   - Backend service:
     - MONGO_URI = your MongoDB Atlas connection string
   - Frontend static site:
     - VITE_API_BASE_URL = https://backend-ju5k.onrender.com/api
5. Deploy both services.

### Post-deploy check
- Backend health: https://backend-ju5k.onrender.com/api/health
- Frontend opens on the Render static site URL.

# eve
# eve
