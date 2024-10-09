export default class Cl_dato{
    constructor(codigo,costo,precio){
      this._codigo=codigo;  
      this._costo=costo;
      this._precio=precio;
     }

     setCodigo(c){
      this._codigo=+c;
   }

     getCodigo(){
      return this._codigo;
   }

     setCosto(co){
        this._costo=+co;
     }

     getCosto(){
        return this._costo;
     }
     setPrecio(p){
      this._precio=+p;
   }

     getPrecio(){
      return this._precio;
   }

}