const elementLi = document.getElementById('elementLi');
const firstButt = document.getElementById('firstButt');

let newLi = document.createElement("li");
newLi.classList.add('list-item');
let newTextForLi = document.createTextNode("Добавление текста");
newLi.append(newTextForLi);

const CreateElement = () => {
  elementLi.append(newLi)
}



const TwoButt = document.getElementById('TwoButt');

let oldLi = document.createElement("li");
oldLi.classList.add('list-item');
let oldTextForLi = document.createTextNode("Второй текст");
oldLi.prepend(oldTextForLi);

const DabblEll = () => {
  elementLi.prepend(oldLi)
}


const ThreeButt = document.getElementById('ThreeButt');
const DellFirst = () => {
  oldLi.removeChild(oldLi.childNodes[0])
}

const FourButt = document.getElementById('FourButt');
const DellTwo = () => {
  newLi.removeChild(newLi.childNodes[0])
}

const Dellete = document.getElementById('Dellete')
const DellBody = () => {
  document.body.innerHTML = ' ';
  document.body.style.backgroundColor = 'black'
}