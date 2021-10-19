const navTrigger = document.getElementById("nav-trigger");
const gallery = document.getElementsByClassName("images-container")[0];
let galleryCount = 0;
let timerHandler;

window.onload = function () {
    navTrigger.addEventListener("click", open_nav, true);
    start_gallery_timer();
}

function start_gallery_timer () {
    timerHandler = setInterval(rotateGallery, 1000 * 10);
}

function remove_gallery_timer () {
    clearInterval(timerHandler);
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

function rotateGallery () {
    console.log("test");
    galleryCount++;
    gallery.style.marginLeft = "" + (-1 * (galleryCount % 3) * 100 ) + "vw";
}