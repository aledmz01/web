//crear funcion q imprima los dias d la week
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado", "Domingo"];
function semanita ()
{

for (let index = 0; index < dias.length; index++) {
   document.write(dias[index],"<br>");
}
}//llamando la funcion
//semanita();



//-----------------------------------------------------------
//crear funcion q imprima 10 veces una frase
let texto = "un dos tres";
var k=1;// inicializando

function frase()//comprobando
{
while(k<=10)
{ 
document.write(texto,"<br>");
k++; //actualizar
}//fin while
}

//-----------------------------------------------------------
/*crear una funcion q imprima los valores 
(los valores d 10000 hasta 100000, en rangos de 1000)*/

var inicio=10000;
var fin=100000;

function serie()
{
    for (let index = inicio; index<=fin; index=index+1000) {
      
        document.write(index,"  ----  ");
    }
}

//-----------------------------------------------------------
//sentido inverso

var inicio=10000;
var fin=100000;

function serie2()
{
    for (let index = fin; index>=inicio; index=index-1000) {
      
        document.write(index,"  ----  ");
    }
}