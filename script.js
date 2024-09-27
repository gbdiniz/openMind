document.body.onload = () => {
    document.body.style.opacity='1'
    // document.getElementById('header').style.top = 0
};
document.addEventListener('click', function (event) {
    if (!event.target.matches('.nav-link')) return;

    event.preventDefault();

    var element = document.getElementById(event.target.dataset.target);

    element.scrollIntoView({ behavior: "smooth", block: "center" });

});
window.onscroll = function () {
    var header = document.getElementById('header');
    if (window.pageYOffset > 50) {
        header.classList.add("bg-header");
    } else {
        header.classList.remove("bg-header");
    }
}