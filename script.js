const lampadinaOff = document.querySelector(".eureca img:first-child");
/*console.log(lampadinaOn)*/

const lampadinaOn = document.querySelector("img.hide");
/*console.log(lampadinaOff)*/

const bottone = document.querySelector(".game button:last-child")
/*console.log(bottone);*/

bottone.addEventListener('click', () =>{
    lampadinaOff.classList.toggle('hide');
    lampadinaOn.classList.toggle('hide');
    bottone.innerHTML 
})
