export default class Cl_persona{
    constructor(){
        this.acumE=0;
        this.cantP=0;
    }

    procesarEdad(ed){
        this.acumE+=ed.getEdad();
        this.cantP++;
    }

    promEdad(){
        return this.acumE/this.cantP;
    }
}