const body = document.getElementById('body');

const nike01 = document.getElementById('nike01')
const nike02 = document.getElementById('nike02');

const nike03 = document.getElementById('nike03');
const nikePrincipal = document.getElementById('img-principal');

const divText = document.querySelector('.text');
const logo = document.getElementById('logo')

const nav = document.getElementById('nav')
const btn = document.querySelector('.btn')

const btnMenu = document.getElementById("btn-menu")

nike01.addEventListener('click', function Nike01() {
    body.setAttribute('style', 'background-color: white');
    logo.setAttribute('src', 'imagens/logo2.png')
    divText.setAttribute('style', 'color: black');
    nikePrincipal.setAttribute('src', "imagens/nike1/1.png");
    nav.classList.remove('color-link')
    btn.classList.remove('btn2');
    btnMenu.setAttribute('style', "color: black")
});

nike02.addEventListener('click', function Nike02() {
    logo.setAttribute('src', 'imagens/logo2.png')
    divText.setAttribute('style', 'color: black');
    nav.classList.remove('color-link')
    btn.classList.remove('btn2');
    body.setAttribute("style", "background-color: #FF884C");
    nikePrincipal.setAttribute('src', "imagens/nike2/1.png");
    btnMenu.setAttribute('style', "color: black")
});

nike03.addEventListener('click', function Nike03() {
    body.setAttribute('style', 'background-color: black');
    logo.setAttribute('src', 'imagens/logo1.png');
    nav.classList.add('color-link');
    divText.setAttribute('style', 'color: white');
    nikePrincipal.setAttribute('src', 'imagens/nike3/1.png');
    btn.classList.add('btn2');
    btnMenu.setAttribute('style', "color: white")
})


btnMenu.addEventListener('click', () => {
    nav.classList.toggle('active')
});



