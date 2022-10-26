// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

// handling user key input
let moveUp = 'w';
let moveDown = 's';
let moveLeft = 'a';
let moveRight = 'd';

const handleUserInput = function(data) {
  if (data === '\u0003') { // ==> The control + C key to exit
    process.exit();
  }

  if (data === moveUp) {
    console.log('Move: up');
  }

  if (data === moveDown) {
    console.log('Move: down');
  }

  if (data === moveLeft) {
    console.log('Move: left');
  }

  if (data === moveRight) {
    console.log('Move: right');
  }

};

module.exports = { setupInput };