function openHamburger() {
    $("#navbarw").animate({
        left: "0"
    }, 500, function() {
        // Animation complete.
    });
}

function closeHamburger() {
    $("#navbarw").animate({
        left: "-100vw"
    }, 500, function() {
        // Animation complete.
    });
}

function viewWorker(name) {
    closeHamburger();
    $("#workerFrame").attr("src", "work/default.html?job=" + name);
}