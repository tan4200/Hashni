const { Bot } = require('grammy');
const fetch = require('node-fetch');

const bot = new Bot('7206887492:AAGjOqBb4ngdVv4L6vji3HZn-Fi1lZXpfOE');

const api_key = "Rdb0lIHP2xmBb4Axv6GERgih2iwZ8dffS8TQILc8"
bot.command('start', (ctx) => {
  var txt = "🌍 <b>Bot made by https://t.me/SpeedCruze</b> 🚀\n\n<i> Try using commands to explore our cosmic bot!</i>";
  ctx.reply(txt, { parse_mode: "html" });
});


bot.command('today', async (ctx) => {

    const messageText = ctx.message.text;
    const parts = messageText.split(' ');
    const userInput = parts.slice(1).join(' ');
if(userInput && userInput.split("-")[0] < 2000){
  await ctx.reply("The year must be more than 1999");
  return
}
    var url_GA = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
    if (userInput) {
      url_GA += `&date=${userInput}`;
    }

    const response = await fetch(url_GA);
    const data = await response.json();

    let caption = `*Today's Astronomy Picture of the Day*\n\n*Date:* _${data.date}_\n\n*Explanation:* _${data.explanation}_\n\n*Copyright:* _NASA_`;
  if(data.explanation == undefined){ return;}
    // Check if caption exceeds 4096 characters
    if (caption.length > 1020) {
      // Send photo without caption
      await ctx.replyWithPhoto(data.url);
      // Send caption separately
      await ctx.reply(caption, { parse_mode: "Markdown" });
    } else {
      // Send photo with caption
      await ctx.replyWithPhoto(data.url, { caption: caption, parse_mode: "Markdown" });
    }
if(!userInput){
  await ctx.reply("<b>You can also </b> : <code>/today 2024-02-03 </code> [ Year-Month-Day ]",{parse_mode: "html"});

}





})
function randomDate() {
  // Get today's date
  var today = new Date();

  // Set minimum date as January 1st, 1990
  var minDate = new Date(2000, 0, 1);
  var range = today.getTime() - minDate.getTime();

  // Generate a random number within the range
  var randomTime = Math.floor(Math.random() * range);

  // Set the random date by adding the random number of milliseconds to the minimum date
  var randomDate = new Date(minDate.getTime() + randomTime);

  // Format the date to 'YYYY-MM-DD'
  var year = randomDate.getFullYear();
  var month = randomDate.getMonth() + 1; // Month is zero indexed
  var day = randomDate.getDate();

  // Ensure month and day are two digits
  month = (month < 10) ? '0' + month : month;
  day = (day < 10) ? '0' + day : day;

  // Return formatted date string
return year + '-' + month + '-' + day;
}
bot.command('random', async (ctx) =>{
var random_date = randomDate();


    var url_GA = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
    if (random_date) {
      url_GA += `&date=${random_date}`;
    }

    const response = await fetch(url_GA);
    const data = await response.json();

    let caption = `*Today's Astronomy Picture of the Day*\n\n*Date:* _${data.date}_\n\n*Explanation:* _${data.explanation}_\n\n*Copyright:* _NASA_`;

    // Check if caption exceeds 4096 characters
    if (caption.length > 1020) {
      // Send photo without caption
      await ctx.replyWithPhoto(data.url);
      // Send caption separately
      await ctx.reply(caption, { parse_mode: "Markdown" });
    } else {
      // Send photo with caption
      await ctx.replyWithPhoto(data.url, { caption: caption, parse_mode: "Markdown" });
    }


})
/*
bot.command('danger_notifications_re', async (ctx) => {

    // API URL for space notifications
    const apiUrl = 'https://api.nasa.gov/DONKI/notifications?type=all&api_*/
bot.start();
