export class MainScene extends Phaser.Scene {
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  private player?: Phaser.GameObjects.Sprite;

  constructor() {
    super({ key: "MainScene" });
  }

  preload(): void {
    this.load.spritesheet("tiles", "../assets/images/sokoban_tilesheet.png", {
      frameWidth: 64,
      frameHeight: 64,
      startFrame: 0,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
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

    this.player = this.add.sprite(400, 300, "tiles", 52);

    this.anims.create({
      key: "idle-left",
      frames: [{ key: "tiles", frame: 81 }],
    });

    this.anims.create({
      key: "idle-right",
      frames: [{ key: "tiles", frame: 78 }],
    });

    this.anims.create({
      key: "idle-up",
      frames: [{ key: "tiles", frame: 55 }],
    });

    this.anims.create({
      key: "idle-down",
      frames: [{ key: "tiles", frame: 52 }],
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("tiles", {
        start: 81,
        end: 83,
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("tiles", {
        start: 78,
        end: 80,
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("tiles", {
        start: 55,
        end: 57,
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("tiles", {
        start: 52,
        end: 54,
      }),
      frameRate: 8,
      repeat: -1,
    });
  }

  update(): void {
    if (!this.cursors) return;

    if (this.cursors.left.isDown) {
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.player.anims.play("up", true);
    } else if (this.cursors.down.isDown) {
      this.player.anims.play("down", true);
    } else if (this.player.anims.currentAnim) {
      const key = this.player.anims.currentAnim.key;
      if (!key.startsWith("idle-")) {
        this.player.anims.play(`idle-${key}`, true);
      }
    }
  }
}
