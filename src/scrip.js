setTimeout(() => {
  document.querySelector(".loading").classList.add('hidden')
  document.querySelector(".body").classList.remove('hidden')
}, 5000);

var btn= document.getElementById('bar');
var nav= document.getElementById('menu');
btn.addEventListener('click', () =>{
    btn.classList.toggle('open')
    nav.classList.add('grid')
    nav.classList.toggle('hidden')
})

document.querySelector('#menu').addEventListener('click', () =>{
    nav.classList.toggle('hidden')
    btn.classList.remove('open')
})
var typing=new Typed(".info", {
    strings: ["Web Developer", "Aworefa Tobi","Frontend developer","3d Modeler","Industrial Designer",],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});
var current = new Date().getFullYear()
document.querySelector('#yearsofexperience').innerHTML = current - 2021
console.log(current)
let thisDay = new Date()
let day = thisDay.getDay()
let month = thisDay.getMonth()
var nameOfDays = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday','Saturday','Sunday']
var nameOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']



document.querySelector('#dayname').innerHTML = nameOfDays[day] + ':'
document.querySelector('#month').innerHTML = nameOfMonth[month] + ','
document.querySelector('#day').innerHTML = thisDay.getDate()
document.querySelector('#year').innerHTML = new Date().getFullYear()