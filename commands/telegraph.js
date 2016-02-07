'use strict';

module.exports = telegraph;

function telegraph (slack, args, message) {
  var userID = args.shift();
  var msg = args.join(' ');
  console.log(userID);
  userID = userID.slice(2, userID.length-1);
  console.log(userID);

  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('Sending a DM to: ' + userID);

  console.log('dmChannel');
  var dmchannel = slack.openDM(userID, function (data) {
    console.log(data);
  });

  var channel2 = slack.getChannelGroupOrDMByID(userID);
  channel2.send('You recieved a message.');
}