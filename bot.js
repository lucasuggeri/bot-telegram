import dotenv from "dotenv";
import fs from "fs";
import { Telegraf } from "telegraf";
import path from "path";

dotenv.config();

//const now = new Date();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", async (ctx) => {
  await ctx.sendMessage(
    `Olá ${ctx.message.chat.first_name}, digite "/commands" para ver as opções do chat`
  );
});

bot.use(async (ctx, next) => {
  let log = ctx.message.text;
  let username = ctx.message.chat.first_name;
  fs.appendFileSync("log.txt", `${username}: ${log}\n`, "utf-8");
  next();
});
bot.on("message", async (ctx) => {
  await ctx.reply("oi");
});

bot.launch();
/*bot.on("message", async (ctx) => {
  await ctx.sendMessage(
    `Olá, ${
      ctx.message.chat.first_name
    }. Tudo bem? Agora são ${now.getHours()}:${now.getMinutes()}`
  );
});*/
