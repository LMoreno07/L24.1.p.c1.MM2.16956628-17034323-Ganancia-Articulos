export default class Cl_tienda{
    constructor(){
        this.acumP=0;
        this.cantP=0;
        this.cantP65=0;
    }

    procesarDato(dat){
        this.acumP+=dat.getPrecio();
        this.cantP++;
        if(dat.getPrecio()>65){
            this.cantP65++;
        }
    }

    devCantPS(){
        return this.cantP65;
    }

    promPrecio(){
        return this.acumP/this.cantP;
    }
}