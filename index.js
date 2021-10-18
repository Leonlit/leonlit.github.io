const navTrigger = document.getElementById("nav-trigger");

window.onload = function () {
    navTrigger.addEventListener("click", open_nav, true);
}

function open_nav () {
    const items = document.getElementsByClassName("nav_items")[0];
    items.style.top = "60px";
    navTrigger.removeEventListener("click", open_nav, true)
    navTrigger.addEventListener("click", close_nav, true)
}

function close_nav () {
    const items = document.getElementsByClassName("nav_items")[0];
    items.style.top = "-50vh";
    navTrigger.removeEventListener("click", close_nav, true)
    navTrigger.addEventListener("click", open_nav, true)
}