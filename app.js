var fullModal = document.getElementById("exampleModalToggle")
var textModal = document.getElementById("text-modal")
var postText = document.getElementById("post-text")
var inSidePostCard = document.getElementById("inSidePostCard")
var bg = document.getElementById("bg-0").src
console.log(bg)



// var bg_0 =  document.getElementById("bg-0")
// var bgColor = ""
// function bg_0() {
    //     var bgColor = "bg-0"
    //     return bgColor
    // }
    // function bg_1() {
        //     var bgColor = "bg-1"
        //     return bgColor
        
        // }
        // console.log(bg_0)
        function post() {
            inSidePostCard.innerHTML = `
            <div class="postCard">
            <img width="47px" height="50px" class="my-pic" src="pic/my-pic.jpg" alt="">
            <p class="inline-block"><b>Ahmed Karim</b></p>
    <div class="bg-3">
    <h1>
    ${textModal.value}
    </h1>
    </div>
    </div>
    `
    textModal.value = ""
}
// var heading = document.createElement("h1")
// var text = document.createTextNode(textModal.value)
// heading.appendChild(text)
// inSidePostCard.appendChild(heading)
// console.log(heading)