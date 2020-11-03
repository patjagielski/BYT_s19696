import Add from './Operations/Add.js';
import Subtract from './Operations/Subtract.js';
import Multiplication from './Operations/Multiplication.js';
import Division from './Operations/Division.js';

function Operation(){
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const given = document.getElementById('operators').value;
    const next = [new Add(given), new Subtract(given), new Multiplication(given), new Division(given)];
    
    next.forEach((item)=>{
        //check if correct operator if not then move onto next operator
        if(item.check()){
            alert(item.operation(a,b));  
        }
    });
    
}

window.onload = function () {
    document.getElementById("submit_button").onclick = Operation;
};