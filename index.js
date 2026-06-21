const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot działa!'));
app.listen(process.env.PORT || 3000);

function connect() {
  const bot = mineflayer.createBot({
    host: 'kinkajou.aternos.host',
    port: 22772,
    username: 'BotAktywny',
    version: '1.21.11',
    skipValidation: true
  });

  bot.on('spawn', () => console.log("Bot dołączył do gry!"));
  bot.on('error', (err) => {
    console.log("BŁĄD BOTA:", err);
    setTimeout(connect, 10000); // Czekaj 10 sekund przed ponowną próbą
  });
  bot.on('kicked', (reason) => {
    console.log("WYRZUCONO:", reason);
    setTimeout(connect, 10000);
  });
}

connect();
