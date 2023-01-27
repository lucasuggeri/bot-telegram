import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("ping", async (ctx) => {
  await ctx.telegram.sendMessage(ctx.message.chat.id, "pong");
});

bot.launch();
