class TorosYVacas{
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
      }
      adivinar(intento) {
        let respuesta = "";
        if (intento === this.codigoSecreto) {
          return "Ganaste!";
        }
        for (var i = 0; i < this.codigoSecreto.length; i++) {
          if (this.codigoSecreto.includes(intento[i])) {
            respuesta += "*";
          }
        }
        return respuesta;
      }
}   
export default TorosYVacas;