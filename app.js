var fullModal = document.getElementById("exampleModalToggle")
var textModal = document.getElementById("text-modal")
var postText = document.getElementById("post-text")
var inSidePostCard = document.getElementById("inSidePostCard")

function post() {
    var heading = document.createElement("h1")
    var text = document.createTextNode(textModal.value)
    heading.appendChild(text)
    inSidePostCard.appendChild(heading)
    console.log(heading)
    textModal.value = ""
    




}