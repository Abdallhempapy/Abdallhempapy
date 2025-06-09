const express = require('express');
const chalk = require("chalk");
const app = express();
const moment = require('moment')
const probot = require("probot-tax");
const prefix = "?" //prefix botak
var { inviteTracker } = require("discord-inviter")
const axios = require("axios")
const Discord = require('discord.js')
//express
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.log(chalk.blue.bold('Support Ra3d Studio.'))  
});
const db = require("pro.db")
//main v13 source
const { Client, Intents, MessageEmbed, User, MessageActionRow, MessageButton, Collection } = require('discord.js');
const client = new Client({
  intents : 98045,
  allowedMentions: { repliedUser: true },
});
const { REST } = require('@discordjs/rest');
const {  MessageSelectMenu } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
//handler
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);
//bot info
client.on('ready', () => {
    console.log(`Name Bot : ${client.user.username}`);
  console.log(`prefix Bot : ${prefix}`);
	console.log(`Tag : ${client.user.tag}`);
	console.log(`${client.guilds.cache.size} Servers`); 
	console.log(`${client.users.cache.size} Users`); console.log(`${client.channels.cache.size} Channels`);
      console.log(`[ ${client.guilds.cache.map(g => g.name).join(', \n ')} ]`);
}).setMaxListeners(0);
//status bot
client.on('ready', async() => {
    client.user.setStatus(`dnd`)
    let status = [` Servers : ${client.guilds.cache.size}`,`Users : ${client.users.cache.size}`,`/help`];
  setInterval(()=>{
    client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})

//error fixer
 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
//main vars 
const owners = ["901844184175099955"] //owner bot
var slogo = ""
var sname = ""
var sbanner = ""
var teamrole = ""
var sline = ""
var feedbackroom = ""
var ordercategory = ""
var netflixrole = ""
var instarole = "<@&>"
var nitrorole = "<@&> <@&>"
var visarole = "<@&>"
var botrole = "<@&>"
var ucrole = "<@&>"
var voterole = "<@&>"
var boostrole = "<@&>"
var spotifyrole = "<@&>"
var shahidrole = "<@&>"
var creditrole = "<@&>"
var tiktokrole  = "<@&>"
var autochannel1 = ""
var autochannel2 = ""
var autochannel3 = ""
var autochannel4 = ""
var autochannel5 = ""
var autochannel6 = ""
var autochannel7 = ""
var autochannel8 = ""
var autochannel9 = ""
var autochannel10 = ""
var autochannel11 = ""
var autochannel12 = ""
var taxx = "" 
var welcomeroom = ""
var teamoffer = ""
var offerroom = ""
var offerrole = ""
const invitess = ""
//
//
client.on("guildMemberAdd", (member) => {
   const welcomeEmbed =  new Discord.MessageEmbed()
   .setColor("PURPLE")
   .setDescription(`
 > Hey : <@!${member.id}> 


> Welcome To **__${sname}__**


> You Can Order Anything By Opening Ticket  


> Member Id : **${member.id}**


> 𝖤𝗇𝗃𝗈𝗒 𝗒𝗈𝗎𝗋 𝗍𝗂𝗆𝖾 💖`)  
   .setImage(sline)
   .setTimestamp()
   member.guild.channels.cache.get(welcomeroom).send({ embeds: [welcomeEmbed]}); 

})
//Slash Command Source (For All Guilds)
client.on("ready" , () => {
const commands = [{
  name : "ping",
  description : "ping bot connection",
},{
  name : "profile",
  description : "view profile",
  options : [{
    name : "user",
    description : "user to view profile",
    type : 6,
    required : false,

  }]
},{
  name : "user",
  description : "user info",
  options : [{
    name : "user",
    description : "user to mention" ,
    type : 6,
    required : false,
  }]
},{
  name : "avatar",
  description : "to view avatar someone",
  options :[{
    name : "user",
    description : "user to view his avt",
    type : 6,
    required : false,
  }]
}
,
{
  name : "avatar-server",
  description : "to view server avatar"
},{
  name : "banner",
  description : "banner of user",
  options : [{
    name : "user",
    description : "user to mention",
    type : 6,
    required : false,
  }]
},{
  name : "tax",
  description : "to get probot tax",
  options : [{
    name : "price",
    description : "price to calculate tax",
    type : 4,
    required : true,
  }]
},{
  name : "invites",
  description : "to view member invites",
  options : [{
    name : "user",
    description : "mention user to view inv",
    type : 6,
    required : false,
  }]
},{
  name : "allbans",
  description : "To View Banned Member Count",
},{
 name : "top-inv",
description : "To View Top Invites Members"
},{
  name : "help",
  description : "help menu",
},{
  name : "ban",
  description : "to ban user",
  options : [{
    name : "user",
    description : "user to mention",
    type : 6,
    required : true,
  },{
    name : "reason",
    description : "reason for ban",
    type : 3,
    required : true,
  }]
},{
  name : "unban",
  description : "to unban a member",
  options : [{
    name : "member-id",
    description : "id of member to unban him",
    type : 3,
    required : true,
  }]
},{
  name : "kick",
  description : "To Kick Member",
  options : [{
    name : "user",
    description : "mention user to kick",
    type : 6,
    required : true,
  }]
},{
  name : "v-kick",
  description : "kick member from voice",
  options : [{
   name : "user",
   description : "mention user",
   type : 6,
   required : true,
  }]
},{
  name : "show",
  description : "to show a hidden room"
},{
  name : "hide",
  description : "to hide a showed room"
},{
  name : "lock",
  description : "to lock an opened room"
},{
 name : "unlock",
 description : "to open a locked room"
},{
  name : "add-emoji",
  description : "to add emoji in server",
  options : [{
    name : "emojis",
    description : "emoji to add in server",
    type : 3,
    required : true,
  }]
},{
  name : "hideall",
  description : "hide all rooms",
},{
  name : "showall",
  description : "show all rooms",
},{
  name : "unbanall",
  description : "to unban all members"
},{
  name : "lockall",
  description : "to lock all rooms",
},{
  name : "unlockall",
  description : "to unlock all rooms",
},{
  name : "closeapply",
  description : "to close apply team",
},{
  name : "openapply",
  description : "to open apply team",
},{
  name : "srules",
  description : "to view server rules",
},{
  name : "upgrade",
  description : "to upgrade a seller",
  options : [{
    name : "seller",
    description : "seller to upgrade",
    type : 6,
    required : true,
  },{
    name : "rolename",
    description : "role upgraded name",
    type : 3,
    required : true,
  }]
},{
    name : "finish",
  description : "fire a seller from team",
  options : [{
    name : "seller",
    description : "seller to finish",
    type : 6,
    required : true,
  },{
    name : "reason",
    description : "reason to finish",
    type : 3,
    required : true,
  }]
},{
  name : "h-logo",
  description : "help designer in logo"
},{
  name : "h-designs",
  description : "help designer in designs"
},{
  name : "h-bot",
  description : "help developer in bot"
},{
  name : "fb",
  description : "let client write feedback",
  options : [{
    name : "client",
    description : "client to write feedback",
    type : 6,
    required : true
  }]
},{
  name : "claim",
  description : "to claim a ticket"
},{
  name : "welcomeseller",
  description : "to welcome a new seller",
  options : [{
    name : "seller",
    description : "seller to welcome",
    type : 6,
    required : true,
  }]
}]
    const rest = new REST({ version: '9' }).setToken(process.env.token);
    
    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands },
            );
            console.log("Done Run ApplicationCommands");
        } catch (error) {
            console.error(error);
        }
    })();
})
//botinfo
client.on('interactionCreate', async interaction => {
if (!interaction.isCommand()) return;
await interaction.deferReply()
  if(interaction.commandName == "botinfo"){
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
 const botinfoembed = new MessageEmbed()
    .setTitle("Ultra Bot Information")
    .setColor("BLUE")
    .setDescription(`\`\`\`js

 < Bot Name : > " ${client.user.username} " 
 < Prefix : > " / , ${prefix} "
 < Servers Count : > " ${client.guilds.cache.size} " 
 < Version : > " 1.0.0 "
 < Users Count : > " ${client.users.cache.size} " 
 < Ping : > " ${client.ws.ping} " 
 < Channels Count : > " ${client.channels.cache.size} " 

\`\`\``)
 .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    
interaction.editReply({ embeds: [botinfoembed]})
  }//ping
else if(interaction.commandName == "ping") {
let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
interaction.editReply(`\`\`\`javascript
< My Ping > : < 18 >
\`\`\``)
}//public cmd -- profile
else if(interaction.commandName == "profile") {
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
 const uus = interaction.options.get('user')
if(!uus){
 const withoutuus = new MessageEmbed()
  .setColor("RANDOM") .setImage(`https://api.probot.io/profile/${interaction.user.id}`)
  interaction.editReply({ embeds: [withoutuus]})
}
if(uus){
  const withuus = new MessageEmbed()
  .setColor("RANDOM") .setImage(`https://api.probot.io/profile/${uus.user.id}`)
  interaction.editReply({ embeds: [withuus]})
}
}//user
else if(interaction.commandName == "user") {
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
 const user = interaction.options.get('user')
 if(user){
 const withuserembed = new MessageEmbed()
       .setFooter(user.user.username , user.user.avatarURL())
    .setDescription(`**Joined Discord :**\n**<t:${parseInt(user.member.user.createdAt / 1000)}:R>**\n\n**Joined Server :**\n**<t:${parseInt(user.member.joinedAt / 1000)}:R>**`)
    .setThumbnail(user.user.avatarURL())
    .setColor("RED")

const row = new MessageActionRow()
 .addComponents(new Discord.MessageButton()
        .setStyle('LINK')
        .setLabel(`${user.user.username} Profile`)
     .setEmoji('984126721794129961')  
                 .setURL(`https://discord.com/users/${user.user.id}`)
  )
   interaction.editReply({ embeds: [withuserembed] , components : [row]})
}
if(!user) {
const withoutuserembed = new MessageEmbed()
       .setFooter(interaction.user.username , interaction.user.avatarURL())
    .setDescription(`**Joined Discord :**\n**<t:${parseInt(interaction.member.user.createdAt / 1000)}:R>**\n\n**Joined Server :**\n**<t:${parseInt(interaction.member.joinedAt / 1000)}:R>**`)
    .setThumbnail(interaction.user.avatarURL())
    .setColor("RED")

  const xrow = new MessageActionRow()
 .addComponents(new Discord.MessageButton()
        .setStyle('LINK')
        .setLabel(`${interaction.user.username} Profile`)
     .setEmoji('984126721794129961')  
                 .setURL(`https://discord.com/users/${interaction.user.id}`)
  )
  
   interaction.editReply({ embeds: [withoutuserembed], components: [xrow]})
}
}//avatar
  if(interaction.commandName == "avatar") {
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
  let ff = interaction.options.getUser('user') || interaction.member;    
        let userr = interaction.member.guild.members.cache.get(ff.id)

    var ubutton = new MessageActionRow()
   .addComponents(
     new MessageButton()

      .setStyle('LINK')
.setEmoji('<a:emoji_8:943507566145728572>')
.setLabel(`DOWNLOAD AVATAR`)
.setURL(userr.user.displayAvatarURL({ dynamic: true}))); 
        
        const embed3 = new MessageEmbed()

//.setColor(userr.displayHexColor) 
.setAuthor(userr.user.tag,userr.user.displayAvatarURL({dynamic: true}))
.setDescription(`[Avatar link](${userr.user.displayAvatarURL({dynamic: true, size: 4096})})`)
.setImage(userr.user.displayAvatarURL({ dynamic: true, size: 4096}))
  
          .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true}))
    
