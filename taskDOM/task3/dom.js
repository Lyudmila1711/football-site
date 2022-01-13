
let button = document.getElementById('button').addEventListener
('click', clickText);

let secondBut = document.getElementById('button').addEventListener
('mouseenter', hoverText);

let outEvent = document.getElementById('button').addEventListener
('mouseleave', outText);


function clickText(){
    let output = document.querySelector('p');
    let newElement = document.createElement('div');
    output.append(newElement, 'I was pressed');
}

function hoverText(){
    let output = document.querySelector('p');
    let newElement = document.createElement('div');
    output.append(newElement, `Mouse on me!`);
}

function outText(){
    let output = document.querySelector('p');
    let newElement = document.createElement('div');
    output.append(newElement, `Mouse is not on me!`);
}