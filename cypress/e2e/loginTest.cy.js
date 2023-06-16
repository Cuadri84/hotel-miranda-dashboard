/* eslint-disable no-undef */
describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("goes to the correct web", () => {
    cy.visit("localhost:3000");
  });
  it("Aparece el formulario", () => {
    cy.contains("Login");
  });
  it("Requiere mail", () => {
    cy.get('[data-cy="mail"]').should("have.attr", "required");
  });
  it("Requiere contraseña", () => {
    cy.get('[data-cy="password"]').should("have.attr", "required");
  });
  it("No se dirige a una ruta privada sin iniciar sesión", () => {
    cy.visit("localhost:3000/rooms");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });
  it("Se mantiene en login con mail incorrecto", () => {
    cy.get("[data-cy=mail]").type("Nadia");
    cy.get("[data-cy=password]").type("d");
    cy.get("[data-cy=submit]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });
  it("Se mantiene en login con password incorrecto", () => {
    cy.get("[data-cy=mail]").type("d");
    cy.get("[data-cy=password]").type("1234");
    cy.get("[data-cy=submit]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });
  it("Va al dashboard con los datos correctos", () => {
    cy.get("[data-cy=mail]").type("d");
    cy.get("[data-cy=password]").type("d");
    cy.get("[data-cy=submit]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
  });
  it("Hace bien el Logout desde dashboard", () => {
    cy.get("[data-cy=mail]").type("d");
    cy.get("[data-cy=password]").type("d");
    cy.get("[data-cy=submit]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
    cy.get("[data-cy=logOut]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });
});
