import "Phaser";
import { MainScene } from "./scenes/MainScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: "Phaser TS Boilerplate",
  version: "1.0",
  width: 512,
  height: 512,
  backgroundColor: 0x3a404d,
  type: Phaser.AUTO,
  input: {
    keyboard: true,
    gamepad: true,
    mouse: false,
    touch: false,
  },
  render: {
    pixelArt: false,
    antialias: false,
    antialiasGL: false,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 200 },
    },
  },
  scene: [MainScene],
};
