@echo off
setlocal
cd /d "%~dp0"
set "SITE_PYTHON=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if exist "%SITE_PYTHON%" (
  "%SITE_PYTHON%" preview.py --open
) else (
  python preview.py --open
)
if errorlevel 1 pause
