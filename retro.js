function mostrarPlanilla() {
    var si, i, d, sf, n, numberEmple, descuentoUni, totalSalarios = 0, totalDescuento1 = 0, totalDescuentoUni = 0;
    var numberGerentes = 0, numberEmpleNormales = 0;

    // number d empleados
    numberEmple = prompt('Ingresa el número total de empleados:');
    numberEmple = parseInt(numberEmple);

    document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
    document.write('<table border="1">');
    document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Salario inicial</td><td>Descuento 1</td><td>Descuento Uniforme</td><td>Salario final</td><td>Gerente</td></tr>'); // Agregado 'Gerente'

    for (i = 1; i <= numberEmple; i++) {
        n = prompt('Digite el nombre del obrero número ' + i + '');
        
        // c pide & c valida el salario inicial
        while (true) {
            si = parseFloat(prompt('Digite el salario inicial del empleado (356 en adelante):', ''));
            if (si >= 356) {
                break;
            }

            alert('Salario invalid. Debe ser un número mayor o igual a 356.');
        }
        
        d = si * 0.05;
        sf = si - d;

        // el empleado es gerente?
        var esGerente = confirm('¿El empleado ' + n + ' es gerente?');
        descuentoUni = esGerente ? 50 : 25;
        //condición ? si valor es verdadero : si valor falso;

        // descuento uni
        sf -= descuentoUni;

        // los q acumulan
        totalSalarios += si;
        totalDescuento1 += d;
        totalDescuentoUni += descuentoUni;

        if (esGerente) {
            numberGerentes++;
        } else {
            numberEmpleNormales++;
        }

        // ya esta 
        document.write('<tr><td>' + i + '</td><td>' + n + '</td><td>$' + si.toFixed(2) + '</td><td>$' + d.toFixed(2) + '</td><td>$' + descuentoUni.toFixed(2) + '</td><td>$' + sf.toFixed(2) + '</td><td>' + (esGerente ? 'Sí' : 'No') + '</td></tr>');
    }

    document.write('</table><br>');
    document.write('Total pagado en concepto de salarios: $' + totalSalarios.toFixed(2) + '<br>');
    document.write('Total en concepto de descuento 1: $' + totalDescuento1.toFixed(2) + '<br>');
    document.write('Total en concepto de descuentos por uniforme: $' + totalDescuentoUni.toFixed(2) + '<br>');
    document.write('Cantidad de gerentes en la empresa: ' + numberGerentes + '<br>');
    document.write('Cantidad de otro tipo de empleados: ' + numberEmpleNormales + '<br>');
}

// mostrarPlanilla();

