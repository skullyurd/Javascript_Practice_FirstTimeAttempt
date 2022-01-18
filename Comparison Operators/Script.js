let item = 'engine';

if(item != 'engine'){
    console.log('Not engine!');
}
else if(item == 'engine'){
    console.log('Engine!');
}

let score = 60;

if(score >= 60){
    console.log('pass');
}
else if(score < 10){
    console.log('Meet the teacher!');
}

else{
    console.log('not pass');
}

let isEngine = item == 'engine';
console.log(isEngine);

//challange
let balance = 100;
let itemPrice = 10;

if(balance >= itemPrice){
    balance = balance - itemPrice;
    console.log('Item has been purchased');
    console.log('The new balance: ' + balance);
}
else
{
    console.log('The item could not been purchased.');
    console.log('Your balance: ' + balance);
}