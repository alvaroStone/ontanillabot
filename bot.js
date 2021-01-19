const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

// bot.on('message', (msg) => {
//   const name = msg.from.first_name;
//   bot.sendMessage(msg.chat.id, 'Hello, ' + name + '!').then(() => {});  
// });

bot.onText(/^\/start/, function(msg){
  var chatId = msg.chat.id;
  var nameUser = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 
                "<b>Bienvenido al Bot de la Comunidad de Propietarios Ontanilla 2-42 (Madrid)</b> \n" + 
                "<i>¿Qué Quieres Hacer?</i> \n " + 
                "<b>/enlace</b>  :-) proporciono enlace al grupo de información en Telegram \n" + 
                "<b>/padel</b>  :-) ¿Quieres jugar al pádel? Mira los horarios de reserva \n" + 
                "<b>/prioridad</b>  :-) Listado de prioridades de pistas \n"  
                , {parse_mode : "HTML"});
});

bot.onText(/^\/enlace/, function(msg){
  var chatId = msg.chat.id;
  var nameUser = msg.from.first_name;
  bot.sendMessage(msg.chat.id, "<a>https://t.me/joinchat/WFZrNY58GuxhFXHb</a>", {parse_mode : "HTML"});
});

bot.onText(/^\/padel/, function(msg){
  var chatId = msg.chat.id;
  var nameUser = msg.from.first_name;
  bot.sendMessage(msg.chat.id, "<b>Pista Derecha:</b> \n " + 
  "<a>https://calendar.google.com/calendar/embed?src=f69g5r87l43bvjkkctutn2k8l8%40group.calendar.google.com&ctz=Europe%2FMadrid&mode=WEEK</a>" +
  "\n" +
  "<b>Pista Izquierda:</b> \n" +
  "<a>https://calendar.google.com/calendar/u/0/embed?src=0fshvcdgfn6hjmf5mjinv26skk@group.calendar.google.com&ctz=Europe/Madrid&mode=WEEK</a>"
  , {parse_mode : "HTML"});
});

module.exports = bot;
