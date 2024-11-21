const lampadinaOff = document.querySelector(".eureca img:first-child");
/*console.log(lampadinaOn)*/

const lampadinaOn = document.querySelector("img.hide");
/*console.log(lampadinaOff)*/

const bottone = document.querySelector(".game button:last-child")
/*console.log(bottone);*/

let lampadinaAccesa= false

bottone.addEventListener('click', () =>{
    lampadinaOff.classList.toggle('hide');
    lampadinaOn.classList.toggle('hide');
    lampadinaAccesa = !lampadinaAccesa
    if(lampadinaAccesa){
        bottone.textContent = "Turn Off The Light"
    }else{
        bottone.textContent = "Turn On The Light"

    }
    
})
