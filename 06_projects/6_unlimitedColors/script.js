// random colors
let global
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    //  console.log(bgColor);
    //  console.log("2");

     const body = document.body
     body.style.backgroundColor = bgColor
    
}


const startChangingColor = function () {
    // console.log("1");
    if(!global)
    {
     global = setInterval(random_bg_color,1000)
    }
}


const stopChangingColor = function () {
    // console.log("3");
    clearInterval(global)
    global = null

}

const startButton =  document.querySelector('#start')
startButton.addEventListener('click',startChangingColor)

const stopButton = document.getElementById('stop')
stopButton.addEventListener('click',stopChangingColor)

