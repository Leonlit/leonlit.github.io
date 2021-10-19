const navTrigger = document.getElementById("nav-trigger");
const gallery = document.getElementsByClassName("images-container")[0];
const img_id = document.getElementById("gallery_image");
const imageGalleryController = document.getElementById("image_gallery_controller");

let galleryCount = 0;
let timerHandler;
const images_src = ["asset/illus_1.png", "asset/illus_2.png", "asset/illus_3.png"]

window.onload = function () {
    navTrigger.addEventListener("click", open_nav, true);
    generate_img_placement()
    start_gallery_timer();
}

function start_gallery_timer () {
    timerHandler = setInterval(rotateGallery, 1000 * 5);
}

function remove_gallery_timer () {
    clearInterval(timerHandler);
}

function generate_img_placement () {
    const size = images_src.length;
    for (let x = 0; x < size; x++) {
        const temp = document.createElement("div");
        temp.setAttribute("id", x)
        temp.addEventListener("click", img_manual_rotate)
        imageGalleryController.appendChild(temp)
    }
}

function img_manual_rotate (event) {
    remove_gallery_timer()
    galleryCount = event.target.id - 1;
    rotateGallery();
    start_gallery_timer()
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
    galleryCount = (galleryCount + 1) % 3;
    img_id.src=images_src[galleryCount];
    img_id.classList.add("img_hide")
    setTimeout(()=>{
        img_id.style.animationName = "show_img";
    }, 1000)
}