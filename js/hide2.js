const btn1 = document.getElementById("hide2");
btn1.addEventListener('click', function handleClick1() {
    const initialText1 = 'Show';
    if (btn1.textContent.toLowerCase().includes(initialText1.toLowerCase())) {
        btn1.textContent = 'Hide';
    }
    else {
        btn1.textContent = initialText1;
    }
});