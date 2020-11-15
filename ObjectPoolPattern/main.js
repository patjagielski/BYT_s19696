import {createObject} from './ObjectFactory.js';

window.beginPoolParty = function(){
    const newPool = createObject();
    let index = 0;
    let obj = newPool[index];
        var h = document.createElement("H1"); // Create the H1 element
        var t = document.createTextNode(`ID:${obj.id} Info: ${obj.info}`); // Create a text element
        h.appendChild(t); // Append the text node to the H1 element
    
        document.body.appendChild(h); // Append the H1 element to the document body
    index+=1;

}

window.endParty = function(){
    console.log('The pool is closed!!');
    sessionStorage.clear();
}