@echo off
cd /d "%~dp0"
echo CroTeak Planner MOBILE BUILD032 local test server
python -m http.server 8080
pause
