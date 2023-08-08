const btn = document.getElementById("hide1");
btn.addEventListener('click', function handleClick() {
    const initialText = 'Show';
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = 'Hide';
    }
    else {
        btn.textContent = initialText;
    }
});