interaction.editReply({embeds: [embed3]})

}//avatar-server
else if(interaction.commandName == "avatar-server") {
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
 const avtsembed = new MessageEmbed()
  .setImage(interaction.guild.iconURL())
  .setColor("RANDOM")
  interaction.editReply({ embeds: [avtsembed]})

}//banner
else if(interaction.commandName == "banner") {
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
   let ff = interaction.options.getUser('user') || interaction.member;    
        let user = interaction.member.guild.members.cache.get(ff.id) 
          
  if (user) {
     
             const data = await axios.get(`https://discord.com/api/users/${user.id}`, {
                  headers: {
                        Authorization: `Bot ${process.env.token}`
               }
             }).then(d => d.data);
             if(data.banner){
               let url = data.banner.startsWith("a_")?".gif?size=4096":".png?size=4096";
                  url = `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${url}`;
 
       let embed = new MessageEmbed()

.setAuthor(`${user.user.tag} Banner`,url)    
.setDescription(`**[Banner link](${url})**`)
.setColor("WHITE")
  .setImage(url)
  .setFooter(`Requested By ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}))
               
  interaction.editReply({embeds: [embed]})
             
               
           } else {
    interaction.reply({content: `**${user.user.username}, doesn't have a banner ✨**`})
  }
  }
}//tax
else if(interaction.commandName == "tax") {
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
    let args = interaction.options.getInteger("price")
      let tax2 = Math.floor(args * (20) / (19) + (1)-(args))
  let tax3 = Math.floor(tax2 * (20) / (19) + (1))
  let tax4 = Math.floor(tax2 + tax3 + args)
  const taxembed = new MessageEmbed()
    .setColor('RED')
.setDescription(`Your Final Tax Is : **${probot.taxs(args)}**

Your Tax With Mediator Is : **${tax4}**`)
.setThumbnail(`${interaction.user.displayAvatarURL()}`)
     .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)


 interaction.editReply({ embeds: [taxembed]})
}//
  
