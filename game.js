var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config, document.getElementById("game"));

function preload ()
{
    this.load.image('ground', 'assets/ground.png');
}

function create ()
{
    // Create a tilesprite (x, y, width, height, key)
    this.add.tileSprite(window.innerWidth / 2,window.innerHeight / 2,window.innerWidth, window.innerHeight,'ground')

}

function update ()
{

}