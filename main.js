function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; contador < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(Event){
        

        if(Event.code  === 'Enter'|| Event.code  === 'Space'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
