let nombreEmpleado = [];
let salarioInicial = [];
let MontoISSS = [];
let MontoAFP = [];
let calculoRENTA = [];
let salarioFinal = [];

// Pedir los nombres de los empleados
for (let i = 0; i < 4; i++) {
    let IngresoEmpleado = prompt("Ingrese el nombre del empleado " + (i + 1) + ":");
    nombreEmpleado[i] = IngresoEmpleado;

    // INGRESAR SALARIO
    let salario = parseFloat(prompt("Ingrese el salario del empleado " + (i + 1) + " (entre 257 y 3000): "));
    while (salario < 257 || salario > 3000) {
        alert("El salario debe estar entre 257 y 3000.");
        salario = parseFloat(prompt("Ingrese el salario del empleado " + (i + 1) + " (entre 257 y 3000): "));
    }
    salarioInicial[i] = salario;

    // CALCULAR ISSS, AFP Y RENTA
    let isss = salario * 0.03;
    let afp = salario * 0.0625;
    let nuevoSalario = salario - isss - afp;
    let renta = 0;

    if (nuevoSalario <= 472) {
        renta = 0;
    } else if (nuevoSalario <= 895.24) {
        renta = (nuevoSalario - 472) * 0.1 + 17.67;
    } else if (nuevoSalario <= 2038.10) {
        renta = (nuevoSalario - 895.24) * 0.2 + 60.00;
    } else {
        renta = (nuevoSalario - 2038.10) * 0.3 + 288.57;
    }

    MontoISSS[i] = isss;
    MontoAFP[i] = afp;
    calculoRENTA[i] = renta;
    salarioFinal[i] = nuevoSalario - renta;
}

// IMPRIMIR RESULTADOS
function totalesImprimir() {
    let totalSalario = 0;
    let totalNuevoSalario = 0;
    let totalISSS = 0;
    let totalAFP = 0;
    let totalRenta = 0;
    let totalSalarioFinal = 0;

    for (let i = 0; i < salarioInicial.length; i++) {
        totalSalario += salarioInicial[i] || 0;
        totalNuevoSalario += (salarioInicial[i] - MontoISSS[i] - MontoAFP[i]) || 0;
        totalISSS += MontoISSS[i] || 0;
        totalAFP += MontoAFP[i] || 0;
        totalRenta += calculoRENTA[i] || 0;
        totalSalarioFinal += salarioFinal[i] || 0;
    }

    document.write("<h3> Impresión Total de los vectores:</h3>");
    document.write("Salario inicial total: $" + totalSalario.toFixed(2) + "<br>");
    document.write("Nuevo salario Total: $" + totalNuevoSalario.toFixed(2) + "<br>");
    document.write("ISSS total: $" + totalISSS.toFixed(2) + "<br>");
    document.write("AFP total: $" + totalAFP.toFixed(2) + "<br>");
    document.write("Renta total: $" + totalRenta.toFixed(2) + "<br>");
    document.write("Salario final total: $" + totalSalarioFinal.toFixed(2) + "<br>");
}

// IMPRIMIR VECTORES
function vectoresImprimir() {
    document.write("<h3> Impresión de vectores:</h3>");
    document.write("<table border='1' style='border-collapse: collapse; width: 100%; text-align: left;'>");

    document.write("<tr>");
    document.write("<th>Nombre empleado</th>");
    document.write("<th>Salario</th>");
    document.write("<th>ISSS</th>");
    document.write("<th>AFP</th>");
    document.write("<th>Renta</th>");
    document.write("<th>Salario Final</th>");
    document.write("</tr>");

    for (let i = 0; i < nombreEmpleado.length; i++) {
        document.write("<tr>");
        document.write("<td>" + nombreEmpleado[i] + "</td>");
        document.write("<td>$" + salarioInicial[i].toFixed(2) + "</td>");
        document.write("<td>$" + MontoISSS[i].toFixed(2) + "</td>");
        document.write("<td>$" + MontoAFP[i].toFixed(2) + "</td>");
        document.write("<td>$" + calculoRENTA[i].toFixed(2) + "</td>");
        document.write("<td>$" + salarioFinal[i].toFixed(2) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

// MENU
function menuVer() {
    let opcion = prompt("Seleccione una opción:\n1. Imprimir los vectores\n2. Totales de los vectores");

    if (opcion == '1') {
        vectoresImprimir();
    } else if (opcion == '2') {
        totalesImprimir();
    } else {
        document.write("Opción inválida. Intente de nuevo.<br>");
        menuVer();
    }
}

// Ejecutar menu
menuVer();


