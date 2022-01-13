
let firstElement = document.querySelector('h1');

    firstElement.classList.toggle('h1');

let boldParagraph = document.querySelector('div > p');

    boldParagraph.style.fontWeight = "bold";

let redParagraph = document.querySelectorAll('p');

    redParagraph[1].style.color = "red";

let underlinedParagraph = document.querySelectorAll('p');

    underlinedParagraph[2].style.textDecoration = "underline";

let italicParagraph = document.querySelectorAll('p');

    italicParagraph[3].outerHTML = `<p style="font-style: italic">Fourth paragraph</p>`;

const firstDiv = document.getElementById('myDiv'),
list = firstDiv.nextElementSibling;

list.className = "horizontal";

const lastSpan = document.getElementById('myList'),
invisibleText = lastSpan.nextElementSibling;

console.log(invisibleText);

invisibleText.hidden = true;
