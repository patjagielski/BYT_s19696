import {Object} from './Object.js';
import {ObjectPool} from './ObjectPool.js';

export const createObject = function(){
    const pool = new ObjectPool();
    const objectPool = pool.objectPool;

    let newPool = [];
    objectPool.forEach((object) => {
        object.id = Math.floor((Math.random() * 10) + 1);
        if(object.id === 1){
            object.info = "Yay I am the first one at the object pool party"
            newPool.push(object);
        }else{
            object.info = "Aw I am not the first one here";
            newPool.push(object);
        }
    });
    return newPool;
}