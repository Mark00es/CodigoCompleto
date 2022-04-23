class TorosYVacas{
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
      }
      adivinar(intento) {
        if(intento == this.codigoSecreto)
        return "Ganaste!";
        else if(this.codigoSecreto.includes(intento[0]) && 
                this.codigoSecreto.includes(intento[1]))
                return "**"
            else if(this.codigoSecreto.includes(intento[0]))
            return "*"
            
          return "";
      }
}
export default TorosYVacas;