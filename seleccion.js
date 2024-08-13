
    //declaranddo variables
let servicio, forma, costo, frecuente;

 //costoo = costo*0.10;
//captura de datos 
alert("servicios disponibles: \n");
    servicio=parseInt(prompt("Ingrese: \n 1 para alisado \n 2 para uñas \n 3 para tintes \n 4 para depilacion con cera \n 5 para cortes"));
    while(servicio<1 || servicio>5)
    {
        servicio=parseInt(prompt("Ingrese: \n 1 para alisado \n 2 para uñas \n 3 para tintes \n 4 para depilacion con cera \n 5 para cortes"));    
    }

    // Se captura l d forma
    forma=parseInt(prompt("Ingrese la forma de pago: \n 1 - Credito \n 2 - Efectivo"));
    while(forma<1 || forma>2)
        {
            forma=parseInt(prompt("Ingrese la forma de pago \n 1 - Credito \n 2 - Efectivo"));   
        }

        // posee tarjeta d cliente frecuente?
        frecuente=parseInt(prompt("Posee tarjeta d cliente frecuente?: \n 1 - Si \n 2 - No"));
    while(frecuente<1 || frecuente>2)
        {
            frecuente=parseInt(prompt("Posee tarjeta d cliente frecuente?: \n 1 - Si \n 2 - No"));   
        }

        //procesos
        switch(servicio)
        {
            case 1: 
            {
                costo=50;
                break;
            }

            case 2: 
            {
                costo=25;
                break;
            }

            case 3: 
            {
                costo=35;
                break;
            }

            case 4: 
            {
                costo=25;
                break;
            }

            default: 
            {
                costo=25;
                break;
            }


        }// fin scwitch
    
        // impresion
//FORMA 1------------------------------------------------
if (forma==1 && servicio ==1 &&  frecuente==2)
{
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha canccelado con la tarjeta de credito<br>")
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, el cual equivale a: " + (costo*0.10)+" dolares<br>");
    document.write("El pago total sera de $ "+(costo*1.10));
}
else if(forma==1 && servicio==2 &&  frecuente==2)
{
    document.write("Usted se hizo un uñas<br>");
    document.write("Usted ha canccelado con la tarjeta de credito<br>")
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, el cual equivale a: " + (costo*0.10)+" dolares<br>");
    document.write("El pago total sera de $ "+(costo*1.10));
}

else if(forma==1 && servicio==3 &&  frecuente==2)
{
    document.write("Usted se hizo un tintes<br>");
    document.write("Usted ha canccelado con la tarjeta de credito<br>")
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, el cual equivale a: " + (costo*0.10)+" dolares<br>");
    document.write("El pago total sera de $ "+(costo*1.10));
}

else if(forma==1 && servicio==4 &&  frecuente==2)
{
    document.write("Usted se hizo un depilacion con cera<br>");
    document.write("Usted ha cancelado con la tarjeta de credito<br>")
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, el cual equivale a: " + (costo*0.10)+" dolares<br>");
    document.write("El pago total sera de $ "+(costo*1.10));
}

else if(forma==1 && servicio==5 &&  frecuente==2)
{
    document.write("Usted se hizo un cortes<br>");
    document.write("Usted ha cancelado con la tarjeta de credito<br>")
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, el cual equivale a: " + (costo*0.10)+" dolares<br>");
    document.write("El pago total sera de $ "+(costo*1.10));
}

// FORMA 1.1-----------------------------
let recargo = costo * 0.10;
let costoConRecargo = costo + recargo;
let descuento = 0.25;
let descuentoYa = costoConRecargo * descuento;

