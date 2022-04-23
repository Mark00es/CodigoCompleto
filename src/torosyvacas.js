class TorosYVacas{
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
        }
    adivinar(intento) {
        let respuesta = "";
        /*if (intento === this.codigoSecreto) {
            return "Ganaste!";
        }*/
        for (var i = 0; i < this.codigoSecreto.length; i++) {
            if (this.codigoSecreto.includes(intento[i])) {
            respuesta += "*";
            }
        }
        if(intento[0] == this.codigoSecreto[0] && intento[1] == this.codigoSecreto[1]){
            return "!!"
        }
        else if(intento[0] == this.codigoSecreto[0]){
            return "!"
        }        
        return respuesta;
    }
}
export default TorosYVacas;