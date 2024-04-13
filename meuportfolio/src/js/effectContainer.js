let currentContainer;
let maxContainer = 3;
let minContainer = 1;

let currentGroup;

function setupInitialState() {
    currentContainer = 1; // Define o contêiner inicial como 1
    checkContainer(); // Garante que o estado inicial dos contêineres esteja correto
    console.log(currentContainer); // Mostra o valor inicial de currentContainer no console

    currentGroup = 1;
    checkGroup();
    console.log(currentGroup);
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

function showNextContainer(){
    if (currentContainer < maxContainer) {
        currentContainer++;
        checkContainer();
        console.log(currentContainer);
    }
}

function showBackContainer(){
    if (currentContainer > minContainer) {
        currentContainer--;
        checkContainer();
        console.log(currentContainer);
    }
}

function checkContainer(){
    if (currentContainer === 1){
        document.getElementById("first__container").style.display = "flex";
        document.getElementById("first__container").style.height = "300px";
        document.getElementById("second__container").style.display = "none";
        document.getElementById("third__container").style.display = "none";

        document.getElementById("back__button").style.display = "none";
        document.getElementById("next__button").style.display = "flex";
    }else if (currentContainer === 2){
        document.getElementById("first__container").style.display = "none";
        document.getElementById("second__container").style.display = "flex";
        document.getElementById("second__container").style.height = "300px";
        document.getElementById("third__container").style.display = "none";

        document.getElementById("back__button").style.display = "flex";
        document.getElementById("next__button").style.display = "flex";
    }else if (currentContainer === 3){
        document.getElementById("first__container").style.display = "none";
        document.getElementById("second__container").style.display = "none";
        document.getElementById("third__container").style.display = "flex";
        document.getElementById("third__container").style.height = "300px";

        document.getElementById("back__button").style.display = "flex";
        document.getElementById("next__button").style.display = "none";
    }
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

window.onload = setupInitialState;
