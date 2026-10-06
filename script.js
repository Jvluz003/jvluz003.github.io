// Registrando o plugin de rolagem do GSAP
gsap.registerPlugin(ScrollTrigger);

// Animação da Seção Inicial (Hero) ao carregar a página
const heroTl = gsap.timeline();

heroTl.from(".profile-img", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
})
.from(".gsap-hero", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.15,
    ease: "power3.out"
}, "-=0.5");

// Efeito de escurecimento no Menu Superior ao rolar a página
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(10, 10, 10, 0.98)";
        nav.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.5)";
    } else {
        nav.style.background = "rgba(10, 10, 10, 0.85)";
        nav.style.boxShadow = "none";
    }
});

// Animação de Surgimento (Fade-Up) Genérico para Itens de Linha do Tempo e Textos
gsap.utils.toArray(".gsap-fade").forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 40,
        opacity: 0,
        ease: "power2.out"
    });
});

// Animação dos Títulos das Seções (Linha azul acompanha o surgimento)
gsap.utils.toArray(".section-title").forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
        },
        duration: 0.6,
        x: -20,
        opacity: 0,
        ease: "power2.out"
    });
});

// Animações laterais da tela dividida (Habilidades e Formação)
gsap.from(".gsap-slide-right", {
    scrollTrigger: {
        trigger: ".dual-col",
        start: "top 80%",
    },
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".gsap-slide-left", {
    scrollTrigger: {
        trigger: ".dual-col",
        start: "top 80%",
    },
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
});