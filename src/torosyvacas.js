class TorosYVacas{
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
      }
      adivinar(intento) {
          if(intento == this.codigoSecreto)
          return "Ganaste!";
          else{return "";}
      }
}
export default TorosYVacas;