class TorosYVacas{
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
        }
    adivinar(intento) {
        let respuesta = "";
        let posIni = 0;
        if (intento === this.codigoSecreto) {
            return "Ganaste!";
        }
        respuesta = this.buscarToros(intento,respuesta);
        respuesta = this.buscarVacas(intento,respuesta);
        respuesta = this.buscarTernera(intento,respuesta);
    
        return respuesta;
    }
    buscarToros(intento,respuesta){                        
        for (var i = 0; i < this.codigoSecreto.length; i++) {
            if(this.codigoSecreto[i] == intento[i]){
                respuesta += "!"                                
            }                   
        }                                 
        return respuesta;
    }
    buscarVacas(intento,respuesta){        
        for (var i = 0; i < this.codigoSecreto.length; i++) {
            if( this.codigoSecreto.includes(intento[i]) &&
                this.codigoSecreto[i] != intento[i]) {
                respuesta = respuesta + "*"
            } 
        }
        return respuesta;  
    }
    buscarTernera(intento,respuesta){                          
        for (var i = 0; i < this.codigoSecreto.length; i++) {
            if(this.codigoSecreto.includes(Number(intento[i]) + 1) || 
                this.codigoSecreto.includes(Number(intento[i]) - 1)){
                respuesta = respuesta + "#";
            }                       
                   
        }
        return respuesta;  
    }    
    getCodigoSecreto(posIni){
        return  Number(this.codigoSecreto[posIni]);
    }
    esPrimo (valor){
        let respuesta=true;
        if(valor == 0 || valor == 1 || valor == 4){respuesta = false}
        for(let i = 2;i<valor/2;i++){           
            if(valor % i == 0){respuesta = false}
        }
        return respuesta
    }
    buscarBisonte(){
        let respuesta = ""
        for (var i = 0; i < this.codigoSecreto.length; i++) {
            if(this.esPrimo(this.getCodigoSecreto(i))){
                respuesta += "%"
            } 
        }
        return respuesta
    }
}
export default TorosYVacas;