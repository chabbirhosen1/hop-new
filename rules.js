module.exports.config = {
name: "rules",
version: "1.0.0",
hasPermssion: 0,
credits: "BotolBaba",
description: "Simple Banglish Ai Chatbot",
commandCategory: "Ai Robot",
usages: "/polo [typeinBanglish]",
cooldowns: 2,
dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {
	
	const axios = require('axios');
	
if (args.join() == "") { 
	 return api.sendMessage(`
🌺🌺 SH CHABBIR HOSSEN এর Group Rule's 🌺🌺

🌺🌺 গ্রুপের নিয়মাবলী 🌺🌺
১. গ্রুপের এডমিন এর কথা মানা বাধ্যতামূলক 🌸
২. TexT off বললে কথা বলা বন্ধ করতে হবে
৩. Bot এর সাথে কথা বললে সব মজার সাথে নিবেন।
৪. sariyan রোবট এটা ToXic কিছু! মেনে নিতে হবে
৫. গ্রুপের কেনো মেম্বার কে গালি দেওয়া যাবে না।
৬. ধর্মীয় বিষয়ে মাতামাতি করা যাবে না। সব ধর্ম কে শ্রদ্ধা করতে হবে।
৭. গ্রুপের মধ্যে কোনো মেয়ে কে বিরক্ত করা যাবে না।
৮. ছেলে হুক বা মেয়ে সবাই সমান অধিকার পাবে। ভূল করলে ওভয় সমান শাস্তি পাবে।
১০. ধর্মীয় কমান্ড ব্যাবহার করলে ১৮+ কমান্ড ব্যাবহার করা যাবে না।
১১. bot কোনো মানুষ না কথাটা মাথায় রাখবেন!
১২. bot এর কোনো কথাই কষ্ট পাবেন না।মজা স্বরূপ নিবেন।
১৩. গ্রুপে আবাল not allowed।🚫
১৪. bot এর এডমিন এর কথা মানতে হবে।
১৫. গ্রুপের নোটিফিকেশন অফ রাখবেন👿।
১৬. bot এর ১৮+ কমান্ড ব্যাবহার করলে. নিরিবিরী অবস্থায় ব্যাবহার করবেন!
১৮. যেহেতু টক্সিক গ্রুপ তাই টক্সিক ভাবে কথা বলা যাবে!
১৯. গ্রুপে ১৮+ Meme Allowed না।🚫
২০. 👿bot ব্যাবহার করতে 👉/👈 এটা ব্যাবহার করবেন।
২১. কমান্ড পেতে 👉/ummah👈 দিবেন।
২২. bot এর মধ্যে হ্যাকিং কিছু কমান্ড থাকবে।
কমান্ড পেতে 👉#termux👈 দিবেন।

👿ব০ট Owner SH CHABBIR HOSSEN Xøwad👿
🥵tøXic-tor gf🥵
°________________________
𝐀 𝐋𝐢𝐧𝐞 𝐎𝐟 𝐓𝐫𝐮𝐭𝐡⌢║🌼🙂

তোমার সবটা জেনেও যে তোমাকে ভালোবাসবে__🥰🥀 
Ｔｒｕｓｔ ｍｅ

ˢʰᵉ ⁱˢ ᵃˡʷᵃʸˢ ʷⁱᵗʰ ʸᵒᵘ ---☘️🌼🥰

°
_________________________
...𝑮𝒓𝒑𝒖𝒑 𝑹𝒖𝒍𝒔...‼️
রুলস না মানলে সোজা কিক ফ্রি🤞👊




`, event.threadID, event.messageID)}

	else {
		let uint = encodeURI(args.join(' '));
	const res = await axios.get(`https://simsimi.info/api/?text=${uint}&lc=bn`);
	var d1 = res.data.message
	return api.sendMessage(`${d1}`, event.threadID, event.messageID)
	
	}
		
	
	
}