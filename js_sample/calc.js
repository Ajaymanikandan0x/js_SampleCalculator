function buttonPres(data) 
{
  
    document.getElementById("inputScreen1").value+=data

}
function clearData() 
{
 
    document.getElementById("inputScreen1").value=""

}
function equalButton() {
    var text=document.getElementById("inputScreen1").value
    var result =eval(text)
    document.getElementById("inputScreen1").value=result
    
    
}