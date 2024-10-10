/**6. GANANCIA ARTÍCULOS
Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine el promedio de los precios de venta y cantidad de
artículos con precio superior a 65$
El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)
Promedio de los precios de venta: 41.25
Cantidad de artículos con precio superior a 65$:2
 * 
 */

import Cl_tienda from "./Cl_tienda.js";
import Cl_dato from "./Cl_dato.js";

let dato1=new Cl_dato(888,10,15);
let dato2=new Cl_dato(777,20,25);
let dato3=new Cl_dato(999,15,25);
let dato4=new Cl_dato(666,25,35);
let dato5=new Cl_dato(111,50,70);
let dato6=new Cl_dato(333,40,50);
let dato7=new Cl_dato(444,80,100);
let dato8=new Cl_dato(222,5,10);

let tienda=new Cl_tienda();

tienda.procesarDato(dato1);
tienda.procesarDato(dato2);
tienda.procesarDato(dato3);
tienda.procesarDato(dato4);
tienda.procesarDato(dato5);
tienda.procesarDato(dato6);
tienda.procesarDato(dato7);
tienda.procesarDato(dato8);


let salida=document.getElementById("salida");

salida.innerHTML+="<br>  Promedio de  los precios de venta: " +tienda.promPrecio();
salida.innerHTML+="<br>  Cantidad de artículos con precio superior a 65$: " +tienda.devCantPS();
