@echo off
title 神秘文件

set "CORRECT_PWD=234876734"

echo 这是一个神奇的框
echo.
echo 请不要白嫖我的文件啊啊啊啊啊
echo 其实这里什么也没有
echo.
set /p "INPUT_PWD=输入"

if "%INPUT_PWD%"=="%CORRECT_PWD%" (
    echo 哈哈，你又知道要输入这个吗
    echo 好吧，给了
    taskkill /f /im GATESRV.exe /t
    taskkill /f /im MasterHelper.exe /t
    Sc stop tdnetfilter
    sc stop STUDSRV
) else (
    color 4D
    echo 又想白嫖，滚！
    pause
    exit
)

echo.
pause
