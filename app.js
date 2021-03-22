var inputbox = document.querySelector("textarea");
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#output"); 
var testUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function urlToFetch(userInput){
    var fetchUrl = serverUrl + "?text=" + userInput;
    console.log(encodeURI(fetchUrl))
    return encodeURI(fetchUrl)
}

function errorHandler(error){
    console.log("Something is wrong with the server :(");
    alert("Something is wrong with the server.Please try again later");
}

btnTranslate.addEventListener("click",function read(){
    var userInput = inputbox.value;
    console.log(decodeURI(urlToFetch(userInput)))
    fetch(decodeURI(urlToFetch(userInput)))
    .then(response => response.json()
    .then(json =>outputBox.innerHTML = json.contents.translated))
    .catch(errorHandler)
})

