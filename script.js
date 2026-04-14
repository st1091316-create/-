// 取得光暈元素
const glow = document.getElementById('glow');

// 讓光暈跟著滑鼠移動。
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// 點擊時觸發閃光效果。
document.addEventListener('click', () => {
    // 建立一個短暫出現後消失的閃光元素。
    const flash = document.createElement('div');
    flash.className = 'gunshot-flash';
    document.body.appendChild(flash);

    setTimeout(() => flash.remove(), 100);
});

// 取得準星元素
const crosshair = document.getElementById('crosshair');

// 按下滑鼠時放大準星。
document.addEventListener('mousedown', () => {
    crosshair.style.transform = 'translate(-50%, -50%) scale(1.5)';
});

// 放開滑鼠時恢復準星原本大小。
document.addEventListener('mouseup', () => {
    crosshair.style.transform = 'translate(-50%, -50%) scale(1)';
});

// 頁面載入完成後淡入顯示。
window.addEventListener('load', () => {
    // 先將頁面透明，再透過過渡效果慢慢顯示。
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s ease';

    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});
