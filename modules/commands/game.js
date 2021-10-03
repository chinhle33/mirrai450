module.exports.config = {
	name: "game",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "hoàng",
	description: "dùng là biết",
	commandCategory: "Quà",
	usages: "chả có gì đâu vài lệnh chơi thôi =))",
	cooldowns: 3
};
module.exports.run = async function({ api, event, args }) {
	 return api.changeNickname(`ngu như một con chó🐶`, event.threadID, event.senderID)
 }