const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot działa!'));
app.listen(process.env.PORT || 3000);

console.log("--- URUCHAMIAM BOTA ---");

const bot = mineflayer.createBot({
  host: 'kinkajou.aternos.me',
  port: 25565,
  username: 'BotAktywny',
  version: '1.21.11',
  skipValidation: true
});

console.log("--- POLECENIE CREATEBOT WYKONANE ---");

bot.on('spawn', () => console.log("Bot dołączył do gry!"));
bot.on('login', () => console.log("Bot zalogowany!"));
bot.on('error', (err) => console.log("BŁĄD BOTA:", err));
bot.on('kicked', (reason) => console.log("WYRZUCONO:", reason));
bot.on('end', (reason) => console.log("POŁĄCZENIE ZAKOŃCZONE:", reason));
