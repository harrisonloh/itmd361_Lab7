function init(){
//add your javascrip between these two lines of code
  function clickAlertMe(){
    alert("Harrison Loh: ")
  }
  var entrybtn = document.getElementById("entrybutton")
  var text = document.getElementById("entryinput")
  entrybtn.addEventListener('click',clickAlertMe)



}
window.addEventListener('load', init);
