

/* 1.1 task */
let elem = document.querySelectorAll('li');

console.log(elem[0].innerHTML,elem[4].innerHTML, elem[1].innerHTML,
    elem[3].innerHTML, elem[2].innerHTML);

;


/* 1.2 task*/
let second = document.getElementsByTagName('li');
let j = second.length-1;
let newArr = [];
for (let i = 0; j>=i; ++i){
    newArr.push(second[i].textContent);
    newArr.push(second[j].textContent);
    j--;
};  newArr.pop();
    console.log(newArr.toString(' '));



