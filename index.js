require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// Команда /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}! Я твой бот.`);
});

// Команда /help
bot.onText(/\help/, (msg) => {
    bot.sendMessage(msg.chat.id, `Список команд:
        \n/start - запустить бота
        \n/help - список команд
        \n/about - информация про бота`);
});

// Команда /about
bot.onText(/\about/, (msg) => {
    bot.sendMessage(msg.chat.id, 
        `Я тестовый бот, написанный на Node.js!
        \nМоим создателем является @TeaCec, все вопросы к нему
        \nТакже у нас есть свой канал с новостями по поводу бота! (<a href="https://t.me/+yEB0TyjOHvBhNGMy">туть</a>)`, 
        {parse_mode: 'HTML'}
    )
});