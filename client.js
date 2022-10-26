const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Setting name of snake
  // Move snake up one block
  // Print message to the sceen when the connection is successfully established
  conn.on('connect', () => {
    conn.write('Name: AV');
    // conn.write('Move: up');
    console.log('Successfully connected to game server');
  });


  // End connection after 5 seconds of idle time
  conn.setTimeout(5000);
  conn.on('timeout', () => {
    console.log('you ded cuz you idled');
    conn.end();
  });

  return conn;
};

module.exports = { connect };