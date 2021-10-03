const fs = require("fs");
module.exports.config = {
name: "nguu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "nguu=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat nguu",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("nguu")==0)) {
		var msg = {
				body: " clmmm nè  !",
				attachment: fs.createReadStream(__dirname + `/noprefix/huan.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}