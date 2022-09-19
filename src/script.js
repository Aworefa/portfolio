var btn= document.getElementById('menu-btn');
var nav= document.getElementById('menu');
btn.addEventListener('click', () =>{
    btn.classList.toggle('open')
    nav.classList.add('flex')
    nav.classList.toggle('hidden')
})

document.querySelector('#menu').addEventListener('click', () =>{
    nav.classList.toggle('hidden')
    btn.classList.remove('open')
})
document.querySelector('#deve').addEventListener('mouseover', deve)
function deve(){
    document.querySelector('#newword').innerHTML = 'Creating high-quality user interfaces utilizing well-known technologies like HTML, CSS, and JavaScript while promoting improved website interaction'
}

document.querySelector('#devetwo').addEventListener('mouseover', devenow)
function devenow(){
    document.querySelector('#newwordtwo').innerHTML = 'Making quality mobile applications with well-known technologies like dart and flutter and improving mobile applications'
}
document.querySelector('#devethree').addEventListener('mouseover', devethree)
function devethree(){
    document.querySelector('#newwordthree').innerHTML = 'Coming...'
    
}


let thisDay = new Date()
let day = thisDay.getDay()
let month = thisDay.getMonth()
var nameOfDays = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday','Saturday','Sunday']
var nameOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']



document.querySelector('#dayname').innerHTML = nameOfDays[day] + ':'
document.querySelector('#month').innerHTML = nameOfMonth[month] + ','
document.querySelector('#day').innerHTML = thisDay.getDate()
document.querySelector('#year').innerHTML = new Date().getFullYear()
// console.log(day)
// console.log(thisDay)

document.querySelector('#vol').addEventListener('click', ()=>{
    console.log('good')
    var flow = document.querySelector('#vol').value 
    document.querySelector('#gaugeValue').innerHTML = flow 
})