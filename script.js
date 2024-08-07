document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById('NavBtn');
    if (btn) {
        btn.addEventListener("click", function() {
            window.location.href = "SignUpPage3.html";
        });
    }

    let btn2 = document.getElementById("btnNext");
    if (btn2) {
        btn2.addEventListener("click", function() {
            window.location.href = "landingPage.html";
        });
    }
});
