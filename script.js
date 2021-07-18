var displayName = document.getElementById("secret");

var button = document.getElementById("myButton");

if (button){
  button.addEventListener("click", displaySecret);  
}


function displaySecret(){
  var name = document.getElementById("myText").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;

  displayName.innerHTML = name + ", did you know that when fish sleep, their dreams become " + adjective + " " + noun + "s? Shhh, it's a secret!";
}
