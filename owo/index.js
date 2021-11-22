const Discord = require("discord.js");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = "kanalid";
var sahip = "hesapid";

client.on("ready",()=>{
	console.log("Hazır ! ");
});

//ArdaDemr Youtube

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo h");
	};
},15500);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("ws all");
	};
},35000);
//ArdaDemr Youtube
client.on("message",message=>{
	if(message.channel.id==kanal || message.channel.type == "dm"){
		if(message.author.id=="408785106942164992"){
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("human") || message.content.includes("check")){
				db.set("owodg","1");
				message.kanal.send("Durduruldu açmak için !aç");
			};
		};
	};

	if(message.author.id == sahip){
		if(message.content == "!aç"){
			db.set("owodg","0");
			message.channel.send("Açıldı");
		};
	};
});

//ArdaDemr Youtube

client.login("hesap tokeni");