let messageCounter = 0;

function sendSignal(){
    console.log('HELP!');
}

while(messageCounter < 1000)
{
    sendSignal();
    messageCounter++;
}

let result = 0;

let j = 1;

while(j <= 10){
    result = result + j
    j++
    console.log(result);
}