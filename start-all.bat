@echo off
echo Starting Annapurna ERP System (Backend + Frontend)...

:: Start backend in a new window
echo Starting Backend...
start "Annapurna Backend" cmd /k "cd backend && npm install && npm run dev"

:: Wait a moment for backend to initialize
timeout /t 3 /nobreak >nul

:: Start frontend in a new window
echo Starting Frontend...
start "Annapurna Frontend" cmd /k "cd frontend && npm install && npm run dev"

echo Both servers are starting in separate windows.
echo You can close this window now.
