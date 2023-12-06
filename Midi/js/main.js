function playSound(idElementSound){
    const element = document.querySelector(idElementSound).play();

    if (element && element.localName === 'audio'){
        element.play();
    }else{
        console.log('Elemento não encontrado');
    }
}

const keyList = document.querySelectorAll('.tecla');
// tipo Nome = acessoAoDocumento.selecao('elemento');

//para
for (let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrumento = key.classList[1];
    const idSound = `#som_${instrumento}`; //template string

    key.onclick = function () {
        playSound(idSound);
    }

    key.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa');
        }
    }
    key.onkeyup = function(event){

        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.remove('ativa');
        }
    }
}