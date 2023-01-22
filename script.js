let inpHeight = document.querySelector("#inp-h")
let inpWidth = document.querySelector("#inp-w")
let winBox = document.querySelector(".win-box")
let winSide = document.querySelectorAll(".list-item-side")
let winMiddle = document.querySelector(".list-item-center")
let winTop = document.querySelectorAll(".list-item-top")
let wid = 241
let hei = 226
// let topWin = 111

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

    winBox.setAttribute("style", `height: ${inpHeight.value * 1.3}px; width: ${(inpWidth.value*1.3)}px`)
}

window.addEventListener('keydown' , (e)=> {
    if(e.key == "Enter"){
        func()
    }
})