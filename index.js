const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// Serwer HTTP, żeby Render nie uśpił bota
app.get('/', (req, res) => res.send('Bot działa!'));
app.listen(process.env.PORT || 3000);

const bot = mineflayer.createBot({
  host: 'KakaszkavivalSMP.aternos.me',
  port: 25565,
  username: 'BotAktywny',
  version: '1.21.11', // Wpisz wersję serwera
  auth: 'offline'    // <--- DODAJ TO! To pozwala botowi wbić na serwery "Cracked"
});

// Zabezpieczenie przed AFK
setInterval(() => {
  bot.look(bot.entity.yaw + 1, 0);
  console.log("Bot wykonał ruch.");
}, 300000); // co 5 minut

bot.on('spawn', () => console.log("Bot dołączył do gry!"));
bot.on('error', (err) => console.log("Błąd:", err));
bot.on('kicked', (reason) => console.log("Wyrzucono:", reason));
