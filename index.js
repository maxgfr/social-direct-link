const youtubedl = require('youtube-dl')
const twitchStreams = require('twitch-get-stream')
const url = 'http://www.youtube.com/watch?v=RzClCJFpSoM'
const channel = 'sardoche'

/*
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
*/

youtubedl.getInfo(url, [], function(err, info) {
  if (err) throw err
  console.log(info)
})

twitchStreams.get(channel)
  .then(function(streams) {
    console.log(streams)
  }).catch((err) => {
    console.log(err)
  });
