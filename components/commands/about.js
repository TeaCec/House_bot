module.exports = (bot) => {
    bot.onText(/\about/, (msg) => {
        bot.sendMessage(msg.chat.id, 
            `Я бот для помощи влд различых хаусов, написанный на Node.js!
            \nМоим создателем является @TeaCec, все вопросы к нему
            \nТакже у нас есть свой канал с новостями по поводу бота! (<a href="https://t.me/+yEB0TyjOHvBhNGMy">туть</a>)`, 
            {parse_mode: 'HTML'}
        )
    });
}