const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "users.json");

// Загружаем старых пользователей (если файл уже есть)
let users = [];
if (fs.existsSync(usersFile)) {
    users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
}

module.exports = (bot) => {
    bot.on("message", (msg) => {
        if (msg.text.startsWith("/")) return; // Игнорируем команды
        if (msg.chat.type !== 'group') return; // Игнорируем соо вне чата
        // Проверяем есть ли пользователь в системе
        const userIndex = users.findIndex(m => m.userId === msg.from.id);

        if (userIndex >= 0) {
            users[userIndex].msgCount++
            users[userIndex].msgText.push(msg.text)
            fs.writeFileSync(usersFile, JSON.stringify(users, null, 4));
            return; // Выходим из функции, чтобы не сохранять повторно пользователя
        }

        // Создаём объект пользователя
        const newUser = {
            username: msg.from.username || undefined, // Имя пользователя
            userId: msg.from.id, // ID пользователя
            groupId: msg.chat.id, //ID чата
            msgCount: 1, // количество сообщений от пользователя
            msgText: [] // создаем массив с соо юзеров
        };

        newUser.msgText.push(msg.text)

        users.push(newUser);// Добавляем пользователя в массив

        // Сохраняем в файл
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 4));

        bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}!`);
    });
};
