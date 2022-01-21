function hourToMinutes(hours){
    let result = hours * 60;
    console.log(result);
    return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);

let dayToHours = function(days){
    return days * 24;
};

let c = dayToHours(1);
console.log(c);
// End of Function Practice


let balance = 100;
let stock = 50;
let price = 5;


function sellItem(quantity){
    if(quantity <= stock){
        stock -= quantity;

        balance += + price * quantity;

        console.log('Purchase completed', balance, stock);
    }
    else{
        console.log('Transaction could not be completed');
    }
}
