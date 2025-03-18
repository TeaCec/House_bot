module.exports = (bot) => {
    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}! Я твой бот.`);
    });
}