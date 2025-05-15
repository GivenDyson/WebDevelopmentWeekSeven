document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    const animateBtn = document.getElementById("animateBtn");

    //loading saved preference
    const saveColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        colorPicker.value = savedColor;
    }

    colorPicker.addEventListener("change", (e) => {
        const selectColor = e.target.value;
        document.body.style.background = selectedColor;
        localStorage.setItem("bgColor", selectColor);
    });

    //triggering css animation on button click
    animateBtn.addEventListener("click", () => {
        animateBtn.classList.add("animated");

        //removing class after animation ends to allow re-trigger
        animateBtn.addEventListener("animationend", () => {
            animateBtn.classList.remove("animated");
        }, {once: true });
    });
});