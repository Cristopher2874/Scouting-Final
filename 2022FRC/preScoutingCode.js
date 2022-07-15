//  General -------------------------------------------------------------------------------------->

let team = document.getElementById('team');
    parseInt(team);
let teamName = document.getElementById('teamName');

//Recuperar: team, teamName

//  Tasks -------------------------------------------------------------------------------------->

let checkRecoge = document.getElementById('recoge');
let recoge = 0;

function recoger(){
    if(recoge == 0){
        recoge = 1;
        document.getElementById('recogePiso').innerHTML = 'Recoge del piso: sí';
    }
    else if(recoge == 1){
        recoge = 0;
        document.getElementById('recogePiso').innerHTML = 'Recoge del piso: no';
    }    
}

checkRecoge.addEventListener('click', recoger);

let checkArriba = document.getElementById('arriba');
let disparaUp = 0;

function disUp(){
    if(disparaUp == 0){
        disparaUp = 1;
        document.getElementById('disparaUp').innerHTML = 'Dispara arriba: sí';
    }
    else if(disparaUp == 1){
        disparaUp = 0;
        document.getElementById('disparaUp').innerHTML = 'Dispara arriba: no';
    }    
}

checkArriba.addEventListener('click', disUp);

let checkAbajo = document.getElementById('abajo');
let disparaDown = 0;

function disDown(){
    if(disparaDown == 0){
        disparaDown = 1;
        document.getElementById('disparaDown').innerHTML = 'Dispara abajo: sí';
    }
    else if(disparaDown == 1){
        disparaDown = 0;
        document.getElementById('disparaDown').innerHTML = 'Dispara abajo: no';
    }    
}

checkAbajo.addEventListener('click', disDown);

let checkBarra = document.getElementById('escala');
let barra = 0;

function escala(){
    if(barra == 0){
        barra = 1;
        document.getElementById('barra').innerHTML = 'Escala: sí';
    }
    else if(barra == 1){
        barra = 0;
        document.getElementById('barra').innerHTML = 'Escala: no';
    }    
}

checkBarra.addEventListener('click', escala);

let barra1 = document.getElementById('radio1');
let barra2 = document.getElementById('radio2');
let barra3 = document.getElementById('radio3');
let barra4 = document.getElementById('radio4');

let numBarra = 0;

function bar1(){
    numBarra = barra1.value;
}function bar2(){
    numBarra = barra2.value;
}function bar3(){
    numBarra = barra3.value;
}function bar4(){
    numBarra = barra4.value;
}

barra1.addEventListener('click',bar1);
barra2.addEventListener('click',bar2);
barra3.addEventListener('click',bar3);
barra4.addEventListener('click',bar4);

let checkAuto = document.getElementById('escala');
let auto = 0;

function autonomo(){
    if(auto == 0){
        auto = 1;
        document.getElementById('auto').innerHTML = 'Autónomo: sí';
    }
    else if(auto == 1){
        auto = 0;
        document.getElementById('auto').innerHTML = 'Autónomo: no';
    }    
}

checkBarra.addEventListener('click', autonomo);

let auto1 = document.getElementById('radio5');
let auto2 = document.getElementById('radio6');
let auto3 = document.getElementById('radio7');

let pos = 0;

function a1(){
    pos = auto1.value;
}function a2(){
    pos = auto2.value;
}function a3(){
    pos = auto3.value;
}

auto1.addEventListener('click',a1);
auto2.addEventListener('click',a2);
auto3.addEventListener('click',a3);

//Recuperar: recoge, disparaUp, disparaDown, barra, numBarra, auto, pos

//  Extra -------------------------------------------------------------------------------------->

let chasis = document.getElementById('chasis');
let controlador = document.getElementById('controlador');
let lenguaje = document.getElementById('lenguaje');
let intake = document.getElementById('intake');

// ---------------------------------------------------------------------------------------------->

let submit = document.getElementById('submitBtn');
let clear = document.getElementById('clear');

function show(){    
    resName.innerHTML= "DATA;TASK;BARRA;AUTO;INFO"
    resMatch.innerHTML= team.value+";" + recoge + ";" + barra + ";" + auto + ";" + chasis.value;
    resTeam.innerHTML= teamName.value+";" + disparaUp + ";" + numBarra + ";" + pos + ";" + controlador.value;
    resAutoUpper.innerHTML= "" + ";" + disparaDown + ";" + "" + ";" + "" + ";" + lenguaje.value;
    resFinal.innerHTML= ""+";"+ "" +";" + "" + ";" + "intake rev" + ";" + intake.value;
}
function restart(){
    downloadFile();
}

submit.addEventListener('click',show);
clear.addEventListener('click',restart)