else if(interaction.commandName ==  "allbans"){    interaction.editReply(`**__Undifined __ Count Banned Members**`)
                                            
}//invites
else if(interaction.commandName == "invites") {
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
const user = interaction.options.get('user')

if(!user) {
       var invite = await inviteTracker.getMemberInvites(interaction.member);
    interaction.editReply(` ${interaction.user.username} Has Got ${invite.count} Invite(s) 
`);
}
if(user) {
         var invite2 = await inviteTracker.getMemberInvites(user.member);
    interaction.editReply(` ${user.user.username} Has Got ${invite2.count} Invite(s)  
`);
}
}//top-inv
else if(interaction.commandName == "top-inv"){
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
      var top = await inviteTracker.getTopInvites(interaction.guild);
   interaction.editReply(
      top
        .map((i, n) => `\`#${n + 1}\`- **${i.user.tag}** has __${i.count}__`)
        .join("\n")
    );
}//help
   else if(interaction.commandName == "help") {
     let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
      const mainembed = new MessageEmbed()
    .setTitle("Ultra Bot Information")
    .setColor("BLUE")
    .setDescription(`\`\`\`js

 < Bot Name : > " ${client.user.username} " 
 < Prefix : > " / , ${prefix} "
 < Servers Count : > " ${client.guilds.cache.size} " 
 < Version : > " 13,Slashcommand "
 < Users Count : > " ${client.users.cache.size} " 
 < Ping : > " ${client.ws.ping} " 
 < Channels Count : > " ${client.channels.cache.size} " 

\`\`\``)
 .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('⚘・𝗦𝗘𝗟𝗘𝗖𝗧 𝗔 𝗟𝗜𝗦𝗧 𝗛𝗘𝗥𝗘')
                    .addOptions([
                        {
                            label: 'Public Commands',
                            description: 'Public commands Like(profile,user,etc)',
 
 emoji: '<a:zredearth:975858305203331166>',

                            value: 'first_option',
                        },
                        {
                            label: 'Admin Commands',

description: 'Admin Commands Like(ban,kick,etc)',
    emoji : '<a:redcheckshield:977146653213614080>',
                            value: 'second_option',
                        },{
                            label: 'Shop Commands',                           description: 'Setting Commands Like(fire,upgrede,etc)',
      emoji : '<a:emoji_126:978847047140659250>',
                            value: 'third_option',
                        },{
                            label: 'Music Commands',
                            description: 'Music Commands Like(play,stop,etc)',
        emoji : "984131776270192641",
                            value: 'sixths_option',
                        },
                      
                    ]),
            );

        interaction.editReply({ embeds: [mainembed], components: [row] });
}//ban
 else if (interaction.commandName == 'ban') {     
if(!interaction.member.permissions.has("BAN_ROLES")) return interaction.editReply(`** 😕 You don't have permission **`);
   if(!interaction.guild.me.permissions.has('BAN_ROLES')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

   let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
      
    let user = interaction.options.getMember('user')
    if(user.roles.highest.position >= interaction.member.roles.highest.position && interaction.user.id !== interaction.guild.fetchOwner().id) return interaction.editReply(`** ❌ You can't ban this user**`);
    if(!user.bannable) return interaction.editReply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => {console.log(err)});
     await interaction.editReply(`✅ **${user.user.tag} banned from the server!**✈️`);
    }//unban
 else if(interaction.commandName == "unban") {
if(!interaction.member.permissions.has("BAN_ROLES")) return 
 interaction.editReply (`** 😕 You don't have permission **`);
   if(!interaction.guild.me.permissions.has('BAN_ROLES')) return 
 interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
   let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
      
    let id = 
 interaction.options.getString('member-id')
    if(isNaN(id)) {
      return interaction.editReply(`** 😕 Please mention or id **`);
    }else {
interaction.guild.members.unban(id).then(mmm => {
        interaction.editReply(`✅** ${mmm.tag} unbanned!**`)
      }).catch(err => interaction.editReply(`**I can't find this member in bans list**`));
    }
     }//kick
