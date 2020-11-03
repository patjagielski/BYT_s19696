import {Green} from './Lights/green.js';
import {Red} from './Lights/red.js';
import {Yellow} from './Lights/yellow.js';

export class TrafficLight{
    constructor(setState){
        this.setState = setState;
        this.states = [new Green, new Yellow, new Red];
        this.change = this.change.bind(this);
    }
    change(){
        let chosenState = [];
        this.states.forEach((state) => {
            if(state.light === this.setState){
                switch(this.setState){
                    case 'red':
                        chosenState.push(new Red);
                    break;
                    case 'yellow':
                        chosenState.push(new Yellow);
                    break;
                    case 'green':
                        chosenState.push(new Green);
                    break;
                }  
            }
    
        });
        return chosenState;
    }
}