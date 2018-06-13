import "phaser";
import Bounce from "./Bounce.js";
import Arrow from "./Arrow.js";

var nanostate = require("nanostate");
var machine = nanostate("arrow", {
  arrow: {
    click: "bounce"
  },
  bounce: {
    click: "arrow"
  }
});

var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600
};

var game = new Phaser.Game(config);
game.machine = machine;
game.scene.add("bounce", Bounce, false);
game.scene.add("arrow", Arrow, false);
game.scene.start(machine.state);

machine.on("bounce", () => {
  game.scene.run(machine.state)
})
machine.on("arrow", () => {
  game.scene.run(machine.state)
});
