var mainState = {
    preload: function (){
        game.load.image('player', 'media/player.png');
        game.load.image('wall','media/wall.png');
        game.load.image('coin','media/coin.png');
        game.load.image('enemy','media/enemy.png');
    },
    
    create: function (){
        //set the game a backround color
        game.state.backroundColor = '#3598db';
        
        //Start the arcade physics system (for movement and collision)
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //add the physics engine to all objects
        game.world.enableBody = true;
        
        this.cursor = game.input.keyboard.createCursorKeys();
        
        //creates player in the middle of the game
        this.player = game.add.sprite(70,100,'player');
        
        //gets the gravity of the player
        this.player.body.gravity.y = 600;
        
        //creates 3 groups that will contain objects
        this.walls = game.add.group();
        this.coin = game.add.group();
        this.enemies = game.add.group();
        
        var level = [
            'xxxxxxxxxxxxxxxxxxxxxx',
            '',
            '',
            '',
            '',
            '',
            '',
        ]
        
    },
    
    update: function(){
        
    },
    
}

var game = new Phaser.Game(500,200);
game.state.add('main',mainState);
game.state.start('main');