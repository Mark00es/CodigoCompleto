import TorosYVacas from "./torosyvacas";

const form = document.querySelector("#codigosecreto-form");
const codigoSecretoInput = document.querySelector("#codigosecreto");
const div = document.querySelector("#resultado-div");

const adivinarForm = document.querySelector("#adivinar-form");
const adivinarInput = document.querySelector("#adivinar");

let torosYVacas = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const codigoSecreto = Number.parseInt(codigoSecretoInput.value);  
  torosYVacas = new TorosYVacas(codigoSecreto);

});

adivinarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const intento = Number.parseInt(adivinarInput.value);  
  
  div.innerHTML = "<p>" + torosYVacas.adivinar(intento)+ "<p>"

});