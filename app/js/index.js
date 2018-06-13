
import 'phaser'
import Bounce from './Bounce.js'
import Arrow from './Arrow.js'

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);

game.scene.add('bounce', Bounce, false)
game.scene.add('arrow', Arrow, false)
game.scene.start('arrow')
