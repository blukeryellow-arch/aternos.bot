const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot działa!'));
app.listen(process.env.PORT || 3000);

console.log("--- BOT SIĘ URUCHAMIA ---");

const bot = mineflayer.createBot({
  host: 'KakaszkavivalSMP.aternos.me',
  port: 25565,
  username: 'BotAktywny',
  version: false,
  skipValidation: true
});

console.log("--- PRÓBA POŁĄCZENIA Z SERWEREM ---");

bot.on('spawn', () => console.log("Bot dołączył do gry!"));
bot.on('error', (err) => console.log("BŁĄD BOTA:", err)); // TO POKAŻE CO JEST NIE TAK
bot.on('kicked', (reason) => console.log("WYRZUCONO Z SERWERA:", reason));
bot.on('end', (reason) => console.log("POŁĄCZENIE ZAKOŃCZONE:", reason));
