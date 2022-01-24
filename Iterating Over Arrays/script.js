let scores = [10, 20, 10];

let i = 0;
while(i < scores.length){
    scores[i]++;
    i++;
}

console.log(scores);

/*scores.forEach(element => {
    scores[i]++;
    i++
});*/

for(i = 0; i < scores.length; i++){
    scores[i]++;
    i++ 
}

scores.forEach(function(entry, index){
    console.log(entry, index);
    scores[index]++;
});

console.log(scores);

let catalog = [
    {
        title: 'JS for beginners',
        author: 'Zenva',
        copies: 1
    },
    {
        title: 'HTML for beginners',
        author: 'ABC',
        copies: 1
    },
    {
        title: 'CS for beginners',
        author: 'XYZ',
        copies: 1
    }
];

catalog.forEach(function(entry){
    if(entry.author == 'Zenva'){
        entry.copies++;
    }
});

console.log(catalog);