else if(interaction.commandName == "kick"){
  if(!interaction.member.permissions.has("KICK_ROLES")) return interaction.editReply(`** 😕 You don't have permission **`);
   if(!interaction.guild.me.permissions.has('KICK_ROLES')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
      
    let user = interaction.options.getMember('user')
    if(user.roles.highest.position >= interaction.member.roles.highest.position && interaction.user.id !== interaction.guild.fetchOwner().id) return interaction.editReply(`** ❌ You can't kick this user**`);
    if(!user.kickable) return interaction.editReply(`** ❌ You can't kick this user**`);
    await user.kick().catch(err => {console.log(err)});
     await interaction.editReply(`✅ **${user.user.tag} Kicked from the server!**✈️`);
}//vkick
  else if(interaction.commandName == "v-kick") {

    const args = interaction.options.get('user')
if(!interaction.member.permissions.has("MOVE_MEMBERS")) return interaction.editReply(`** 😕 You don't have permission **`);
   if(!interaction.guild.me.permissions.has('MOVE_MEMBERS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
    if (!interaction.member.voice.channel)
      return interaction.editReply("Your are not in voice channel");

    interaction.editReply(
      `**${args.user.username}** has been kicked from **Voice Channel**`
    );
  }//hide
 else if (interaction.commandName == 'hide') {
if(!interaction.guild) return;
if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`); 
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
   let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
  
let everyone = interaction.guild.roles.cache.find(hyper => hyper.name === '@everyone');
interaction.channel.permissionOverwrites.edit(everyone, {
            VIEW_CHANNEL : false
            }).then(() => {
interaction.editReply(`**✅  ${interaction.channel} Done hide this room.**`)
})
    
}//show
   else if (interaction.commandName == 'show') {
if(!interaction.guild) return;
if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`); 
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

     let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
  
let everyone = interaction.guild.roles.cache.find(hyper => hyper.name === '@everyone');
interaction.channel.permissionOverwrites.edit(everyone, {
            VIEW_CHANNEL : true
            }).then(() => {
interaction.editReply(`**✅  ${interaction.channel} Done Showed this room.**`)
})
    
  }//lock
else if (interaction.commandName == 'lock') {
if(!interaction.guild) return;
if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`); 
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
let everyone = interaction.guild.roles.cache.find(hyper => hyper.name === '@everyone');
interaction.channel.permissionOverwrites.edit(everyone, {
            SEND_MESSAGES : false
            }).then(() => {
interaction.editReply(`**🔒 ${interaction.channel} has been looked.** `) 
 })
}//unlock
else if (interaction.commandName == 'unlock') {
if(!interaction.guild) return;
if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`); 
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
let everyone = interaction.guild.roles.cache.find(hyper => hyper.name === '@everyone');
interaction.channel.permissionOverwrites.edit(everyone, {
            SEND_MESSAGES : true
            }).then(() => {
interaction.editReply(`**🔒 ${interaction.channel} has been unlooked.** `) 
 })
}//add emoji
else if (interaction.commandName == 'add-emoji') {
if (!interaction.member.permissions.has("MANAGE_EMOJIS")) {
  return message.reply("** 😕 You don't have permissions **"); 
} 
if(!interaction.guild.me.permissions.has('MANAGE_EMOJIS')) {
  return interaction.editeply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
}
  let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)

const emojis = interaction.options.getString('emojis').match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi);
let emojisArra = []
emojis.forEach((emote) => {
  let emoji = Discord.Util.parseEmoji(emote);
  if (emoji.id) {
    const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
      emoji.animated ? "gif" : "png" 
    }`;
interaction.guild.emojis.create(`${Link}`, `${emoji.name}`).then((em) => {
        emojisArra.push(em.toString())
          if (emojis.length == emojisArra.length) {
    interaction.editReply(`${emojisArra.map(e => e).join(',')} **Done add emoji**`)
      emojisArra = []
  }
    })
      .catch((error) => {
        console.log(error);
    });
  }
})
}//showall
  else if(interaction.commandName == "showall") {
    if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`); 
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
interaction.guild.channels.cache.each((channel) => { 
   channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
            VIEW_CHANNEL: true
            });
});
  interaction.editReply("> ** Done __Showed__ All Server Channels")
  }//hideall
  else if(interaction.commandName == "hideall") {
        if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`); 
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
interaction.guild.channels.cache.each((channel) => { 
   channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
            VIEW_CHANNEL: false
            });
});
  interaction.editReply("> ** Done __Hidedd__ All Server Channels**")
       }//unbanall
    
  else if(interaction.commandName == "unbanall") {
    if(!interaction.member.permissions.has('BAN_ROLES')) return interaction.editReply(`** 😕 You don't have permissions **`); 
   const serverban = client.guilds.cache.get(interaction.guild.id)
  if (!interaction.guild.me.permissions.has('BAN_ROLES')) return interaction.editReply(`** 😕 I couldn't ban permissions. Please check my permissions and role position.**`);
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
     interaction.guild.bans.fetch().then(bans => {
 bans.forEach(ban => {
 serverban.members.unban(ban.user.id)
 })
 }).then(() => {
 interaction.editReply({ content: `> ** Done __Unbanned__ All Banlist **` })
 })
  }  else if(interaction.commandName == "lockall") {
        if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`); 
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
interaction.guild.channels.cache.each((channel) => { 
   channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
            SEND_MESSAGES: false
            });
});
  interaction.editReply("> ** Done __Locked__ All Server Channels**")
       }
  else if(interaction.commandName == "unlockall") {
        if(!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 You don't have permissions **`);
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.editReply(`انت من قائمه البلاكلست لا يمكنك استخدام البوت`)
  
  if (!interaction.guild.me.permissions.has('MANAGE_CHANNELS')) return interaction.editReply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);
