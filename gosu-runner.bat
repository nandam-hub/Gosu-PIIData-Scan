@echo off
set GOSU_HOME=%CD%\gosu-lang
set CLASSPATH=%GOSU_HOME%\gosu\target\*;%GOSU_HOME%\gosu-core\target\*;%GOSU_HOME%\gosu-core-api\target\*
java -cp "%CLASSPATH%" gw.lang.Gosu %1