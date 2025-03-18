module.exports = (bot) => {
    bot.onText(/\/help/, (msg) => {
        bot.sendMessage(msg.chat.id, 
            `Список команд:
        \n/start - запустить бота\n/help - список команд\n/about - информация про бота`);
    });
}