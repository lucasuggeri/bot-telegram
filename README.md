## Bot de Telegram para eventos do Google Calendar

 Objetivo do projeto: bot de Telegram para avisar os eventos da semana a partir do calendário do Google, com objetivo de portfólio. 


## 📝Índice 

-   [Sobre](#about)
-   [Como usar] (#usage)
-   [Built Using](#built_using)
-   [Autor](#autor)

## 🧐Sobre <a name = "about"></a>
Um bot de Telegram utilizando a API do Google Calendar para acessar dados na agenda e enviá-los para o usuário uma vez por semana nos domingos.

## 🎈Como usar <a name="usage"></a>
### Pré-requisitos
 - Yarn instalado na máquina que irá rodar o projeto
 - .env
 - Conta na Google Cloud
 - Conta no Telegram
### Instalação
Iniciar instalação de pacotes necessários com yarn:
```
yarn
```
 Criar arquivo .env para configurar as variáveis de ambiente 
 ### No Telegram:
 Criar o bot no Telegram a partir do BotFather e obter o token para utilizar no .env e criar o comando Events
  ### No Google Cloud:
  Você deve criar seu projeto no Google Cloud e ativar a Google Calendar API, em seguida, clique em "Credenciais" e crie uma credencial "ID do Cliente OAuth".
  Selecione o tipo de aplicativo como "app para computador" e escolha um nome.
  Baixe o arquivo json que estará disponível e adicione à pasta do bot com o nome "credentials.json".
  ### Na pasta do bot:
  Configure seu arquivo .env e execute o comando 
  ```
node index.js
```
Se tudo ocorreu bem, você será redirecionado para uma tela de login do Google, onde irá conectar o email com os eventos que serão notificados.
Após isso, execute o comando ``Yarn dev``, mande ``/start`` e após, ``/events`` para o bot.
## ⛏️Built using <a name = "built_using"></a>
 - [Node.js](https://nodejs.org/en/) - Server Environment
 - [Telegraf.js](https://telegraf.js.org/index.html) - Telegram Bot API framework for Node.js
 - [Google Calendar API](https://developers.google.com/calendar/api/guides/overview?hl=pt-br) - RESTful API 

## ✍️Autor <a name = "autor"></a>

- [@lucasuggeri](https://github.com/lucasuggeri) -  Desenvolvimento e documentação

