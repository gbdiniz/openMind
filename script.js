document.body.onload = () => {
    document.body.style.opacity = '1'
    // document.getElementById('header').style.top = 0
};
document.addEventListener('click', function (event) {
    if (!event.target.matches('.nav-link') && !event.target.matches('.our-games')) return;

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

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id == 'first-content') {
            // Add the animation class
            entry.target.classList.add('right-slidein-animation');
        }

        // If the element is visible
        if (entry.isIntersecting && entry.target.classList.contains("about-person")) {
            // Add the animation class
            entry.target.classList.add('top-slidein-animation');
        }

        if (entry.isIntersecting && entry.target.id == 'third-content') {
            // Add the animation class
            const children = entry.target.children;

            children[0].classList.add('right-slidein-animation');
            children[1].classList.add('left-slidein-animation');
        }

        if (entry.isIntersecting && entry.target.id == 'fourth-content') {
            // Add the animation class
            const children = entry.target.children;

            children[0].classList.add('top-slidein-animation');

            // children[1].classList.add('left-slidein-animation')
        }
    });
});

observer.observe(document.querySelector('#first-content'));

const avatars = document.querySelectorAll('.about-person');

// Loop over the elements and add each one to the observer
avatars.forEach((element) => observer.observe(element));

const thirdContent = document.querySelectorAll('#about-person');

thirdContent.forEach((element) => observer.observe(element));

observer.observe(document.querySelector('#third-content'));

observer.observe(document.querySelector('#fourth-content'));
