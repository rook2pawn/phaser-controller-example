import "phaser";

class Arrow extends Phaser.Scene {
  constructor() {
    super();
  }
  init() {}

  preload() {
    this.load.image("arrow", "assets/longarrow.png");
  }

  create() {
    this.pic = this.add.image(400, 300, "arrow").setOrigin(0, 0.5);
    this.input.on('pointerdown', () => {
      this.input.stopPropagation();
      this.scene.sleep();
      this.sys.game.machine.emit('click');
    })
  }

  update(time, delta) {
    this.pic.rotation += 0.01;
  }
}

export default Arrow;
