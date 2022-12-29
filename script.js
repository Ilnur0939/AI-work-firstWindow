let inpHeight = document.querySelector("#inp-h")
let inpWidth = document.querySelector("#inp-w")
let winBox = document.querySelector(".win-box")
let winSide = document.querySelectorAll(".list-item-side")
let winMiddle = document.querySelector(".list-item-center")
let winTop = document.querySelectorAll(".list-item-top")
let wid = 241
let hei = 226
let topWin = 111

function func(){
    if(inpHeight.value == '' && inpWidth.value == ''){
        return
    }
    let diffHeight = +inpHeight.value - hei
    let diffWidth = +inpWidth.value - wid
    console.log(diffHeight);  
    winSide.forEach(item => {
        item.setAttribute("style" , `width: ${(+inpWidth.value-15)*0.32}px; height: ${+inpHeight.value * 0.66}px`)
    })
    winTop.forEach(item => {
        item.setAttribute("style", `width: ${(+inpWidth.value-18)*0.5}px; height: ${+inpHeight.value * 0.34}px`)

    })
    winMiddle.setAttribute("style" , `width: ${(+inpWidth.value-15)*0.34}px; height: ${+inpHeight.value * 0.34}px`)

    winBox.setAttribute("style", `height: ${inpHeight.value}px; width: ${inpWidth.value}px`)
}

window.addEventListener('keydown' , (e)=> {
    if(e.key == "Enter"){
        func()
    }
})