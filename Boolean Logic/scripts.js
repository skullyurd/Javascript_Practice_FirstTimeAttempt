let distance = 150;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineFunctioning = true;

if(!isEngineFunctioning || distance > 200){
    console.log('The ship will not make it');
}

else if(distanceCondition && fuel >= 100 || distance < 100 && fuel >= 25){
    console.log('Ship will make it');
}