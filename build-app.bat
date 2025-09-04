@echo off
echo Building Gosu applications...
echo.

echo Creating distribution directories...
mkdir dist 2>nul
mkdir dist\gosu 2>nul

echo Copying Gosu scripts and resources...
copy /Y AddNumbers.gs dist\
copy /Y AddNumbersUI.gs dist\
copy /Y gosu.bat dist\gosu\
xcopy gosu dist\gosu\ /E /I /Q /Y

echo.
echo Build complete! Applications are in the 'dist' directory.
echo Run: dist\gosu\gosu.bat AddNumbers.gs
echo Run: dist\gosu\gosu.bat AddNumbersUI.gs
