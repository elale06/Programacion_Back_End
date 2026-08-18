(() => {
    const machine = document.getElementById("machine");
    const screen = document.getElementById("numberScreen");
    const spinButton = document.getElementById("spinButton");
    const resultValue = document.getElementById("resultValue");

    if (!machine || !screen || !spinButton || !resultValue) {
        return;
    }

    let spinning = false;
    const spinDurationMs = 1450;
    const min = 1;
    const max = 100;

    function randomInt(minValue, maxValue) {
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }

    function formatNumber(value) {
        return String(value).padStart(3, "0");
    }

    function spinMachine() {
        if (spinning) {
            return;
        }

        spinning = true;
        spinButton.disabled = true;
        machine.classList.add("spinning");

        const scrambleTimer = window.setInterval(() => {
            const current = randomInt(min, max);
            screen.textContent = formatNumber(current);
        }, 65);

        window.setTimeout(() => {
            window.clearInterval(scrambleTimer);
            const finalValue = randomInt(min, max);
            screen.textContent = formatNumber(finalValue);
            resultValue.textContent = String(finalValue);
            machine.classList.remove("spinning");
            spinButton.disabled = false;
            spinning = false;
        }, spinDurationMs);
    }

    spinButton.addEventListener("click", spinMachine);
})();
