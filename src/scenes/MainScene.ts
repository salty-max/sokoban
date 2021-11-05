export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  preload(): void {
    this.load.spritesheet("tiles", "../assets/images/sokoban_tilesheet.png", {
      frameWidth: 64,
      frameHeight: 64,
      startFrame: 0,
    });
  }

  create(): void {
    // prettier-ignore
    const level = [
      [99,  99,  99,  99,  99,  99,  99,  99],
      [99,  0,   0,   0,   0,   0,   0,   99],
      [99,  0,   0,   0,   0,   0,   0,   99],
      [99,  0,   0,   51,   8,   0,   0,   99],
      [99,  0,   0,   0,   0,   0,   0,   99],
      [99,  0,   0,   0,   0,   0,   0,   99],
      [99,  0,   0,   0,   0,   0,   0,   99],
      [99,  99,  99,  99,  99,  99,  99,  99],
    ];

    const map = this.make.tilemap({
      data: level,
      tileWidth: 64,
      tileHeight: 64,
    });

    const tiles = map.addTilesetImage("tiles");
    const layer = map.createLayer(0, tiles, 0, 0);
  }
}
