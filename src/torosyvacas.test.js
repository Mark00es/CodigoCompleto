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
  it("Si ingresamos como codigo 61 y nuestro intento es 15 deberia retornar '*#'", () => {
    const torosyvacas = new TorosYVacas("61");
    expect(torosyvacas.buscarVacas("15","")).toEqual("*");
  });
  it("Si ingresamos como codigo 45 y nuestro intento es 54 deberia retornar '**##'", () => {
    const torosyvacas = new TorosYVacas("45");
    expect(torosyvacas.buscarVacas("54","")).toEqual("**");
  });
  it("Si ingresamos como codigo 613 y nuestro intento es 361 deberia retornar '**##'", () => {
    const torosyvacas = new TorosYVacas("613");
    expect(torosyvacas.buscarVacas("361","")).toEqual("***");
  });  
});


describe("Toros y Vacas -> Pista de toros", () => {
  it("Si ingresamos como codigo 32 y nuestro intento es 36 deberia retornar '!#'", () => {
    const torosyvacas = new TorosYVacas("32");    
    expect(torosyvacas.buscarToros("36","")).toEqual("!");
  });  
  it("Si ingresamos como codigo 513 y nuestro intento es 523 deberia retornar '!#'", () => {
    const torosyvacas = new TorosYVacas("513");
    expect(torosyvacas.buscarToros("523","")).toEqual("!!");
  });  
  it("Si ingresamos como codigo 6135 y nuestro intento es 2135 deberia retornar '!#'", () => {
    const torosyvacas = new TorosYVacas("6135");
    expect(torosyvacas.buscarToros("2135","")).toEqual("!!!");
  });  
});

describe("Toros y Vacas -> Pista de terneras", () => {
  it("Si ingresamos como codigo 12 y nuestro intento es 3 deberia retornar '#'", () => {
    const torosyvacas = new TorosYVacas("12");
    expect(torosyvacas.buscarTernera("3","")).toEqual("#");
  });

  it("Si ingresamos como codigo 34 y nuestro intento es 5 deberia retornar '#'", () => {
    const torosyvacas = new TorosYVacas("34");
    expect(torosyvacas.buscarTernera("5","")).toEqual("#");
  });

  it("Si ingresamos como codigo 45 y nuestro intento es 36 deberia retornar '##'", () => {
    const torosyvacas = new TorosYVacas("45");
    expect(torosyvacas.buscarTernera("36","")).toEqual("##");
  });
  it("Si ingresamos como codigo 1234 y nuestro intento es 2346 deberia retornar '##'", () => {
    const torosyvacas = new TorosYVacas("1234");
    expect(torosyvacas.buscarTernera("2346","")).toEqual("###");
  });
});

describe("Toros y Vacas -> Adivinar codigo", () => {
  it("Si ingresamos como codigo 6123 y nuestro intento es 6213 deberia retornar '!!**###'", () => {
    const torosyvacas = new TorosYVacas("6123");
    expect(torosyvacas.adivinar("6213")).toEqual("!!**###");
  });
  it("Si ingresamos como codigo 5172 y nuestro intento es 7516 deberia retornar '***##'", () => {
    const torosyvacas = new TorosYVacas("5172");  
    expect(torosyvacas.adivinar("7516")).toEqual("***##");
  });
  it("Si ingresamos como codigo 613582 y nuestro intento es 412572 deberia retornar '***##'", () => {
    const torosyvacas = new TorosYVacas("613582");  
    expect(torosyvacas.adivinar("412572")).toEqual("!!!*######");
  });
});

describe("Toros y Vacas -> Validar si es primo", () => {
  it("Si ingresamos numero 5  deberia retornar 'true' ya que es un numero primo", () => {
    const torosyvacas = new TorosYVacas("5");
    expect(torosyvacas.esPrimo(torosyvacas.getCodigoSecreto(0))).toEqual(true);
  });
  it("Si ingresamos numero 4 deberia retornar 'false' ya que no es un numero primo", () => {
    const torosyvacas = new TorosYVacas("4");
    expect(torosyvacas.esPrimo(torosyvacas.getCodigoSecreto(0))).toEqual(false);
  });
  it("Si ingresamos numero 9 deberia retornar 'false' ya que no es un numero primo", () => {
    const torosyvacas = new TorosYVacas("9");
    expect(torosyvacas.esPrimo(torosyvacas.getCodigoSecreto(0))).toEqual(false);
  });
});

describe("Toros y Vacas -> Pista de Bisonte", () => {
  it("Si ingresamos como codigo 9  deberia retornar '%'", () => {
    const torosyvacas = new TorosYVacas("5");
    expect(torosyvacas.buscarBisonte()).toEqual("%");
  });
  it("Si ingresamos como codigo 9  deberia retornar ''", () => {
    const torosyvacas = new TorosYVacas("9");
    expect(torosyvacas.buscarBisonte()).toEqual("");
  });
  it("Si ingresamos como codigo 27  deberia retornar '%%'", () => {
    const torosyvacas = new TorosYVacas("27");
    expect(torosyvacas.buscarBisonte()).toEqual("%%");
  });
  it("Si ingresamos como codigo 235  deberia retornar '%%%'", () => {
    const torosyvacas = new TorosYVacas("235");
    expect(torosyvacas.buscarBisonte()).toEqual("%%%");
  });
});