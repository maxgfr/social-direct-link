const youtubedl = require('youtube-dl')
const fs = require('fs');
const readline = require("readline");

var url = ''

/*
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("URL of your youtube video : ", function(selected_url) {
    url = selected_url;
    rl.close();
});

rl.on("close", function() {
  youtubedl.getInfo(url, [], async (err, info) => {
    if (err) console.log(err)
    fs.writeFile('result.json', JSON.stringify(info, null, 2), function (err) {
      if (err) console.log(err);
    });
  })
    //process.exit(0);
});
