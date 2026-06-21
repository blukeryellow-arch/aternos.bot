const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot działa!'));
app.listen(process.env.PORT || 3000);

console.log("--- URUCHAMIAM BOTA ---");

const bot = mineflayer.createBot({
  host: 'KakaszkavivalSMP.aternos.me', // Sama domena, bez portu na końcu
  port: 22772,                   // Port podajemy tutaj, oddzielnie
  username: 'BotAktywny',
  version: '1.21.11',
  skipValidation: true
});

bot.on('spawn', () => console.log("Bot jest w grze!"));
bot.on('error', (err) => console.log("BŁĄD:", err));
bot.on('kicked', (reason) => console.log("WYRZUCONO:", reason));
