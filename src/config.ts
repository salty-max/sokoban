import "Phaser";
import { MainScene } from "./scenes/MainScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: "Phaser TS Boilerplate",
  version: "1.0",
  width: 256,
  height: 256,
  zoom: 2,
  backgroundColor: 0x3a404d,
  type: Phaser.AUTO,
  input: {
    keyboard: true,
    gamepad: true,
    mouse: false,
    touch: false,
  },
  render: {
    pixelArt: true,
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
