import "phaser";

class Bounce extends Phaser.Scene {
  constructor(config) {
    super();
  }
  preload() {
    this.load.image("logo", "assets/logo.png");
  }

  create() {
    var logo = this.add.image(400, 150, "logo");
    this.input.on('pointerdown', () => {
      this.input.stopPropagation();
      this.scene.sleep();
      this.sys.game.machine.emit('click');
    })
    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
  }
}

export default Bounce;
