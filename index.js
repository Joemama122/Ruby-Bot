const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQyMTI3NTI2ODYwMTYxMDM1.XcYmgw.zLbsoo7iybl3TUjnjzWn72mzzOQ';

const PREFIX = 'r!';

var version = '1.0.1'

bot.on('ready', ()=>{
    console.log('This bot is online!');
    bot.user.setActivity('Ruby is owo', {type: "PLAYING"}).catch(console.error);
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('version'+ version)
            .addField('Current Server', message.guild.name)
            .setColor(0xF1c40F)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Welcome!')
            message.channel.sendEmbed(embed);
            break;




        case 'ping':
            message.channel.sendMessage('pong!');
             break;
        case 'website':
            message.channel.sendMessage('')
            break;
        case 'info':
            if(args[1]){
                message.channel.sendMessage('Version' +version);
            }else{
                message.channel.sendMesssage('Invaild Args')

            }
            break;
            case 'clear':
            if(!args[1]) return message.reply('Error Please Define!')
            message.channel.bulkDelete(args[1]);
            break;

        }
        })


bot.login(token);