import dotenv from "dotenv";
import { Telegraf } from "telegraf";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("ping", (ctx) => {
  ctx.sendMessage("pong");
});

bot.launch().then(() => {
  console.log("Bot Started!");
});
