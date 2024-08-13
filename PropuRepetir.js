
//var x=0;
var bitcoin = 57810; 
var eth = 3062; 

var dolares=0;

 dolares = parseFloat(prompt("Ingrese una cantidad en dólares (entre 1000 y 100000):"));


while ( dolares < 1000 || dolares > 100000) {
    dolares = parseFloat(prompt("Ingrese una cantidad en dólares (entre 1000 y 100000):"));
}

document.write("_________________________________________________________________________________________________________<br><br>");
document.write("   DOLARES  ----------------------------------------------------  BTC  -----------------------------------------------------------------  ETH <br>");
document.write("_________________________________________________________________________________________________________<br><br>");

//el bucle va continr mientra...
//for (var x = 1000; x <= dolares; x += 1) {
  //  var Cbitcoin = x / bitcoin;
  //  var Ceth = x / eth;
   // document.write(x + "   ---------------------------------------------   " + Cbitcoin.toFixed(4) + "   ---------------------------------------------   " + Ceth.toFixed(4) + "<br>");
   // document.write("<br>");
  //  document.write("<br>");
//}

var j=1000;

var Cbitcoin = j / bitcoin;
var Ceth = j / eth;


while(j<=dolares){
    document.write(j  + "  ----------------------------------------------------  "  +Cbitcoin +  "   ---------------------------------------------------- " +Ceth + "<br>" );
    document.write("<br>");
    document.write("<br>");
    j++
}


document.write("_________________________________________________________________________________________________________<br>");
