let toggleIcon = document.querySelector(".links .icon");
let list = document.querySelector(".links ul");
toggleIcon.onclick = function () {
    list.classList.toggle("open");
}