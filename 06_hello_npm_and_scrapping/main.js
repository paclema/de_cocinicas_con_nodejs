/*
*
*/

var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.youtube.com/watch?v=4RNwpUf3R5o";

setInterval(getLastNews, 200);

function getLastNews () {
  request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body);
        
        /*
        //nombre y primer voto
        primera_noticia = $("#newswrap .watch-view-count")[0];
        var votos = $(primera_noticia).find(".votes").text().split(" ")[1];
        var nombre = $(primera_noticia).find("h2").text();
*/
       // console.log(nombre + " --> " + votos);

        //nombre y primer voto
        primera_noticia = $("#newswrap .watch-header")[0];
        var votos = $(primera_noticia).find(".watch-view-count").text();
        var nombre = $(primera_noticia).find("h2").text();
        console.log($(primera_noticia).find(".watch-view-count").text());
        
/*
        primera_noticia = $("#newswrap .thing-like")[3];
        var votos = $(primera_noticia).find(".interaction-count").text();
        console.log(votos);
*/

    } else {
      console.log("error: " + error);
    }
  });

}
