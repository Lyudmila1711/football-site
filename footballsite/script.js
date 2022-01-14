let appeal = document.getElementById('appeals');
let form = document.getElementById('text');
let date = document.getElementById("sign-date");
let newAppeal = document.getElementById('text-of-fans')

form.addEventListener('submit', addAppeal);

function addAppeal(a){
    a.preventDefault();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;

if (!newAppeal.value){
    alert("введіть своє звернення перед відправкою");
} else {
    let paragraph = document.createElement('p')
    paragraph.innerHTML = newAppeal.value;
    date.append(paragraph);

    let setDate = document.createElement('p');
    setDate.innerHTML = today + '<br>' + '<hr>';
    date.append(setDate);

    newAppeal.value = ''

} 
}
