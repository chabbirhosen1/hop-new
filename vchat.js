const fs = require("fs");
module.exports.config = {
	name: "bofohhhffo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("!🥵")==0 || (event.body.indexOf("h,t")==0 || (event.body.indexOf("হা.ত")==0 || (event.body.indexOf("do.n")==0)))) {
		var msg = {
				body: "｢হাত মারা শরীর এর জন্য ভালো🦋｣",
				attachment: fs.createReadStream(__dirname + `/Noprefix/hat.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}