import {createObject} from './ObjectFactory.js';

window.beginPoolParty = function(){
    createObject();
    let objects = sessionStorage.getItem("0");
    objects = JSON.parse(objects);
    objects.map((object)=>{
        var h = document.createElement("H1"); // Create the H1 element
        var t = document.createTextNode(`${object.info}`); // Create a text element
        h.appendChild(t); // Append the text node to the H1 element
    
        document.body.appendChild(h); // Append the H1 element to the document body
    })

}