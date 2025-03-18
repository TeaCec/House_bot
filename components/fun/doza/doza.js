const fs = require("fs");
const path = require("path");

module.exports = (bot) => {
    bot.onText(/\Доза/, (msg) => {
        const gif = path.join(__dirname, 'doza.mp4')
        bot.sendAnimation(msg.chat.id, gif)
    })
}