import dotenv from "dotenv";
import fs from "fs";
import { Telegraf } from "telegraf";
import { authorize, listEvents } from "./index.js";
import cron from "cron";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", async (ctx) => {
  await ctx.sendMessage(
    `Olá ${ctx.message.chat.first_name}, este é um bot para avisar seus eventos do dia`
  );
  const weeklyJob = new cron.CronJob("0 0 0 * * 0", async function () {
    const result = await authorize().then(listEvents).catch(console.error);
    await ctx.sendMessage(`Seus eventos da semana são:\n${result}`);
  });
  weeklyJob.start();
});

bot.use(async (ctx, next) => {
  let log = ctx.message.text;
  let username = ctx.message.chat.first_name;
  fs.appendFileSync("log.txt", `${username}: ${log}\n`, "utf-8");
  next();
});

bot.launch();
/*bot.on("message", async (ctx) => {
  await ctx.sendMessage(
    `Olá, ${
      ctx.message.chat.first_name
    }. Tudo bem? Agora são ${now.getHours()}:${now.getMinutes()}`
  );
});*/
