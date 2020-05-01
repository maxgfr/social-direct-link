const fs = require('fs');
const request = require('request');
const readline = require("readline");
const youtubedl = require('youtube-dl');

var url = '';
var dl = false;

/*
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("URL of the media : ", function(selected_url) {
    url = selected_url;
    rl.question("Do you want to download the file ? (yes or no) : ", function(selected_dl) {
      selected_dl = selected_dl.toLowerCase();
      if(selected_dl == 'yes' || selected_dl == 'y') dl = true;
        rl.close();
    });
});

rl.on("close", function() {
  youtubedl.getInfo(url, [], async (err, info) => {
    if (err) console.log(err)
    console.log('id:', info.id)
    console.log('title:', info.title)
    console.log('url:', info.url)
    console.log('thumbnail:', info.thumbnail)
    console.log('description:', info.description)
    console.log('filename:', info._filename)
    console.log('format id:', info.format_id)
    if(dl) {
      fs.mkdir('./download', { recursive: true }, (err) => {
        if (err) throw err;
        request(info.url).pipe(fs.createWriteStream('./download/'+info._filename))
      });
    }
    fs.writeFile('result.json', JSON.stringify(info, null, 2), function (err) {
      if (err) throw err;
    });
  })
  //process.exit(0);
});
