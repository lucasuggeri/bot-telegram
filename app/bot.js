import dotenv from "dotenv";
import { Telegraf } from "telegraf";
import { authorize, listEvents } from "../index.js";
import cron from "cron";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const userStates = {};

bot.command("start", async (ctx) => {
  ctx.sendMessage(
    `Olá, ${ctx.message.chat.first_name}, este é um bot para lhe avisar seus eventos da semana. Para poder usá-lo, você deverá acessar a documentação e seguir o passo a passo. Link da documentação: `
  );
});

bot.command("events", async (ctx) => {
  const userId = ctx.message.from.id;
  if (userStates[userId]) {
    const message = await ctx.sendMessage("Você já usou o comando antes");
    return message;
  }
  userStates[userId] = true;
  await ctx.sendMessage(
    `A partir de agora, você será avisado dos seus eventos da semana todo domingo às 10 horas`
  );
  const weeklyJob = new cron.CronJob("0 0 10 * * 0", async () => {
    const result = await authorize().then(listEvents).catch(console.error);
    await ctx.sendMessage(`Seus eventos da semana são:\n${result}`);
  });
  weeklyJob.start();
});

bot.launch();
