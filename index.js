const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot działa!'));
app.listen(process.env.PORT || 3000);

console.log("--- BOT SIĘ URUCHAMIA ---");

const bot = mineflayer.createBot({
  host: '185.107.193.195', // Zmień na to IP
  port: 22772,
  username: 'BotAktywny',
  version: 1.21.11,
  skipValidation: true
});

console.log("--- PRÓBA POŁĄCZENIA Z SERWEREM ---");
const dns = require('dns');
dns.lookup('KakaszkavivalSMP.aternos.me', (err, address) => {
  if (err) console.log("BŁĄD DNS (nie można znaleźć serwera):", err);
  else console.log("IP serwera znalezione:", address);
});

bot.on('spawn', () => console.log("Bot dołączył do gry!"));
bot.on('error', (err) => console.log("BŁĄD BOTA:", err)); // TO POKAŻE CO JEST NIE TAK
bot.on('kicked', (reason) => console.log("WYRZUCONO Z SERWERA:", reason));
bot.on('end', (reason) => console.log("POŁĄCZENIE ZAKOŃCZONE:", reason));
