const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

console.log("--- BOT SIĘ URUCHAMIA ---"); // Dodaj to!

app.get('/', (req, res) => res.send('Bot działa!'));
app.listen(process.env.PORT || 3000);

const bot = mineflayer.createBot({
  host: 'KakaszkavivalSMP.aternos.me',
  port: 25565,
  username: 'BotAktywny',
  version: false,
  skipValidation: true
});

console.log("--- PRÓBA POŁĄCZENIA Z SERWEREM ---"); // Dodaj to!
// Zabezpieczenie przed AFK
setInterval(() => {
  bot.look(bot.entity.yaw + 1, 0);
  console.log("Bot wykonał ruch.");
}, 300000); // co 5 minut

bot.on('spawn', () => console.log("Bot dołączył do gry!"));
bot.on('error', (err) => console.log("Błąd:", err));
bot.on('kicked', (reason) => console.log("Wyrzucono:", reason));
