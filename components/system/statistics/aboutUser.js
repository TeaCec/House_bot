module.exports = (bot) => {
    const fs = require("fs");
    const path = require("path");

    const usersFile = path.join(__dirname, "users.json");

    bot.onText(/\кто я/, (msg) => {
        const chatId = msg.chat.id;

        // Загружаем актуальные данные из файла при каждом вызове
        if (!fs.existsSync(usersFile)) {
            return;
        }

        let users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
        

        const index = users.findIndex(m => m.userId === msg.from.id) // Получаем индекс юзера
        bot.sendMessage(chatId, 
            `Вы ${msg.from.first_name}.\nВы написали ${users[index].msgCount} сообщений` // Выводим информацию про юзера
        )
    });
};
