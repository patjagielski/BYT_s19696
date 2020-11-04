import {Object} from './Object.js';
import {ObjectPool} from './ObjectPool.js';

export const createObject = function(){
    const objPool = new ObjectPool();
    let pool = objPool.objectPool;
    const check = sessionStorage.getItem("0");
    if(!check){
        const obj = new Object(0, 'Yay I am the first to the Object Pool Party');
        pool.push(obj);
        sessionStorage.setItem("0", JSON.stringify([... pool]));
        // console.log(pool);
    }else{
        let newPool = sessionStorage.getItem("0");
        newPool = JSON.parse(newPool);
        // console.log(typeof newPool);
        newPool.forEach((object, index) => {
            const obj = new Object(index+1, `Ugh I am the ${index+1} Object here at the Object Pool Party!`);
            newPool.push(obj);
            sessionStorage.setItem("0", JSON.stringify([... newPool]));
        });
    }
}