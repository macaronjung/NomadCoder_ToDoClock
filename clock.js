const clockContainer = document.querySelector(".js-clock"), clockTitle = clockContainer.querySelector("h1");

/* const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1"); */

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

/* const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = tit
  if(currentClass !== CLICKED_CLASS) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init(){
  title.addEventListener("mouseenter", handleClick);
}
init(); */


/* const title = document.querySelector("#title");

const BASE_COLOR = "red";
const OTHER_COLOR = "blue";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = "BASE_COLOR";
  title.addEventListener("mouseenter", handleClick);
}
init(); */

/* function handleOnline(){
  console.log("Welcome Back!")
}

window.addEventListener("online", handleOnline) */

/* const title = document.querySelector ("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(title); */

/* function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const Nico = sayHello("Nico", 15);

console.log(Nico) */

/* const calculator = {
  plus: function(a, b){
    return a + b;
  }
}

const plus = calculator.plus(5, 5)
console.log(plus) */


/* const calculator = {
  squared: function(a, b) {
    return a ** b;
  }
}

const squared = calculator.squared(5, 5)
console.log(squared) */