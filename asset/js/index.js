const navTrigger = document.getElementById("nav-trigger");
const gallery = document.getElementsByClassName("images-container")[0];
const img_id = document.getElementById("gallery_image");
const imageGalleryController = document.getElementById("image_gallery_controller");

let galleryCount = 0;
let newPosition = 0;
let timerHandler;
const images_src = ["asset/img/illus_1.png", "asset/img/illus_2.png", "asset/img/illus_3.png"]

window.onload = function () {
    navTrigger.addEventListener("click", open_nav, true);
    img_id.addEventListener("click", forced_img_rotate);
    window.addEventListener('resize', fix_nav);
    window.addEventListener('scroll', handle_scrolled);
    generate_img_placement();
    start_gallery_timer();
    add_position_handler_from_nav();
}

const skills = document.getElementById("skills");
const portfolio = document.getElementById("portfolio");
const aboutShort = document.getElementById("about-short");
const aboutLong = document.getElementById("about-long");
const contact = document.getElementById("contact");

function handle_scrolled () {
    const userPosition = window.scrollY;
    const skillOffset = skills.offsetTop - 60;
    const portfolioOffset = portfolio.offsetTop - 60;
    const aboutShortOffset = aboutShort.offsetTop - 60;
    const aboutLongOffset = aboutLong.offsetTop - 60;
    const contactOffset = contact.offsetTop - 60;
    
    remove_other_highlight();

    if (userPosition > skillOffset && userPosition < portfolioOffset) {
        document.getElementsByName("skills")[0].classList.add("active");
    }
    if (userPosition > portfolioOffset && userPosition < aboutShortOffset) {
        document.getElementsByName("portfolio")[0].classList.add("active");
    }
    if (userPosition > aboutShortOffset && userPosition < aboutLongOffset) {
        document.getElementsByName("about-short")[0].classList.add("active");
    }
    if (userPosition > aboutLongOffset && userPosition < contactOffset) {
        document.getElementsByName("about-long")[0].classList.add("active");
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        remove_other_highlight()
        document.getElementsByName("contact")[0].classList.add("active");
    }
}

function remove_other_highlight () {
    const elements = document.querySelectorAll(".nav_items span");
    [].map.call(elements, function(ele) {
        ele.classList.remove("active");
    });
}

function fix_nav () {
    const items = document.getElementsByClassName("nav_items")[0];
    items.removeAttribute("style");
}

function start_gallery_timer () {
    timerHandler = setInterval(rotate_gallery, 1000 * 7);
}

function remove_gallery_timer () {
    clearInterval(timerHandler);
}

function generate_img_placement () {
    const size = images_src.length;
    for (let x = 0; x < size; x++) {
        const temp = document.createElement("div");
        temp.setAttribute("id", x);
        temp.addEventListener("click", img_manual_rotate);
        if (x == 0) {
            temp.setAttribute("style", "background-color: rgb(117, 0, 117);");
        }
        imageGalleryController.appendChild(temp);
    }
}

function img_manual_rotate (event) {
    hide_img_with_animation();
    remove_gallery_timer();
    newPosition = event.target.id;;
    img_id.addEventListener("animationend", end_of_img_hide, false);
    start_gallery_timer();
}

function forced_img_rotate () {
    hide_img_with_animation();
    remove_gallery_timer();
    newPosition = (galleryCount + 1) % 3;
    img_id.addEventListener("animationend", end_of_img_hide, false);
    start_gallery_timer();
}

function add_position_handler_from_nav() {
    const elements = document.querySelectorAll(".nav_items span a");
    const hightlist_position = function () {
        [].map.call(elements, function(ele) {
            ele.parentNode.classList.remove("active") 
        });
        this.parentNode.classList.add("active");
    };
    [].map.call(elements, function(ele) {
        ele.addEventListener("click", hightlist_position, false);
    });
}

function open_nav () {
    const items = document.getElementsByClassName("nav_items")[0];
    items.style.top = "59px";
    navTrigger.removeEventListener("click", open_nav, true);
    navTrigger.addEventListener("click", close_nav, true);
}

function close_nav () {
    if (window.innerWidth >= 1024) {
        return;
    }
    const items = document.getElementsByClassName("nav_items")[0];
    items.style.top = "-50vh";
    navTrigger.removeEventListener("click", close_nav, true);
    navTrigger.addEventListener("click", open_nav, true);
}

function hide_img_with_animation () {
    img_id.classList.remove("img_show");
    img_id.classList.add("img_hide");
}

function rotate_gallery () {
    hide_img_with_animation();
    newPosition = (galleryCount + 1) % 3;
    img_id.addEventListener("animationend", end_of_img_hide, false);
}

function end_of_img_hide () {
    change_image(newPosition);
    change_controller(galleryCount, newPosition);
    galleryCount = newPosition;
}

function change_image(position_new) {   
    img_id.src=images_src[position_new];
    img_id.classList.remove("img_hide");
    img_id.classList.add("img_show");
}

function change_controller(position_old, position_new) {
    const targetedController = imageGalleryController.getElementsByTagName("div");
    targetedController[position_old].removeAttribute("style");
    targetedController[position_new].style.backgroundColor = "rgb(117, 0, 117)";
}