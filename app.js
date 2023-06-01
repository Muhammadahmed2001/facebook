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
        
    } else if (backgroundColor == "blue") {
        getBackGround = "bg-1"
       
    } else if (backgroundColor == "purple") {
        getBackGround = "bg-2"
       
    }else if (backgroundColor == "yellow"){
        getBackGround = "bg-3"
    }else if( backgroundColor == "facebook"){
        getBackGround = "bg-4"
    }
    
    textModal.className = getBackGround
    textModal.style.width = "100%"
    // console.log(getBackGround);
}




function post() {
    inSidePostCard.innerHTML = `
            <div class="postCard">
            <img width="47px" height="50px" class="my-pic" src="pic/my-pic.jpg" alt="">
            <p class="inline-block "><b>Ahmed Karim</b></p>
    <div class="${getBackGround}">
    <h3>
    ${textModal.value}
    </h3>
    </div>
    </div>
    ` + inSidePostCard.innerHTML
    textModal.value = ""
}