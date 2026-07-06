@echo off
cd /d "%~dp0"
echo CroTeak Planner MOBILE BUILD030 local preview
py -3 -m http.server 8080 || python -m http.server 8080
pause
