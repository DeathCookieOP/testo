const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()
    let infoEmbed = new Discord.RichEmbed()
    .setTitle("Command: /8ball")
    .setColor("#999999")
    .setDescription("**Description:** Asks the 8ball a question!\n**Usage:** /8ball [question]\n**Examples:**\n  /8ball is DeathCookieOP h0t");

    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
        var rnd = randomIntInc(1, 5);
        if (rnd === 1) {
            const embed1 = new Discord.RichEmbed()
                .setDescription(':8ball: 8ball')
                .setColor('RANDOM')
                .addField(args.join(" "), 'No')
            message.channel.send(embed1).then(msg => msg.delete(10000));
        } else if (rnd === 2) {
            const embed2 = new Discord.RichEmbed()
                .setDescription(':8ball: 8ball')
                .setColor('RANDOM')
                .addField(args.join(" "), 'Not Probably')
            message.channel.send(embed2).then(msg => msg.delete(10000));
        } else if (rnd === 3) {
            const embed3 = new Discord.RichEmbed()
                .setDescription(':8ball: 8ball')
                .setColor('RANDOM')
                .addField(args.join(" "), 'Maybe')
            message.channel.send(embed3).then(msg => msg.delete(10000));
        } else if (rnd === 4) {
            const embed3 = new Discord.RichEmbed()
                .setDescription(':8ball: 8ball')
                .setColor('RANDOM')
                .addField(args.join(" "), 'Probably')
            message.channel.send(embed3).then(msg => msg.delete(10000));
        } else if (rnd === 5) {
            const embed3 = new Discord.RichEmbed()
                .setDescription(':8ball: 8ball')
                .setColor('RANDOM')
                .addField(args.join(" "), 'Yes')
            message.channel.send(embed3).then(msg => msg.delete(10000));
        }
    
    }
    exports.help = {
        name: '8ball'
    };