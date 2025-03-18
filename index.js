require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

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