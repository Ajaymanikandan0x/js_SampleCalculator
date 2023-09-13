function buttonPres(data) 
{
  
    document.getElementById("inputScreen1").value+=data

}
function clearData() 
{
 
    document.getElementById("inputScreen1").value=""

}
function equalButton() {
    // var text=document.getElementById("inputScreen1").value
    // var result =eval(text)
    // document.getElementById("inputScreen1").value=result
    
    let result
    const operator = prompt(' +, -, * , /  ');
    const number1 = parseFloat(prompt('Enter first number: '));
    const number2 = parseFloat(prompt('Enter second number: '));
    switch(operator) {
        case '+':
             result = number1 + number2;
            
            break;
    
        case '-':
             result = number1 - number2;
            
            break;
    
        case '*':
             result = number1 * number2;
            
            break;
    
        case '/':
            if(number2 != 0){
                result = number1 / number2;
             }else{
                result = Double.NaN; 
             }
             break;
        default:
            console.log('Invalid operator');
            break;
    }
}