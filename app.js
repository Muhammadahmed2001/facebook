var fullModal = document.getElementById("exampleModalToggle")
var textModal = document.getElementById("text-modal")
var postText = document.getElementById("post-text")
var inSidePostCard = document.getElementById("inSidePostCard")
var bg_0 = document.getElementById("bg_0").className
var bg_1 = document.getElementById("bg_1").className
var bg_2 = document.getElementById("bg_2").className
var bg_3 = document.getElementById("bg_3").className
var bg_4 = document.getElementById("bg_4").className

var getBackGround = ""
function clickBackground(backgroundColor) {
    if (backgroundColor == "orange") {
        getBackGround = "bg-0"
        console.log('orange')
    } else if (backgroundColor == "blue") {
        getBackGround = "bg-1"
        console.log('blue')
    } else if (backgroundColor == "purple") {
        getBackGround = "bg-2"
        console.log('purple')
    }
    

    console.log(getBackGround);
}




function post() {
    inSidePostCard.innerHTML = `
            <div class="postCard">
            <img width="47px" height="50px" class="my-pic" src="pic/my-pic.jpg" alt="">
            <p class="inline-block "><b>Ahmed Karim</b></p>
    <div class="${getBackGround}">
    <h1>
    ${textModal.value}
    </h1>
    </div>
    </div>
    ` + inSidePostCard.innerHTML
    textModal.value = ""
}
// var heading = document.createElement("h1")
// var text = document.createTextNode(textModal.value)
// heading.appendChild(text)
// inSidePostCard.appendChild(heading)
// console.log(heading)