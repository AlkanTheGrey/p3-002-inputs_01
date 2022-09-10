const COLORS = {
  rich_black_fogra_29: 0x0d1b2a,
  oxford_blue: 0x1b263b,
  bdazzled_blue: 0x415a77,
  shadow_blue: 0x778da9,
  platinum: 0xe0e1dd,
  orange_pantone: 0xff9662
  
}
const GAME_CONFIG = {
  type: Phaser.AUTO,
  width: 128,
  height: 64,
  backgroundColor: COLORS.rich_black_fogra_29,
  parent:  document.getElementById( "game-container" ),
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  pixelArt: true,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

let game = new Phaser.Game( GAME_CONFIG );

/**Handles code that is executed before the scene's Ready
 * state. Includes actions such as fetching resources to
 * be used in the scene.
 */
function preload(){

  this.load.spritesheet( "keys", "./keys.jpeg", { 
    frameWidth: 24,
    frameHeight: 24
   } )

  return;
}

/**Handles code executed once all external resources have
 * been acquired, it is run once at the start of the scene
 * once the scene is in the ready state.
 */
function create(){

  // create a set of keys that will show us button effect of key presses.
  this.key_w = this.add.image( GAME_CONFIG.width / 2, 18, "keys", 0 );
  this.key_a = this.add.image( (GAME_CONFIG.width / 2) - 28, 46, "keys", 2 );
  this.key_s = this.add.image( GAME_CONFIG.width / 2, 46, "keys", 4 );
  this.key_d = this.add.image( (GAME_CONFIG.width / 2) + 28, 46, "keys", 6 );

  // create the object to hold controls to be added
  this.game_controls = {};

  // method 1: single key at a time
  this.game_controls.w = this.input.keyboard.addKey( "W" );

  // method 2: multiple keys at a go
  let keys = "A,S,D";
  this.game_controls.asd = this.input.keyboard.addKeys( keys );

  return;
}

/**This is the code executed on the main game loop, it is executed
 * once per update.
 */
function update(){

  // handle key presses in the update method

  // w key
  if( this.game_controls.w.isDown ){
    this.key_w.setTexture( "keys", 1 );
  } else {
    this.key_w.setTexture( "keys", 0 );
  }

  // a key
  if( this.game_controls.asd["A"].isDown ){
    this.key_a.setTexture( "keys", 3 );
  } else {
    this.key_a.setTexture( "keys", 2 );
  }

  // s key
  if( this.game_controls.asd.S.isDown ){
    this.key_s.setTexture( "keys", 5 );
  } else {
    this.key_s.setTexture( "keys", 4 );
  }

  // d key
  if( this.game_controls.asd.D.isDown ){
    this.key_d.setTexture( "keys", 7 );
  } else {
    this.key_d.setTexture( "keys", 6 );
  }

  return;
}