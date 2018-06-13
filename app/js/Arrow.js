import "phaser";

class Arrow extends Phaser.Scene {
  init() {}

  preload() {
    this.load.image("arrow", "assets/longarrow.png");
  }

  create() {
    this.pic = this.add.image(400, 300, "arrow").setOrigin(0, 0.5);
    this.input.once('pointerdown', () => {
      this.sys.game.machine.emit('click');
    })

    /*
        this.input.once('pointerdown', function () {

            this.scene.pause();
            this.scene.launch('sceneB');

        }, this);
        */
  }

  update(time, delta) {
    this.pic.rotation += 0.01;
  }
}

export default Arrow;
