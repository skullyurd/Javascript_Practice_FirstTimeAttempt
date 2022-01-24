player = {
    health: 100,
    fun: 0,
    
    play: function() {
        this.fun += 5;
        console.log('pet is playing' );
    },

    eat: function(food){
        if(food == 'apple'){
            this.health += 10;
        }
        else if (food == 'candy'){
            this.health -= 5;
            this.fun += 5;
        }
    }
};

console.log(player);

player.eat('apple')

console.log(player);