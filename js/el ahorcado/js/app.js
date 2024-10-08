let palabras = [
    'celular',
    'palabra',
    'perdona',
    'persona',
   'ilusion',
    'sistema',
    'conocer',
    'hermosa',
    'mejorar',
    'aspecto',
    'valores',
    'interes',
    'funcion',
    'motivar',
    'cumplir',
    'ofrecer',
    'calidad',
    'madurar',
    'corazon',
    'estudio',
]


function juego(){

    let indice = parseInt(Math.random() * 19);
    console.log(indice);
    let palabra = palabras[indice];
   let letra = prompt("ingrese una letra");


   document.getElementById("juego").innerHTML = palabra;
}
const wordcontainer = document.getElementById("wordcontainer");
const iniciobutton = document. getElementById(iniciobutton);
const usedlettersElememt = document. getElementById("usedletters");

let canvas = document.getElementById("canvas");
let ctx = canvas.getcontext("sd");
ctx.canvas.width  = 0;
ctx.canvas.height = 0;

const bodyparts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];
let selectedword;
let usedletters;
let mistakes;
let hits

const startgame = () => {
    usedletters= [];
    mistakes = 0;
    hits= 0;
    wordcontainer.innerHTML = '';

};

iniciobutton.addEventListener("click", iniciogame);
juego();

