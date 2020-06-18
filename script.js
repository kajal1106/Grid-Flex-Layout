var del = "";
let previousOperator = null;
function cals(buttonValue) {
    
    if (buttonValue == 'C') {
        document.getElementById('valueshow').value = '0';
    } else {
        if(buttonValue == '←'){
            del = document.getElementById('valueshow').value ;
            del  = del.substring(0,del.length-1);
            document.getElementById('valueshow').value = del;
            
        }
        

        else if (document.getElementById('valueshow').value == '0') {

            document.getElementById('valueshow').value = buttonValue;
        } else {

            document.getElementById('valueshow').value += buttonValue;
        }
    }
}

function cal(equation)

{
    var answer = eval(equation);
    document.getElementById('valueshow').value = answer;
}