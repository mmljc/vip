        const items = document.querySelectorAll(".item");
        const btns = document.querySelectorAll("[data-t]");

        function show(id) {
            const el = document.getElementById(id);
            if (!el) return console.error(`不存在ID: ${id}`);

            // 核心：全部容器设置 display: none 隐藏
            items.forEach(i => {
                i.classList.remove("show", "animate");
            });

            // 显示目标div，延迟添加动画类实现滑入效果
            el.classList.add("show");
            setTimeout(() => {
                el.classList.add("animate");
            }, 10);
        }

        btns.forEach(b => {
            b.addEventListener("click", () => show(b.dataset.t));
        });
        show("divA")