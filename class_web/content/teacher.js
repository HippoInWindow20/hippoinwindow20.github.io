function openHamburger() {
    $("#navbar").animate({
        left: "0"
    }, 500, function() {
        // Animation complete.
    });
}

function closeHamburger() {
    $("#navbar").animate({
        left: "-100vw"
    }, 500, function() {
        // Animation complete.
    });
}

function viewTeacher(name) {
    closeHamburger();
    $("#teacherFrame").attr("src", "teacher/default.html?subject=" + name);
}