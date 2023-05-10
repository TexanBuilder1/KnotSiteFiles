var IptA


function Trigger(){
    var TextBox = document.getElementsByClassName("InputA")
    var Values = TextBox.valueOf()
    var Valueof = Values[0].value
    IptA = Valueof
}

fetch('knots.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));