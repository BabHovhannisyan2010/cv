//start Page
let start = document.querySelector(".startDiv");
let startBtn = document.querySelector(".startDiv button") ;
let selectDiv = document.querySelector(".selectDiv")

startBtn.addEventListener("click",function(){
    start.style.transition = "1s"
    start.style.top = "-250px"
    selectDiv.style.display = "flex"

    setTimeout(() => {
        start.style.display = "none"

    }, 1000);
    setTimeout(() => {
        selectDiv.style.transition = "1.5s"
        selectDiv.style.top = "200px"
    }, 500);
})

//select page

let btn5 = document.querySelector(".second5");
let btn10 = document.querySelector(".second10");
let btn15 = document.querySelector(".second15");
let btn20 = document.querySelector(".second20");
let btn25 = document.querySelector(".second25");
let btn30 = document.querySelector(".second30");
let game = document.querySelector(".gameDiv") ;
let ball = document.querySelector(".ballDiv");
let time = document.querySelector(".time");
let point = document.querySelector(".point") ;
let btns = document.querySelectorAll(".btnDiv button")
let pointDiv = document.querySelector(".pointText")
let rest = document.querySelector(".imgRestart") 

let num 
btn5.addEventListener("click",function(){
        return num = 5
})
btn10.addEventListener("click",function(){
        return  num = 10
})
btn15.addEventListener("click",function(){
       return num = 15
})
btn20.addEventListener("click",function(){
       return num = 20
})
btn25.addEventListener("click",function(){
    return num = 25
})
btn30.addEventListener("click",function(){
    return num = 30
})

function func(){

    selectDiv.style.transition = "1.5s"
    selectDiv.style.top = "-300px"
    setTimeout(() => {
        selectDiv.style.display = "none"
        game.style.display = "flex"
        ball.style.top = `${Math.floor(Math.random() * 450)}px`
        ball.style.left = `${Math.floor(Math.random() * 650)}px`
        ball.style.backgroundColor = `${colorArr[Math.floor(Math.random() * colorArr.length)]}`
    }, 1000);

    let colorArr = ["pink","lightgreen","blue","lightblue","red","yellow","orange","blueviolet","applegreen","magenta","oldrose","lime","gold","granola","royal"];

    let pointText = 0;
    point.innerText = `Point:${pointText}`
    ball.addEventListener("click",function(){
        pointText++
        point.innerText = `Point:${pointText}`
        let x = Math.floor(Math.random() * 150) ;
        ball.style.top = `${Math.round(Math.random() * 450)}px`
        ball.style.left = `${Math.round(Math.random() * 92)}%`
        ball.style.transition = "0.2s"
        ball.style.width = `${x}px`
        ball.style.height = `${x}px`
        ball.style.cursor = "pointer"
        ball.style.backgroundColor = `${colorArr[Math.round(Math.random() * colorArr.length)]}`
    })


    let setint = setInterval(() => {
        time.innerText = `time:${num}`
        num--
        if(num < 0){
            clearInterval(setint)
            ball.style.display = "none" ;
            console.log(pointText);
            pointDiv.style.display = "block" ;
            pointDiv.innerText = `Point:${pointText}`
            game.style.display = "flex" ;
            game.style.alignItems = "center" ;
            game.style.justifyContent = "center" ;
            game.style.flexDirection = "column"
            // restart button
            rest.style.display = "block" ;
            rest.addEventListener("click" , function(){
                setTimeout(() => {
                    document.location.reload(true)
                }, 1000);
                
            })
        }

    }, 1000);

}

for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    element.addEventListener("click",func)
}








