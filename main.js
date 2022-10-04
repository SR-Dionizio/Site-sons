//Função que da o play no som............
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

//referência constante....................................
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

//tradução=enquanto
while (contador < listaDeTeclas.length) {

    const tecla =listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    contador = contador + 1

    console.log(contador);
}