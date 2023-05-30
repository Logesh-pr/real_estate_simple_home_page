
// Nav bar

const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});



// Deals section

function resident(){
    document.getElementById('img-1')
    .src="assets/img/image 01.jpg";

    document.getElementById('img-2')
    .src="assets/img/image 02.jpg";

    document.getElementById('img-3')
    .src="assets/img/image 03.jpg";
}

function commercial(){
    document.getElementById('img-1')
    .src="assets/img/image 06.jpg";

    document.getElementById('img-2')
    .src="assets/img/image 07.jpg";

    document.getElementById('img-3')
    .src="assets/img/image 08.jpg";
}

function agriculture(){
    document.getElementById('img-1')
    .src="assets/img/image 09.jpg";

    document.getElementById('img-2')
    .src="assets/img/image 10.jpg";

    document.getElementById('img-3')
    .src="assets/img/image 11.jpg";
}