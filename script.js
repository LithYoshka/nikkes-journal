var tema = document.getElementById('tema');
var elementos = document.querySelectorAll('#entra1, #entra2, #entra3');
var seletorCoresLetra = document.querySelectorAll('article > p, nav > a, h1, h2, div > a, footer');
var seletorCoresFundo = document.querySelectorAll('header, .display, .display2, .tema, .new, div > .new-mobile2, footer');
var green = true;

tema.addEventListener('click', clicar);

function entra() {
    if(green == true){
        this.style.color = '#cfd6e4';
    } else {
        this.style.color = '#cfd6e4';
    }
}

function sair() {
    if(green == false){
        this.style.color = 'black';
    } else {
        this.style.color = 'white';
    }
}

elementos.forEach(function (elemento) {
    elemento.addEventListener('mouseenter', entra);
    elemento.addEventListener('mouseleave', sair);
});

function clicar() {
    
    
    switch (green) {
        case true:
            // cor fundos branco
            for (var i = 0; i < seletorCoresFundo.length; i++) {
                seletorCoresFundo[i].style.background = '#cfd6e4';
            }
            document.querySelector('#tema').style.background = '#1a1c22';
            document.querySelector('body').style.background = 'white';
            // cor letras
            for (var i = 0; i < seletorCoresLetra.length; i++) {
                seletorCoresLetra[i].style.color = 'black';
            }
            document.querySelector('#tema').style.color = 'white';
            document.getElementById('entra3').style.color = 'black'
            break;

        case false:
            // cor fundos escuro
            for (var i = 0; i < seletorCoresFundo.length; i++) {
                seletorCoresFundo[i].style.background = '#1a1c22';
            }
            document.querySelector('#tema').style.background = '#cfd6e4';
            document.querySelector('body').style.background = '#252931';
            // cor letras
            for (var i = 0; i < seletorCoresLetra.length; i++) {
                seletorCoresLetra[i].style.color = 'white';
            }
            document.querySelector('#tema').style.color = 'black';
            document.getElementById('entra3').style.color = 'white'
            break;
    }
    green = !green;
    
    
}
