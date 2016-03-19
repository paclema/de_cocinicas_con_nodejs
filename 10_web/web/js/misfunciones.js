$( document ).ready(function() {
    console.log( "ready!" );

    //startCounter();
    //leerTexto();


    $("#mybtn").click(leerTexto);
    $("#pic").click(ocultarTexto);
});


function startCounter() {
  var count = 0;

  setInterval(function() {
    $("#counter").text(count++);
  }, 1000);

}


function leerTexto() {
  fs = require('fs')
  fs.readFile('comida.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var newData = data.split('\n'); //.join(" que rico,");

    //$("#comida").text(newData);

    for(i in newData) {
      $("#comida").append("<li>"+ newData[i] +"</li>");
    }
  });
}

function ocultarTexto() {
	 $("#comida").hide();
	 $("body").toggleClass("cambioBG");
}


function drawCanvas(){
  var canvas = $('#mycanvas')[0];

  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgb(200,0,0)";
  //x, y, z, w, h
  cxt.fillRect(10, 10, 15, 50);

}