(() => {
    function goBack(fallback) {
        if (window.history.length > 1) {
            window.history.back();
            return;
        }
        window.location.href = fallback || "/";
    }

    document.addEventListener("click", (event) => {
        const target = event.target.closest("[data-go-back]");
        if (!target) {
            return;
        }

        event.preventDefault();
        goBack(target.dataset.fallback);
    });
})();
