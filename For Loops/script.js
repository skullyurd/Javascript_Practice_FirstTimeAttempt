let population =  100;
let yearsPassed = 0;

/*while (yearsPassed < 10) {
    population *= 1.05;
    yearsPassed++;
    console.log('year: ' + yearsPassed + ', population: ' + population);
}*/

for(let i = 0; i < 10; i++){
    population *= 1.05;
    console.log('year: ' + i + ', population: ' + population);
}