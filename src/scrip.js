setTimeout(() => {
  document.querySelector("#loading").style.display = "none";
}, 6000);

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
    strings: ["Frontend web developer", "3d Modeler", "Industrial Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});