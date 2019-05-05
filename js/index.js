// Your code goes here
//Nav links turn yellow with double click
const nav =document.querySelector (".nav");
nav.addEventListener('dblclick', (e) => { e.target.style.backgroundColor = 'yellow'; });
//Fun Bus on Nav is larger with mouseover
const funbus = document.querySelector (".logo-heading");
funbus.addEventListener('mouseover', (e) => { e.target.style.transform = 'scale(2)'; });
//Popup when scrolling
const body = document.querySelector ("body");
body.addEventListener('wheel', function alertMeOnce(){
    alert("We are working on events in Javascript!");
    body.removeEventListener('wheel', alertMeOnce);
  });
//Border (in Salmon) when copying text in Let's Go section
const textcontent = document.querySelectorAll (".text-content");
textcontent[0].addEventListener('copy', (e) => { e.target.style.border = '4px dashed salmon'; });  

funbus.addEventListener('drag', (event) => { event.target.style.backgroundColor = 'yellow'; });

funbus.addEventListener('load', (event) => { event.target.style.backgroundColor = 'yellow'; });

funbus.addEventListener('focus', (event) => { event.target.style.backgroundColor = 'yellow'; });

funbus.addEventListener('resize', (event) => { event.target.style.backgroundColor = 'yellow'; });

funbus.addEventListener('scroll', (event) => { event.target.style.backgroundColor = 'yellow'; });

funbus.addEventListener('select', (e) => { e.target.style.backgroundColor = 'yellow'; });
