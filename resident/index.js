const openmenu = document.querySelector('#icon-open');
openmenu.addEventListener('click', menuopen);

function menuopen() {
    let barra = document.querySelector('#icon-open');
    let close = document.querySelector('#icon-close');
    let menu = document.querySelector('.menu-options');
    barra.style = 'font-size: 0rem;'
    close.style = 'font-size: 1.5rem;'
    menu.style = 'width: 10rem;'
}

const closemenu = document.querySelector('#icon-close');
closemenu.addEventListener('click', menuclose);

function menuclose() {
    let barra = document.querySelector('#icon-open');
    let close = document.querySelector('#icon-close');
    let menu = document.querySelector('.menu-options');
    barra.style = 'font-size: 1.5rem;'
    close.style = 'font-size: 0rem;'
    menu.style = 'width: 2.3rem;'
}

const steam = document.querySelector('.steam');
steam.addEventListener('click', ssteam);

function ssteam() {
    let st = document.querySelector('#capa-360');
    let plataformas = document.querySelector('#plataformaas');
    let data = document.querySelector('#data');
    st.src = '/img/capa-pc.png'
    st.style = 'border: solid 4px gray;'
    plataformas.innerHTML = 'STEAM'
    data.innerHTML = '16 de fevereiro de 2012'
}

const xbox360 = document.querySelector('.xbox360');
xbox360.addEventListener('click', xbo360);

function xbo360() {
    let st = document.querySelector('#capa-360');
    let plataformas = document.querySelector('#plataformaas');
    let dataa = document.querySelector('#data');
    st.src = '/img/capa-360.jpg'
    st.style = 'border: solid 4px green;'
    plataformas.innerHTML = 'XBOX360'
    dataa.innerHTML = '14 de maio de 2010'
}

const playstation = document.querySelector('.playst');
playstation.addEventListener('click', playstaation);

function playstaation() {
    let playz = document.querySelector('#capa-remstered');
    let plataformas = document.querySelector('#platafformas');
    playz.src = '/img/capa-ps4.jpg'
    playz.style = 'border: solid 4px blue;'
    plataformas.innerHTML = 'PLAYSTATION 4, PLATSTATION 5'
}

const xboxx = document.querySelector('.xboxx');
xboxx.addEventListener('click', xboxone);

function xboxone() {
    let xbo = document.querySelector('#capa-remstered');
    let pplataformas = document.querySelector('#platafformas');
    xbo.src = '/img/alan-remastered.png'
    xbo.style = 'border: solid 4px green;'
    pplataformas.innerHTML = 'XBOX ONE, XBOXS SERIES X/S'
}


const playstationn = document.querySelector('.plays');
playstationn.addEventListener('click', playstaationn);

function playstaationn() {
    let playzz = document.querySelector('#capa-2');
    let plataformass = document.querySelector('#plataformass');
    playzz.src = '/img/capa-ps5.png'
    playzz.style = 'border: solid 4px blue;'
    plataformass.innerHTML = 'PLAYSTATION 5'
}

const xboxz = document.querySelector('.xbox');
xboxz.addEventListener('click', xboxseries);

function xboxseries() {
    let series = document.querySelector('#capa-2');
    let sx = document.querySelector('#plataformass');
    series.src = '/img/alan-2.png'
    series.style = 'border: solid 4px green;'
    sx.innerHTML = 'XBOXS SERIES X/S'
}


const elements = document.querySelectorAll('.hidden');
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

elements.forEach((element) => myobserver.observe(element))