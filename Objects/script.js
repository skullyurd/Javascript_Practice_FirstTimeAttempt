let player = {
    name: 'Mark',
    age: 99,
    isAlive: true,
    outfit: {
        Color: 'Blue',
        Size: 'M',
        cost: 100,
        isNew: true
    }
};

console.log(player);
console.log(player.age);
console.log(player['name']);

player.isAlive = false;
console.log(player.isAlive);

player.health = 5;
console.log(player);

delete player.health;
console.log(player);

player.outfit.shreds = true;
console.log(player.outfit);

player.outfit.Size = 'XXL';
console.log(player.outfit.Size);