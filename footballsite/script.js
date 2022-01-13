let appeal = document.getElementById('appeals');
let form = document.getElementById('text');
let date = document.getElementById("sign-date");

form.addEventListener('submit', addAppeal);

function addAppeal(a){
    a.preventDefault();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;

let newAppeal = document.getElementById('text-of-fans').value;

if (newAppeal.length > 20){
    let paragraph = document.createElement('p')
    paragraph.innerHTML = newAppeal;
    date.append(paragraph);

    let setDate = document.createElement('p');
    setDate.innerHTML = today;
    date.append(setDate);

    newAppeal = '';

} else {
    alert("введіть своє звернення перед відправкою");
}
}