interaction.guild.channels.cache.each((channel) => { 
   channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
            SEND_MESSAGES: true
            });
});
  interaction.editReply("> ** Done __UnLocked__ All Server Channels**")
       }  else if(interaction.commandName == "upgrade"){  if(!interaction.member.permissions.has("ADMINSTRATOR")) return interaction.editReply(`** 😕 You don't have permission **`);
   const user = interaction.options.getUser('seller')
  const reason = interaction.options.getString('rolename')
  const upgradeembed = new MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
  .setDescription(`Done Upgrades The Seller`)
    .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
  .setThumbnail(slogo)
  interaction.editReply({ embeds: [upgradeembed] })
      const upgradedmembed = new MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
        .setDescription(`
      
      > \`-\`  **Congratulations, you have reached ${reason} Role !!** 


      > \`/-\`   **Upgrade to :** **{ \`${reason}\` }**

  **============================**  


      > \`?-\` **Upgrade From :** **\`${interaction.author}\`**

      > \`?-\` **Thanks to Activate __City Store__ **

      > \`?-\`   **Keep Going** 


  **============================**        
      
      `)
        .setFooter(`Upgrade From ${interaction.user.tag}`);
    user.send({ embeds: [upgradedmembed] });
                                      
    }  else if(interaction.commandName == "finish"){  if(!interaction.member.permissions.has("ADMINSTRATOR")) return interaction.editReply(`** 😕 You don't have permission **`);
   const user = interaction.options.getUser('seller')
  const reason = interaction.options.getString('reason')
  const finishembed = new MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
  .setDescription(`Done Finished The Seller`)
    .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
  .setThumbnail(slogo)
  interaction.editReply({ embeds: [finishembed] })
      const finishdmembed = new MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
        .setDescription(`
      
      > \`-\` **تم تصفيتك من التيم الخاص بنا** 


      > \`/-\`   **السبب :** **{ \`${reason}\` }** 


      > \`?-\`  **شكراا لي الوقت الذي قدمتو معنا** 

      `)
        .setFooter(`Finish From ${interaction.user.tag}`);
user.send({ embeds: [finishdmembed] });
                                        }
  else if(interaction.commandName == "h-logo") {
 if (!interaction.member.roles.cache.has(teamrole)) return interaction.editReply('انت لست من التيم الخاص بنا')
const hlogoembed = new MessageEmbed()
   .setTitle("> Pls Fill This List")
   .setDescription(`
> 1-Server Name

> 2-AKA 

> 3-Color

> 4-Mascot Or Text

> 5-Do You Want It Creative Or Not

> 6-Do You Have An Example

========================

Please Fill This List To Help The Designer`)
    .setImage(sline)
     .setColor("RANDOM")
    interaction.editReply({ embeds: [hlogoembed]});
   }
  else if(interaction.commandName == "h-bot") {
 if (!interaction.member.roles.cache.has(teamrole)) return interaction.editReply('انت لست من التيم الخاص بنا')
const hbotsembed = new MessageEmbed()
   .setTitle("> Pls Fill This List")
   .setDescription(`> 1-Bot Name

> 2-Bot Avatar

> 3-Bot Prefix

> 4-Bot Type

> 5-The Line Of Your Server

========================

Please Fill This List To Help The Dev`)
    .setImage(sline)
     .setColor("RANDOM")
    interaction.editReply({ embeds: [hbotsembed]});
  }
    else if(interaction.commandName == "h-designs") {
 if (!interaction.member.roles.cache.has(teamrole)) return interaction.editReply('انت لست من التيم الخاص بنا')
const hdesignsembed = new MessageEmbed()
   .setTitle("> Pls Fill This List")
   .setDescription(`> 1-What Is The Design You Want

> 2-Server Name

> 3-AKA 

> 4-Server Logo

> 5-Color

> 6-Do You Have An Example

========================

Please Fill This List To Help The Designer`)
    .setImage(sline)
     .setColor("RANDOM")
    interaction.editReply({ embeds: [hdesignsembed]});
       }
  else if(interaction.commandName == "fb") {
     if (!interaction.member.roles.cache.has(teamrole)) return interaction.editReply('انت لست من التيم الخاص بنا')
 const client = interaction.options.getUser('client')
  interaction.editReply({ content : `Thx ${client} For Using Us 



Please Write Feedback to The Seller From Here <#${feedbackroom}> 



We Hope You Visit Us Again`})

}
else if(interaction.commandName == "claim") {
 if (!interaction.member.roles.cache.has(teamrole)) return interaction.editReply('انت لست من التيم الخاص بنا')
  if (!interaction.channel.name.startsWith( `ticket`)) return interaction.editReply(`its not a ticket`)
 interaction.channel.setName(`by ${interaction.user.username}`)
 interaction.editReply("Done Claimed Ticket")
  }
  else if(interaction.commandName == "closeapply"){
if(!interaction.member.permissions.has("ADMINSTRATOR")) return interaction.editReply(`** 😕 You don't have permission **`);
  const closaaplyembed = new MessageEmbed()
  .setColor("RED")
  .setDescription(`**The Apply on Team currently Closed**`)
  
interaction.editReply({ embeds: [closaaplyembed]}).then(r =>{
  r.react("❎");
})
}//openapply
else if(interaction.commandName == "openapply"){
if(!interaction.member.permissions.has("ADMINSTRATOR")) return interaction.editReply(`** 😕 You don't have permission **`);
  const closaaplyembed = new MessageEmbed()
  .setColor("#23FF00")
  .setDescription(`**The Apply on Team currently Opened**`)
  
interaction.editReply({ embeds: [closaaplyembed]}).then(r =>{
  r.react("✅");
})
}//srules
  else if(interaction.commandName == "srules"){   if(!interaction.member.permissions.has("ADMINSTRATOR")) return interaction.editReply(`** 😕 You don't have permission **`);
const rulesembed = new MessageEmbed()
  .setColor("RANDOM")
.setThumbnail(slogo)  
.setImage(sirules)
.setDescription(`
**قوانين الخادم**


 **ممنوع أثارة المشاكل بالسيرفر او عالخاص** 


**احترمام جميع الموجودين في السيرفر مع مراعاه الخصوصيه ** 


*احترام نظام السيرفر و القوانين**


** ممنوع انتهاك شخصيه الغير** 


** ‏ممنوع نشر اي لينكات في السيرفر ** 
`)

.setTimestamp()

interaction.editReply({ embeds: [rulesembed] }).then(r=>{
   r.react("✅")
 })
                                              }
})    

//help interactions
client.on("interactionCreate" , interaction => {
  if(!interaction.isSelectMenu()) return;
  if(interaction.values == "first_option") {
      let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.reply({content:`انت من قائمه البلاكلست لا يمكنك استخدام البوت`})
 const publicselectembed = new MessageEmbed()
     .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
   .setTitle("All Public Cmd")
    .setColor("GREEN")
    .setTimestamp()
    .setDescription(`
> /help - to get help menu and information about server
> /user - to view the user of the member
> /profile - to view the probot profile of the member
> /allbans - to view ban count of the server
> /tax - to get the probot tax fo the credits
> /banner - to get someone's banner or your banner
> /avatar - to get anyone's avatar
> /avatar-server - to get the server avatar(allows gif)
> /invites - to get the number members you invited
> /top-inv - to get the top inv in the server

`)
    interaction.reply({embeds:[publicselectembed] , ephemeral : true})
  }
  if(interaction.values == "second_option") {
    let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.reply({content:`انت من قائمه البلاكلست لا يمكنك استخدام البوت`})
    const adminselectembed = new MessageEmbed()
    .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
   .setTitle("All Admin Commands")
    .setColor("GREEN")
    .setTimestamp()
    .setDescription(`
> /ban - To Ban A Member
> /unban - To Unban A Member
> /unbanall - To Unban All Members
> /kick - To Kick A Member From The Server
> /v-kick - To Kick A Member From The Voice
> /show - To Show A Room
> /hide - To Hide A Room
> /showall - To Show All Server Rooms
> /hideall - To Hide All Server Rooms
> /lock - To Lock A Room
> /unlock - To Unlock A Room
> /lockall - To Lock all Rooms
> /unlockall - To Unlock All Rooms
`)
    interaction.reply({ embeds: [adminselectembed] , ephemeral : true})
  }
    if(interaction.values == "third_option") {
      let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.reply({content:`انت من قائمه البلاكلست لا يمكنك استخدام البوت`})
          const settingselectembed = new MessageEmbed()
    .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
   .setTitle("All Seller Commands")
    .setColor("GREEN")
    .setTimestamp()
    .setDescription(`
> /closeapply - to close team apply
> /openapply - to tpen apply
> /srules - to view server rules with embed
> /upgrade - to upgrede a seller
> /finish - to fire a seller
> /h-logo - to get a list of logo help seller
> /h-design - to get a list of design help seller
> /h-logo - to get a list of bot rqequirments to help the dev
> /fb - to get a feedback from a member to seller
> /claim - to claim the ticket
`)
    interaction.reply({ embeds: [settingselectembed] , ephemeral : true})
    }  
    else if(interaction.values == "sixths_option") {
      let blacklistdb = db.get(`blacklist_${interaction.user.id}`)

    if(blacklistdb) return interaction.reply({content:`انت من قائمه البلاكلست لا يمكنك استخدام البوت`})
          const musicselectembed = new MessageEmbed()
    .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
   .setTitle(" All Music Commands ")
    .setColor("GREEN")
    .setDescription(`
/play - to play a song
/stop - to stop the song and disconnect from the voice
/pause - to pause a song
/resume - to resume the song
/skip - to skip a song
/loop - to loop all the song
/volume - to change a volume of song
/now_playing - to view the nowplaying music
/queue - to view more information about all songs will played

`)
      interaction.reply({ embeds: [musicselectembed] , ephemeral: true})
    }
})
  
