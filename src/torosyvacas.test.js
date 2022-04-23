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
