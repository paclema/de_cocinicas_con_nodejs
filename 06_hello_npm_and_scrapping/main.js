/*
*
*/

var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.meneame.net";

setInterval(getLastNews, 200);

function getLastNews () {
  request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body),
        /*
        //nombre y primer voto
        primera_noticia = $("#newswrap .news-summary")[0];
        var votos = $(primera_noticia).find(".votes").text().split(" ")[1];
        var nombre = $(primera_noticia).find("h2").text();

        console.log(nombre + " --> " + votos);
        */

        primera_noticia = $("#newswrap .interaction-count")[3];
        var votos = $(primera_noticia).text()
        console.log(votos);


    } else {
      console.log("error: " + error);
    }
  });

}
