// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

// handling user key input
const { moveUp, moveDown, moveLeft, moveRight, message } = require('./constants');

const handleUserInput = function(data) {
  if (data === '\u0003') { // ==> The control + C key to exit
    process.exit();
  }

  if (data === moveUp) {
    connection.write('Move: up');
  }

  if (data === moveDown) {
    connection.write('Move: down');
  }

  if (data === moveLeft) {
    connection.write('Move: left');
  }

  if (data === moveRight) {
    connection.write('Move: right');
  }

  if (data === message) {
    connection.write('Say: See ya');
  }

};

module.exports = { setupInput };