/**Conociendo la edad de varias personas, indicar la edad promedio. 

Edades de las personas es: 15, 14, 19, 20, 16 y 18

La edad promedio es 17
 * 
 */

import Cl_persona from "./Cl_persona.js";
import Cl_edad from "./Cl_edad.js";

let edad1=new Cl_edad(15);
let edad2=new Cl_edad(14);
let edad3=new Cl_edad(19);
let edad4=new Cl_edad(20);
let edad5=new Cl_edad(16);
let edad6=new Cl_edad(18);

let persona=new Cl_persona();

persona.procesarEdad(edad1);
persona.procesarEdad(edad2);
persona.procesarEdad(edad3);
persona.procesarEdad(edad4);
persona.procesarEdad(edad5);
persona.procesarEdad(edad6);

let salida=document.getElementById("salida");

salida.innerHTML+="<br>  La edad promedio es  " +persona.promEdad();
