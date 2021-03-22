var inputbox = document.querySelector("textarea");
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#output");

btnTranslate.addEventListener("click",function read(){
    var userInput = inputbox.value;
    outputBox.innerText = "translated: " + userInput;
})

