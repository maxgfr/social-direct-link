const twitchStreams = require('twitch-get-stream')
const fs = require('fs');
const readline = require("readline");

var channel = ''

/*
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Channel of your live stream : ", function(livestream) {
    channel = livestream;
    rl.close();
});

rl.on("close", function() {
  twitchStreams.get(channel)
    .then(async (streams) => {
      fs.writeFile('twitch.json', JSON.stringify(streams, null, 2), function (err) {
        if (err) console.log(err);
      });
    }).catch((err) => {
      console.log(err)
    });
    //process.exit(0);
});
