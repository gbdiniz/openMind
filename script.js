// Animação de opacidade do body ao carregar a página
document.body.onload = () => {
    document.body.style.opacity = '1'
};

// Função ao clicar o botão, navegar para a seção desejada
document.addEventListener('click', function (event) {
    if (!event.target.matches('.nav-link') && !event.target.matches('.our-games')) return;

    event.preventDefault();

    var element = document.getElementById(event.target.dataset.target);

    element.scrollIntoView({ behavior: "smooth", block: "center" });

});

// Header muda o background ao rolar para o início ou para baixo
window.onscroll = function () {
    var header = document.getElementById('header');
    if (window.pageYOffset > 50) {
        header.classList.add("bg-header");
    } else {
        header.classList.remove("bg-header");
    }
}

// Contrução da função para observar cada seção e então adicionar a animação
const observer = new IntersectionObserver(entries => {
    // Para cada seção que é carregada ao rolar a página
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id == 'first-content') {
            entry.target.classList.add('right-slidein-animation');
        }

        if (entry.isIntersecting && entry.target.classList.contains("about-person")) {
            entry.target.classList.add('top-slidein-animation');
        }

        if (entry.isIntersecting && entry.target.id == 'game1') {
            entry.target.classList.add('right-slidein-animation');
        }

        if (entry.isIntersecting && entry.target.id == 'game2') {
            entry.target.classList.add('left-slidein-animation');
        }

        if (entry.isIntersecting && entry.target.id == 'fourth-content') {
            const children = entry.target.children;
            children[0].classList.add('top-slidein-animation');
        }
    });
});

// Observador da seção 1 do site
observer.observe(document.querySelector('#first-content'));

// Observador da seção "Nossa equipe" do site
const avatars = document.querySelectorAll('.about-person');
avatars.forEach((element) => observer.observe(element));

// Observador da seção "Nossos jogos" do site
const thirdContent = document.querySelectorAll('.row');
thirdContent.forEach((element) => observer.observe(element));

// Observador da seção "Contato" do site
observer.observe(document.querySelector('#fourth-content'));
