require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands([
    {command: '/start', description: 'Включить бота'},
    {command: '/help', description: 'Список команд'},
    {command: '/about', description: 'Информация про бота'}
])

const startCommand = require('./components/commands/start')
const aboutCommand = require('./components/commands/about')
const helpCommand = require('./components/commands/help')
const dozaFun = require('./components/fun/doza/doza')
const statistics = require('./components/system/statistics/userActivity');
const aboutUser = require('./components/system/statistics/aboutUser');

startCommand(bot);
aboutCommand(bot);
helpCommand(bot);
dozaFun(bot);
statistics(bot);
aboutUser(bot);