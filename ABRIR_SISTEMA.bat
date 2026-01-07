@echo off
start chrome ^
  --disable-web-security ^
  --allow-file-access-from-files ^
  --user-data-dir="%~dp0chrome_temp" ^
  "%~dp0index.html"
