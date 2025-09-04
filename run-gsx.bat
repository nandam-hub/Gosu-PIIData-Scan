@echo off
echo Gosu runtime not available. Converting %1 to Java and running...
javac -d build\classes src\main\java\example\HelloWorld.java
java -cp build\classes example.HelloWorld