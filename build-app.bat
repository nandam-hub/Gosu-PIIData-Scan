@echo off
echo Building Gosu applications...
echo.

echo Creating distribution directory...
mkdir dist 2>nul

copy /Y AddNumbers.gs dist\
copy /Y AddNumbersUI.gs dist\
copy /Y gosu.bat dist\
xcopy gosu dist\gosu\ /E /I /Q /Y

echo.
echo Build complete! Applications are in the 'dist' directory.
echo Run: dist\gosu.bat AddNumbers.gs
echo Run: dist\gosu.bat AddNumbersUI.gs
