let inpHeight = document.querySelector("#inp-h")
let inpWidth = document.querySelector("#inp-w")
let winBox = document.querySelector(".win-box")
let winSide = document.querySelectorAll(".list-item-side")
let winMiddle = document.querySelector(".list-item-center")
let winTop = document.querySelectorAll(".list-item-top")
let winImg = document.querySelectorAll(".win-img")

let detailTop = document.querySelector(".list-item-middle")
let detailBottom = document.querySelector(".list-item-detail-left")
let detailImg = document.querySelector(".list-item-img")

let wid = 241
let hei = 226
// let topWin = 111

winImg.forEach(item => {
    item.addEventListener('click', function(){
        if(item.id == "dub"){
            winBox.style = "background-image: url('./background-img/dub.png');"
            detailTop.style.setProperty('--afterBack' , '#864215')
            detailImg.style = "filter: invert(21%) sepia(97%) saturate(790%) hue-rotate(357deg) brightness(60%) contrast(105%);"
        }
        else if(item.id == "mokko"){
            winBox.style = "background-image: url('./background-img/Mokko.png');"
            detailTop.style.setProperty('--afterBack' , '#653F26')
            detailImg.style = "filter: invert(23%) sepia(68%) saturate(401%) hue-rotate(341deg) brightness(50%) contrast(80%);"
        }
        // else if(item.id == "mokry"){
        //     winBox.style = "background-image: url('./background-img/dub.png');"
        // }
        func()
    })
})

// function func(){
//     if(inpHeight.value == '' && inpWidth.value == ''){
//         return
//     } 
//     winSide.forEach(item => {
//         item.setAttribute("style" , `width: ${(+(inpWidth.value*1.3)-15)*0.32}px; height: ${(+(inpHeight.value*1.3)-10) * 0.66}px`)
//     })
//     winTop.forEach(item => {
//         item.setAttribute("style", `width: ${(+(inpWidth.value*1.3)-15)*0.5}px; height: ${(+(inpHeight.value*1.3)-15) * 0.33}px`)
//     })
//     winMiddle.setAttribute("style" , `width: ${(+(inpWidth.value*1.3)-15)*0.34}px; height: ${(+(inpHeight.value*1.3)-10) * 0.66}px`)

//     winBox.setAttribute("style", `height: ${inpHeight.value * 1.3}px; width: ${(inpWidth.value*1.3)}px`)

// }
// func()

window.addEventListener('keydown' , (e)=> {
    if(e.key == "Enter"){
        func()
    }
})

