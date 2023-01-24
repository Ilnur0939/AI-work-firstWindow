let inpHeight = document.querySelector("#inp-h")
let inpWidth = document.querySelector("#inp-w")
let winBox = document.querySelector(".win-box")
let winSide = document.querySelectorAll(".list-item-side")
let winMiddle = document.querySelector(".list-item-center")
let winTop = document.querySelectorAll(".list-item-top")
let winImg = document.querySelectorAll(".win-img")
let btn = document.querySelector(".btn")

let detailSide = document.querySelector("list-item-detail-left")
let detailImg = document.querySelector(".list-item-img")


let wid = 241
let hei = 226
// let topWin = 111
function firstCategory(){
    winImg.forEach(item => {
        item.addEventListener('click', function(){
            if(item.id == "dub"){
                winBox.classList.replace(winBox.classList[1] ,"win-box-dub")
                detailImg.style = "filter: invert(21%) sepia(97%) saturate(790%) hue-rotate(357deg) brightness(60%) contrast(105%);"
                detailSide.style = "filter: invert(21%) sepia(97%) saturate(790%) hue-rotate(357deg) brightness(60%) contrast(105%);"
            }
            else if(item.id == "mokko"){
                console.log(winBox.classList[1]);
                winBox.classList.replace(winBox.classList[1] , "win-box-mokko")
                detailSide.style = "filter: invert(23%) sepia(68%) saturate(401%) hue-rotate(341deg) brightness(50%) contrast(80%);"
                detailImg.style = "filter: invert(23%) sepia(68%) saturate(401%) hue-rotate(341deg) brightness(50%) contrast(80%);"
            }
            // else if(item.id == "mokry"){
            //     winBox.style = "background-image: url('./background-img/dub.png');"
            // }
        })
    })
}
firstCategory()


function func(){
    if(inpHeight.value == '' && inpWidth.value == ''){
        return
    } 
    winSide.forEach(item => {
        item.setAttribute("style" , `width: ${(+(inpWidth.value*1.3)-15)*0.32}px; height: ${(+(inpHeight.value*1.3)-10) * 0.66}px`)
    })
    winTop.forEach(item => {
        item.setAttribute("style", `width: ${(+(inpWidth.value*1.3)-15)*0.5}px; height: ${(+(inpHeight.value*1.3)-15) * 0.33}px`)
    })
    winMiddle.setAttribute("style" , `width: ${(+(inpWidth.value*1.3)-15)*0.34}px; height: ${(+(inpHeight.value*1.3)-10) * 0.66}px`)

    winBox.setAttribute("style", `height: ${inpHeight.value * 1.3}px; width: ${(inpWidth.value*1.3)}px; background-size: ${inpWidth.value * 1.3}px ${(inpHeight.value*1.3)}px`)    
}


window.addEventListener('keydown' , (e)=> {
    if(e.key == "Enter"){
        func()
    }
})