client.on("messageCreate", neymar => {
  if(!neymar.content.startsWith(prefix + "blacklist")) return;
  if(neymar.author.bot) return;
        if(!owners.includes(neymar.author.id)) return neymar.reply({content:"**بس يبابا **"})
  const user = neymar.mentions.users.first();
  if(!user) return neymar.reply("mention")
  if(neymar.author.bot) return;
  db.set(`blacklist_${user.id}`, "true")
  neymar.reply(`
done add ${user.username} to blacklist users
`)
})
client.on("messageCreate", neymar => {
  if(!neymar.content.startsWith(prefix + "unblacklist")) return;
  if(neymar.author.bot) return;
        if(!owners.includes(neymar.author.id)) return neymar.reply({content:"**بس يبابا **"})
  const user = neymar.mentions.users.first();
  if(!user) return neymar.reply("منشن للمتناك")
  if(neymar.author.bot) return;
  const blacklistdb = db.fetch(`blacklist_${user.id}`, "true")
  if(!blacklistdb) return neymar.reply(`He Is Not In Tha Database`)
  db.delete(`blacklist_${user.id}`, "true")
  neymar.reply(`
done remove ${user.username} from blacklist users
`)
})

//

//////////////setted///////////////////
//tax
client.on("messageCreate", async message => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxx) return; { 
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      let errorembed3 = new MessageEmbed()
      .setTitle(`**<a:a7:975011978449915994> Error**`)
      .setColor(colorr)
      .setDescription(`**It Must be a number**`)
      .setFooter({text: message.guild.name, iconURL: message.guild.iconURL()})
      if (!args2) return message.reply({embeds:[errorembed3]});
      let errorembed2 = new MessageEmbed()
      .setTitle(`**<a:a7:975011978449915994> Error**`)
      .setColor(colorr)
      .setDescription(`**Must Be A Number**`)
      .setFooter({text: message.guild.name, iconURL: message.guild.iconURL()})
      if (isNaN(args2)) return message.reply({embeds:[errorembed2]});
      let errorembed = new MessageEmbed()
      .setTitle(`**<a:a7:975011978449915994> Error**`)
      .setColor(colorr)
      .setDescription(`**Must The Number Larger 1**`)
      .setFooter({text: message.guild.name, iconURL: message.guild.iconURL()})
      if (args2 < 1) return message.reply({embeds:[errorembed]});
      let tax_embed = new MessageEmbed()
      .setColor(colorr)
      .setThumbnail(client.user.avatarURL())
      .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
      .setDescription(`
      > <a:C_6T5:975011834086170674> ** __Your Tax Is : __${tax} **<a:C_6T5:975011834086170674>
      `)
      .setFooter({text: message.guild.name, iconURL: message.guild.iconURL()})
      
      let mod_embed = new MessageEmbed()
      .setColor(colorr)
      .setThumbnail(client.user.avatarURL())
      .setAuthor({name: message.author.username, iconURL: message.author.avatarURL()})
      .setDescription(`
      > <a:C_6T5:975011834086170674> ** __ Your Tax Is : __${tax4} **<a:C_6T5:975011834086170674>
      `)
      .setFooter({text: message.guild.name, iconURL: message.guild.iconURL({dynamic:true})})
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("↩️")
        .setStyle('DANGER')
);
        let m = await message.reply({ embeds: [tax_embed], components: [row] });
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ embeds:[mod_embed], components: [row2] })
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ embeds:[tax_embed], components: [row] })
            
                  i.deferUpdate()
          } else {
            return;
          }
      });
    }

})
//lines
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel1) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel2) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel3) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel4) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel5) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel6) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel7) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel8) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel9) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel10) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel11) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//
client.on("messageCreate", message => {
  let embed = new MessageEmbed()
    .setImage(sline)
    .setColor("RANDOM")//لون
  if (message.channel.id != autochannel12) return;//ايدي الروم
  if (message.author.id === client.user.id) return;
  if (message.author.send) {
    message.reply({ embeds: [embed] });
  }

})
//inv
  tracker = new inviteTracker(client);
tracker.on('guildMemberAdd', async (member, inviter, invite, error) => {
  
    let channel = member.guild.channels.cache.get(invitess),
    Msg = `<@${member.id}> Joined Server. <a:emoji_126:978847047140659250> 
He/she was invited by <@${inviter.id}> who now has ${invite.count} invites <a:power586:975858804136763422> `;
  channel.send(Msg)
})
  /* let blacklistdb = await db.get(`blacklist_${message.author.id}`)

    if(blacklistdb) {
      
      message.reply({content:`انت من قائمه البلاكلست لا يمكنك استخدام البوت`})
}
*/

/*
    client.on('interactionCreate', async interaction => {
if (!interaction.isCommand()) return;
await interaction.deferReply()
  if(interaction.commandName == "wehbook"){
    if (!interaction.isCommand()) return;
 await interaction.reply({content: `**__DONE__**`, ephemeral: true })
    const user = interaction.options.get("user")
   const text = interaction.options.getString("text")
    if(!interaction.author.permissions.has("MANAGE_WEBHOOKS"));
      
  if(!user) {
interaction.channel.createWebhook(interaction.user.username, {
    avatar:interaction.user.avatarURL(),
    reason:"عشان امك"
  }).then(tt => 
  tt.send(`${text}`));

                        
    
  }

if(user){
interaction.channel.createWebhook(user.user.username, {
  avatar: user.user.avatarURL(),
  reason: 'عشان امك'
})
  .then(w=>{w.send(`${text}`)
})}
  }
    })
  */