if (forma==1 && servicio ==1 && frecuente==1)
{  
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha canccelado con la tarjeta de credito<br>");
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, saliendo un total de: " + costoConRecargo +" dolares<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa + " dólares<br>");
    document.write("El pago total sera de $ "+ (costoConRecargo - descuentoYa));
}
else if(forma==1 && servicio==2 && frecuente==1)
{
    document.write("Usted se hizo un uñas<br>");
    document.write("Usted ha canccelado con la tarjeta de credito<br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, saliendo un total de: " + costoConRecargo+" dolares<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa.toFixed(2) + " dólares<br>");
    document.write("El pago total sera de $ "+ (costoConRecargo - descuentoYa));
}
else if(forma==1 && servicio==3 && frecuente==1)
{
    document.write("Usted se hizo un tintes<br>");
    document.write("Usted ha canccelado con la tarjeta de credito<br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, saliendo un total de: " + costoConRecargo+" dolares<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa.toFixed(2) + " dólares<br>");
    document.write("El pago total sera de $ "+ (costoConRecargo - descuentoYa));
}

else if(forma==1 && servicio==4 && frecuente==1)
{
    document.write("Usted se hizo un depilacion con cera<br>");
    document.write("Usted ha canccelado con la tarjeta de credito<br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, saliendo un total de: " + costoConRecargo+" dolares<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa.toFixed(2) + " dólares<br>");
    document.write("El pago total sera de $ "+ (costoConRecargo - descuentoYa));
}

else if(forma==1 && servicio==5 && frecuente==1)
{
    document.write("Usted se hizo un cortes<br>");
    document.write("Usted ha canccelado con la tarjeta de credito<br>");
    document.write("El costo inicial del servicio es de "+costo+"<br>");
    document.write("Se le hara un recargo del 10%, saliendo un total de: " + costoConRecargo+" dolares<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa.toFixed(2) + " dólares<br>");
    document.write("El pago total sera de $ "+ (costoConRecargo - descuentoYa));
}

// FORMA 2-------------------------------------
if (forma==2 && servicio ==1  && frecuente==2)
{
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con Efectivo<br>")
    document.write("El pago total sera de $ "+(costo)); 
}
else if(forma==2 && servicio ==2 && frecuente==2)
{
    document.write("Usted se hizo un uñas<br>");
    document.write("Usted ha cancelado con Efectivo<br>")
    document.write("El pago total sera de $ "+(costo));   
}
else if(forma==2 && servicio ==3 && frecuente==2 )
{
    document.write("Usted se hizo un tintes<br>");
    document.write("Usted ha cancelado con Efectivo<br>")
    document.write("El pago total sera de $ "+(costo));   
}
else if(forma==2 && servicio ==4 && frecuente==2)
{
    document.write("Usted se hizo un depilacion con cera<br>");
    document.write("Usted ha cancelado con Efectivo<br>")
    document.write("El pago total sera de $ "+(costo));   
}
else if(forma==2 && servicio ==5 && frecuente==2)
{
    document.write("Usted se hizo un cortes<br>");
    document.write("Usted ha cancelado con Efectivo<br>")
    document.write("El pago total sera de $ "+(costo));   
}

// FORMA 2.2-------------------------------------

if (forma==2 && servicio ==1 && frecuente==1)
{  
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con Efectivo<br>");
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a:  " +  descuentoYa + " dólares<br>");
    document.write("El pago total sera de "+ (costoConRecargo - descuentoYa));
}
else if(forma==2 && servicio==2 && frecuente==1)
{
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con Efectivo<br>");
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa + " dólares<br>");
    document.write("El pago total sera de "+ (costoConRecargo - descuentoYa));
}
else if(forma==2 && servicio==3 && frecuente==1)
{
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con Efectivo<br>");
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa + " dólares<br>");
    document.write("El pago total sera de "+ (costoConRecargo - descuentoYa));
}

else if(forma==2 && servicio==4 && frecuente==1)
{
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con Efectivo<br>");
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa + " dólares<br>");
    document.write("El pago total sera de "+ (costoConRecargo - descuentoYa));
}

else if(forma==2 && servicio==5 && frecuente==1)
{
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con Efectivo<br>");
    document.write("El costo inicial del servicio es de $ "+costo+"<br>");
    document.write("Usted es cliente frecuente! por lo tanto tendra un descuento del 25%, el cual equivale a: " +  descuentoYa + " dólares<br>");
    document.write("El pago total sera de "+ (costoConRecargo - descuentoYa));
}