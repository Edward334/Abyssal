function checkFinalPassword() {
    const input = document.getElementById('final-password');
    const enteredKey = input.value;
    const correctKey = "妖魔夜行"; // 明文存储最终页密钥

    if (enteredKey === correctKey) {
        alert("最终密钥正确！");
        document.getElementById('final-message').style.visibility = 'visible';
        document.getElementById('decrypted-final-key').textContent = correctKey; // 显示密钥
        // 在这里可以添加解锁最终内容的进一步操作
    } else {
        alert("最终密钥错误！请重试。");
        input.value = '';
    }
}