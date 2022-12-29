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
    // console.log(inpHeight.value);
    let diffHeight = +inpHeight.value - hei
    let diffWidth = +inpWidth.value - wid
    console.log(diffHeight);  
    // console.log(winSide.setAttribute.width);
    winSide.forEach(item => {
        item.setAttribute("style" , `width: ${(+inpWidth.value-15)*0.32}px; height: ${154+(diffHeight/2)}px`)
    })
    winTop.forEach(item => {
        item.setAttribute("style", `width: ${(+inpWidth.value-18)*0.5}px; height: ${54+(diffHeight/2)}px`)

    })
    winMiddle.setAttribute("style" , `width: ${(+inpWidth.value-15)*0.34}px; height: ${158 + (diffHeight/2)}px`)

    winBox.setAttribute("style", `height: ${inpHeight.value}px; width: ${inpWidth.value}px`)
    // winSide.setAttribute("style" , `width: ${70+diffWidth}px; height: ${154+diffHeight}px`)
    // winBox.setAttribute("style", `width: ${inpHeight.value}px`)
    // if(inpHeight.value > hei){
    // }
    // else if(inpHeight.value < hei){
    // }
    // if(inpWidth.value > wid){
    //     winBox.setAttribute("style", `width: ${+inpWidth.value + diffWidth}px`)
    // }
    // else if(inpWidth < wid){
    //     winBox.setAttribute("style", `height: ${+inpWidth.value + diffWidth}px`)
    // }
}

window.addEventListener('keydown' , (e)=> {
    if(e.key == "Enter"){
        func()
    }
})