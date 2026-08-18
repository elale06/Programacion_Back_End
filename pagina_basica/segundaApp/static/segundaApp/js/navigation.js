(() => {
    function goBack(fallback) {
        if (window.history.length > 1) {
            window.history.back();
            return;
        }
        window.location.href = fallback || "/";
    }

    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-go-back]");
        if (!trigger) {
            return;
        }

        event.preventDefault();
        goBack(trigger.dataset.fallback);
    });
})();
