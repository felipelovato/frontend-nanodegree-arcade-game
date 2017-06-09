// Enemies our player must avoid
var Enemy = function(y, s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 1;
    this.y = y;
    this.s = s;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.s + 1;
    if (this.x > 500) {
      this.x = 1;
    }
  
    player.colision(this.x, this.y);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
//     this.x++;
};

Player.prototype.die = function() {
  this.x = 200;
  this.y = 400;
};

Player.prototype.colision = function(x, y) {
  //console.log(this.x, x, this.x - x);
  //console.log(this.y, y, this.y - y);  
  if (this.y != y) {
    return false;
  }
  
  if ((this.x - x) < 70 && (this.x - x) > 0 && this.y == y) {
    this.die();
  }
  
  if (this.x <= x && this.x >= x-75) {
    console.log(this.x, x, x-75);
    this.die();
  }
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (dir) {
  if (dir == 'left') {
    this.x -= 25;
  }
  
  if (dir == 'right') {
    this.x += 25;
  }
  
  if (dir == 'down' && this.y < 400) {
    this.y += 25;
  }
  
  if (dir == 'up') {
    this.y -= 25;
  }
  
  if (this.x > 470) {
      this.x = 0;
  }
  
  if (this.x == -75) {
      this.x = 400;
  }
  
  if (this.y == -25) {
      this.y = 400;
  }
  //console.log(this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();

var allEnemies = [
// new Enemy(50,  3),
//  new Enemy(50,  2),
//  new Enemy(150, 1),
  new Enemy(225, 0),
];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
