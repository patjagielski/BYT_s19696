import {TrafficLight} from './trafficLight.js';

window.getId = function(id){
    let color = id;
    const colorObj = new TrafficLight(color);
    let state = colorObj.change()[0];
    switch(color){
        case 'red':
            document.getElementById('title').innerHTML = state.sign; 
            document.getElementById('red').style.background = 'red';
            document.getElementById('yellow').style.background = 'none';
            document.getElementById('green').style.background = 'none';
        break;
        case 'yellow': 
            document.getElementById('title').innerHTML = state.sign;
            document.getElementById('red').style.background = 'none';
            document.getElementById('yellow').style.background = 'yellow';
            document.getElementById('green').style.background = 'none';
        break;
        case 'green':
            document.getElementById('title').innerHTML = state.sign;
            document.getElementById('red').style.background = 'none';
            document.getElementById('yellow').style.background = 'none';
            document.getElementById('green').style.background = 'green';
        break;
        default:
            //some default
    }
};