client.on('channelCreate', message => {

  if(message.parentId !== ordercategory) return;
  const pricelistembed = new MessageEmbed()
      .setColor('#1e1e81')
     .setImage('https://media.discordapp.net/attachments/991840276882653205/991841035716153395/received_438489307616667-1-5.gif') 
        .setTimestamp()
 .setDescription(`\`#\` <a:ss_8:979497615903322165> Hello User Pls Select Your Order

\`#\`  <a:ss_8:979497615903322165> مرحبا.. رجاء اختيار الطلب الخاص بك

==================

>  \`-\` <:netflix:979516981881499698> **netflix**



>  \`-\` <:insta:979700898949378089> **insta**



>  \`-\` <a:anitrogaming:979701310767104010> **nitro**



>  \`-\` <:visa_ph:979497522844278865> **visa**



>  \`-\` <:4323blurpleverifiedbotdeveloper:979712973264289822> **bot**



>  \`-\` <:vote_ph:979713147780882433> **vote**



>  \`-\` <:ucPubg:979497532143067166> **uc**



>  \`-\` <a:5102nitroboost:979497280048615464> **boost**



>  \`-\` <:SPOTIFY:979714118577688586> **spotify**



>  \`-\` <:shahed_ph:979714273959895061> **shahid**



>  \`-\` <:Credits:979714599492415538> **credit**



>  \`-\` <:TikTok:979497551327793242> **tiktok**
`)
          const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Select prices here')
                    .addOptions([
                        {
                            label: 'netflix',
                            description: 'netflix prices',
 
 emoji: '<:netflix:979516981881499698>',

                            value: 'netflix',
                        },
                        {
                            label: 'insta',

description: 'insta prices',
    emoji : '<:insta:979700898949378089>',
                            value: 'insta',
                        },{
                            label: 'nitro', 
                          description: 'nitro prices',
      emoji : '<a:anitrogaming:979701310767104010>',
                            value: 'nitro',
                        },{
                            label: 'visa',
    emoji : "<:visa_ph:979497522844278865>",
                            description: 'visa prices',
                          
                            value: 'visa',
                        },{
                            label: 'bot',

      emoji : "<:4323blurpleverifiedbotdeveloper:979712973264289822>", 
                            description: 'bot prices',
                            value: 'bot',
                        },{
                            label: 'vote',
                            description: 'votes prices',
        emoji : "<:vote_ph:979713147780882433>",
                            value: 'vote',
                        },{
                            label: 'uc',
                            description: 'uc prices',
        emoji : "<:ucPubg:979497532143067166>",
                            value: 'uc',
                        },{
                            label: 'boost',
                            description: 'boost prices',
        emoji : "<a:5102nitroboost:979497280048615464>",
                            value: 'boost',
                        },{
                            label: 'spotify',
                            description: 'spotify prices',
        emoji : "<:SPOTIFY:979714118577688586>",
                            value: 'spotify',
                        },{
                            label: 'shahid',
                            description: 'shahid prices',
        emoji : "<:shahed_ph:979714273959895061>",
                            value: 'shahid',
                        },{
                            label: 'credit',
                            description: 'credit prices',
        emoji : "<:Credits:979714599492415538>",
                            value: 'credit',
                        },{
                            label: 'tiktok',
                            description: 'tiktok prices',
        emoji : "<:TikTok:979497551327793242>",
                            value: 'tiktok',
                        }
                      
                    ]),
            );
     setTimeout(() => {
message.send({ embeds: [pricelistembed], components: [row] })
      }, 2000);    
})
//
client.on("interactionCreate" , (interaction) => {
  if(!interaction.isSelectMenu()) return;
        let blacklistdb = db.get(`blacklist_${interaction.user.id}`)
    if(blacklistdb) return interaction.reply({content:`انت من قائمه البلاكلست لا يمكنك استخدام البوت`})

  if(interaction.values == "netflix") {
    const netflixembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
         .setTitle(`\`\#\`\ Netflix Prices In ${interaction.guild.name}`)
    .setDescription(` Here Is All Netflix Prices 

===========

**<a:owner_ship:979748165769113600> - Netflix User 1 month : 80K <:netflix:979516981881499698> **

**<a:owner_ship:979748165769113600> - Netflix Acc 1 week : 40K <:netflix:979516981881499698> **

**<a:owner_ship:979748165769113600> - Netflix Acc 1 month : 150K <:netflix:979516981881499698>**

==============

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage(`https://aramobi.com/wp-content/uploads/2021/08/Netflix-768x432.jpg`)
     .setColor("RANDOM")

           let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`netbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [netflixembed] , components: [row]})
  }
  if(interaction.values == "insta") {
    const instaembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
         .setTitle(`\`\#\`\ InstaGram Prices In ${interaction.guild.id}`)
    .setDescription(` Here Is All Instagram Prices 

===========

**__Followers__**

- **👀 - 100 Follower : 10K <:MV_Instagram2:979498314120716319> **

- **👀 - 500 Follower : 50K <:MV_Instagram2:979498314120716319> **

- **👀 - 1k Follower : 100K <:MV_Instagram2:979498314120716319> **


**__Likes__**


- **👀 - 100 Like : 10K <:MV_Instagram2:979498314120716319> **

- **👀 500 Like : 50K <:MV_Instagram2:979498314120716319> **

- **👀 1k Like : 100K <:MV_Instagram2:979498314120716319> **


==============


- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://img.freepik.com/free-vector/social-media-instagram-banner_228198-596.jpg")

               let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`insbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
        interaction.reply({content : `<@${interaction.user.id}>`, embeds: [instaembedembed] , components: [row]})
  }
    if(interaction.values == "visa") {
    const visaembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
     .setTitle(`\`\#\`\ Visa Prices In ${interaction.guild.name}`) 
     .setDescription(`Here Is All Visa Prices

============


**<:visa_ph:979497522844278865> Visa (Only Nitro Activation) : 15K <:Credits:979714599492415538>**


=============

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968612061846310972/images.png")
      
               let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`visbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
        interaction.reply({content : `<@${interaction.user.id}>`, embeds: [visaembedembed] , components: [row]})
  }
     if(interaction.values == "nitro") {
    const nitroembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
     .setTitle(`\`\#\`\ Nitro Prices In ${interaction.guild.name}`)
    .setDescription(`Here Is All Nitro Prices

============

**<a:anitrogaming:979701310767104010> Ntiro Gaming 1 Month : 1M <:Credits:979714599492415538>  **


**<a:anitrogaming:979701310767104010> Nitro Gaming 3 Month : 30K <:Credits:979714599492415538>  **


**<a:nitroclassic:979752010196877353> Nitro Classic 1 Month : 650K <:Credits:979714599492415538>  **



===========


- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968537296498483210/EGS_Discord_Nitro_2560x1440_withlogo_2560x1440-944994658df3b04d0c4940be832da19e.png")
      
               let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`nitbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
        interaction.reply({content : `<@${interaction.user.id}>`, embeds: [nitroembedembed] , components: [row]})
  }
       if(interaction.values == "bot") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
          .setTitle(`\`\#\`\ Bot Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Bot Prices

==============

- <:4323blurpleverifiedbotdeveloper:979712973264289822> Full System Vip Shop Bot : 800K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Full System Bot : 500K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> System Bot : 200K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Brodcast Bot : 150K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Avatar Bot : 100K <:Credits:979714599492415538>


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Auto Line & React : 80K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Tax (In Specific Room) : 60K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Tax : 40K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Auto Line With Embed Bot : 40K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Auto Line Withot embed : 20K <:Credits:979714599492415538> 


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Auto React Bot : 15K <:Credits:979714599492415538>


- <:4323blurpleverifiedbotdeveloper:979712973264289822> Roubux Bot : 400K <:Credits:979714599492415538> 


=======================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968613515873099806/images_4.jpeg")

                        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`botbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
                 interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
       }
         if(interaction.values == "vote") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
     .setTitle(`\`\#\`\ Vote Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Vote Prices

================

**<:vote_ph:979713147780882433> 1 vote : 2k <:Credits:979714599492415538> **

=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968613946653302926/download.jpeg")

                        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`votbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
    
                 interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
         }
           if(interaction.values == "uc") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
         .setTitle(`\`\#\`\ Uc Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Uc Prices
================ Global ================


> <:ucPubg:979497532143067166>  60uc : 20 LE <:VODAFONE:979497507409235968> 


> <:ucPubg:979497532143067166>  180uc : 55 LE <:VODAFONE:979497507409235968> 


> <:ucPubg:979497532143067166>  325uc : 80 LE <:VODAFONE:979497507409235968>


> <:ucPubg:979497532143067166>  660uc : 150 LE <:VODAFONE:979497507409235968>


> <:ucPubg:979497532143067166>  985uc : 225 LE <:VODAFONE:979497507409235968>


> <:ucPubg:979497532143067166>  1800uc : 375 LE <:VODAFONE:979497507409235968>


> <:ucPubg:979497532143067166>  3850uc : 725 LE <:VODAFONE:979497507409235968>   


================ Korean ================


> <:ucPubg:979497532143067166>  190uc : 60 LE <:VODAFONE:979497507409235968> 


> <:ucPubg:979497532143067166>  660uc : 160 LE <:VODAFONE:979497507409235968> 


> <:ucPubg:979497532143067166>  1800uc : 430 LE <:VODAFONE:979497507409235968>


> <:ucPubg:979497532143067166>  3850uc : 840 LE <:VODAFONE:979497507409235968>


> <:ucPubg:979497532143067166>  8000uc : 1660 LE <:VODAFONE:979497507409235968>  


=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968620259592515664/images_5.jpeg")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`ucbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
           }
             if(interaction.values == "boost") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
         .setTitle(`\`\#\`\ Boost Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Boost Prices

================

- <a:5102nitroboost:979497280048615464> 1 Boost 1 Week : 10K <:Credits:979714599492415538>  


- <a:5102nitroboost:979497280048615464> 1 Boost 1 Month : 25K <:Credits:979714599492415538>  


- <a:5102nitroboost:979497280048615464> 1 Boost 3 Month : 35K <:Credits:979714599492415538>  


=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968816001149984778/images_6.jpeg")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`bosbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
               if(interaction.values == "spotify") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
    .setTitle(`\`\#\`\ Spotify Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Spotify Prices

================

> <:Spotify:979498302808674384> Solo 1 Month : 30K  

> <:Spotify:979498302808674384> Duo 1 Month : 40K  

> <:Spotify:979498302808674384> Family 1 Month : 45K  

> <:Spotify:979498302808674384> Solo 3 Month : 60K  

=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968819184979025930/images_1.png")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`spotbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
               if(interaction.values == "shahid") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
    .setTitle(`\`\#\`\ Shahid Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Shahid Prices

=================

- <:shahed_ph:979714273959895061>  Shahid User 1 Month : 80K

=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968820015392514078/images_2.png")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`shabutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
               if(interaction.values == "credit") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
    .setTitle(`\`\#\`\ Credit Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Credit Prices

================

- <:Credits:979714599492415538> 100K : 10 EGP <:VODAFONE:979497507409235968> 

- <:Credits:979714599492415538> 500K : 40 EGP <:VODAFONE:979497507409235968> 

- <:Credits:979714599492415538> 1M : 90 EGP <:VODAFONE:979497507409235968>  

=================

- **__You Can Mention The Seller Click The Button__**
`)
    .setImage("https://media.discordapp.net/attachments/967015425990852648/968820942522429510/images_7.jpeg")

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`crebutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
               if(interaction.values == "tiktok") {
    const botembedembed = new MessageEmbed()
        .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
    .setColor("RANDOM")
    .setTitle(`\`\#\`\ Tiktok Prices In ${interaction.guild.name}`) 
    .setDescription(`Here Is All Tiktok Prices

=================

**__Followers__**

- <:TikTok:979497551327793242> 1K(بدون ضمان) = 600k <a:11Credit:993105485182021632>

- <:TikTok:979497551327793242> 1k(ضمان شهر) = 900k <a:11Credit:993105485182021632>

=================

**__Likes__**

- <:TikTok:979497551327793242> 1k(ضمان شهر) = 300k <a:11Credit:993105485182021632>

=================

**__Views__**

- <:TikTok:979497551327793242> 1k(ضمان وصول) = 5k <a:11Credit:993105485182021632>

=================

- **__You Can Mention The Seller Click The Button__**`)
    .setImage(`https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2021/07/TikTok_Banner-1.jpg`)

   let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`tikbutton`)
        .setLabel("Mention Seller")
        .setEmoji("👮")
        .setStyle('SUCCESS')
      );
                    interaction.reply({content : `<@${interaction.user.id}>`, embeds: [botembedembed] , components: [row]})
        
    }
  }) 
  client.on("interactionCreate" , interaction => {
  if(!interaction.isButton()) return;
          let blacklistdb = db.get(`blacklist_${interaction.user.id}`)
    if(blacklistdb) return interaction.reply({content:`انت من قائمه البلاكلست لا يمكنك استخدام البوت`})
  
  if(interaction.customId == "netbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${netflixrole} ||`})
  }
      if(interaction.customId == "insbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${instarole} ||`})
  }
      if(interaction.customId == "visbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${visarole} ||`})
  }
      if(interaction.customId == "nitbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${nitrorole} ||`})
  }
      if(interaction.customId == "botbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${botrole} ||`})
  }
      if(interaction.customId == "votbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${voterole} ||`})
  }
      if(interaction.customId == "ucbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${ucrole} ||`})
  }
          if(interaction.customId == "bosbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${boostrole} ||`})
  }
          if(interaction.customId == "spotbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${spotifyrole} ||`})
  }
          if(interaction.customId == "shabutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${shahidrole} ||`})
  }
          if(interaction.customId == "crebutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${creditrole} ||`})
  }
          if(interaction.customId == "tikbutton") {
    interaction.reply({ content : `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${tiktokrole} ||`})
  }
})

//
client.login(process.env.token);