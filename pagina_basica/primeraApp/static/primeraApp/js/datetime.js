(() => {
    const dateEl = document.getElementById("date");
    const timeEl = document.getElementById("time");
    const clockEl = document.querySelector(".clock");

    if (!dateEl || !timeEl || !clockEl) {
        return;
    }

    const isoInitial = clockEl.dataset.isoInitial;
    if (!isoInitial) {
        return;
    }

    const initialServerTime = new Date(isoInitial);
    if (Number.isNaN(initialServerTime.getTime())) {
        return;
    }

    const loadedAt = Date.now();
    const dateFormatter = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    function updateClock() {
        const elapsedMs = Date.now() - loadedAt;
        const liveTime = new Date(initialServerTime.getTime() + elapsedMs);
        dateEl.textContent = dateFormatter.format(liveTime);
        timeEl.textContent = liveTime.toLocaleTimeString("es-ES", { hour12: false });
    }

    updateClock();
    setInterval(updateClock, 1000);
})();
