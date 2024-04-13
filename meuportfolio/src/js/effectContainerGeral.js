let currentGroup;

//SOBRE = 1 & HABILIDADES = 2

function groupInitialState() {
    currentGroup = 1; // Define o contêiner inicial o SOBRE
    checkGroup(); // Garante que o estado inicial dos contêineres esteja correto
    console.log(currentGroup); // Mostra o valor inicial de currentContainer no console
}

function showAboutme(){
    currentGroup = 1;
    checkGroup();
    console.log(currentGroup);
}

function showSkills(){
    currentGroup = 2;
    checkGroup();
    console.log(currentGroup);
}

function checkGroup(){
    if (currentGroup === 1){
        document.getElementById("container__about").style.display = "flex";
        document.getElementById("container__mineskills").style.display = "none";
    
        document.getElementById("aboutmeTitle").style.textShadow = '1px 1px 15px #d558c8';
        document.getElementById("barskillsTitle").style.textShadow = '';
    }else if (currentGroup === 2){
        document.getElementById("container__about").style.display = "none";
        document.getElementById("container__mineskills").style.display = "flex";

        document.getElementById("aboutmeTitle").style.textShadow = '';
        document.getElementById("barskillsTitle").style.textShadow = '1px 1px 15px #d558c8';
    }
}

window.onload = groupInitialState;