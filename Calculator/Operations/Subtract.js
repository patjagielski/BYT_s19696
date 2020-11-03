export default function Subtract(given){
    this.symbol = '-';
    this.given = given;
    this.check = function(){
        if(this.symbol === given){
            return true
        }
        return false;
    }
    this.operation = function(a,b){
        return a-b
    }
}