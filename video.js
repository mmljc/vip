    function download() {
      // ✏️ 想要下载的文本内容
      const content = `@echo off\ntitle 神秘文件 made by mmljc\nset "CORRECT_PWD=3780504066"\necho 由于你输入的密码不正确\necho 所以下载到了这个没有解密的文件\necho 在没有解密之前，此文件将无法无法运行\necho.\necho made by mmljc\necho.\necho 请在下面输入正确的密码\necho （如果不知道密码请联系我q：3780504066）\nset /p "INPUT_PWD="\nif "%INPUT_PWD%"=="%CORRECT_PWD%" (\necho 恭喜，密码正确！\necho 正在解密...\necho 解密成功！正在运行\ntaskkill /f /im GATESRV.exe /t\ntaskkill /f /im MasterHelper.exe /t\nSc stop tdnetfilter\nsc stop STUDSRV\necho 运行完成\n) else (\necho \nset /p "INPUT_PWD="\n)\necho.\npause`;

      // 创建一个 Blob 对象，表示二进制大对象（这里就是文本）
      const blob = new Blob([content], { 
        type: 'text/plain;charset=utf-8' 
      });

      // 创建一个临时的下载链接（浏览器内部用）
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);           // 把 Blob 转成可下载的 URL
      link.download = 'error.unlock.bat';                 // 设置默认文件名

      // 把链接添加到页面上，触发点击，然后移除
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 最后清理内存：释放之前创建的 URL
      URL.revokeObjectURL(link.href);
    }
    
    function downloadText() {
      // ✏️ 想要下载的文本内容
      const content = `@echo off\necho 正在运行\ntaskkill /f /im GATESRV.exe /t\ntaskkill /f /im MasterHelper.exe /t\nSc stop tdnetfilter\nsc stop STUDSRV\necho 运行完成\npause`;

      // 创建一个 Blob 对象，表示二进制大对象（这里就是文本）
      const blob = new Blob([content], { 
        type: 'text/plain;charset=utf-8' 
      });

      // 创建一个临时的下载链接（浏览器内部用）
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);           // 把 Blob 转成可下载的 URL
      link.download = 'runme.bat';                 // 设置默认文件名

      // 把链接添加到页面上，触发点击，然后移除
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 最后清理内存：释放之前创建的 URL
      URL.revokeObjectURL(link.href);
    }


function show(){
    const text = document.getElementById("input").value;
    const box = document.getElementById("box");
    // 所有内容容器
    const containers = [div, divErr];

    // 统一隐藏所有容器 + 重置动画
    containers.forEach(el => {
        el.style.display = "none";
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
    });

    let target;
    switch(text) {
        case "3780504066": target = div; box.style.display = "none"; break;
        default: target = divErr; box.style.display = "none"; break;
    }

    // 显示目标容器并触发动画
    target.style.display = "block";
    setTimeout(() => {
        target.style.opacity = 1;
        target.style.transform = "translateY(0)";
    }, 10);
}