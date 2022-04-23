import TorosYVacas from "./torosyvacas";
describe("Toros y Vacas -> ganar", () => {
  it("Deberia responder 'Ganaste!' si se adivina el codigo secreto", () => {
    const torosyvacas = new TorosYVacas("3");
    expect(torosyvacas.adivinar("3")).toEqual("Ganaste!");
  });

  it("Deberia responder '' si no  se adivina el codigo secreto", () => {
    const torosyvacas = new TorosYVacas("7");
    expect(torosyvacas.adivinar("2")).toEqual("");
  });
});

describe("Toros y Vacas -> Pista de vacas", () => {
  it("Si ingresamos como codigo 12 y nuestro intento es 2 deberia retornar '*'", () => {
    const torosyvacas = new TorosYVacas("12");
    expect(torosyvacas.adivinar("24")).toEqual("*");
  });
  it("Si ingresamos como codigo 12 y nuestro intento es 21 deberia retornar '**'", () => {
    const torosyvacas = new TorosYVacas("12");
    expect(torosyvacas.adivinar("21")).toEqual("**");
  });
  it("Si ingresamos como codigo 124 y nuestro intento es 421 deberia retornar '*'", () => {
    const torosyvacas = new TorosYVacas("124");
    expect(torosyvacas.adivinar("421")).toEqual("***");
  });
});
