//http://127.0.0.1:5500/index.html

// test, it
describe("Should display the calculator", () => {
  it("shows calculator on the screen", () => {
    //Arrange -> Get things ready
    cy.visit("/index.html");
    //Act -> Do it
    //Assert -> Seeing if its what you want it to be
    //Pass in a CSS selector
    //Act and Assert
    cy.get(".calculator__body").should("exist");
  });

  it("should show all 16 buttons on the screen", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    //
    cy.get("button").should("have.length", 16);
  });
});

// Do something -> Simulate user using our calculator

beforeEach(() => {
  cy.visit("/index.html");
});

describe("should perform addition", () => {
  it("should calculate a single digit addition, 7 + 8 = 15", () => {
    //
    cy.get("#btn-7").click();
    cy.get("button").contains("+").click();
    cy.get("#btn-8").click();
    cy.get("button").contains("=").click();
    cy.get("#display-number").should("have.text", 15);
  });
  it("should perform subtraction, 10 - 3 = 7", () => {
    //
    cy.get("#btn-1").click();
    cy.get("#btn-0").click();
    cy.get("button").contains("-").click();
    cy.get("#btn-7").click();
    cy.get("button").contains("=").click();
    cy.get("#display-number").should("have.text", 3);
  });

  it("should perform divide, 10 * 10 = 100", () => {
    //
    cy.get("#btn-1").click();
    cy.get("#btn-0").click();
    cy.get("button").contains("*").click();
    cy.get("#btn-1").click();
    cy.get("#btn-0").click();
    cy.get("button").contains("=").click();
    cy.get("#display-number").should("have.text", 100);
  });

  it("should perform divide, 10 * 10 = 10", () => {
    //
    cy.get("#btn-1").click();
    cy.get("#btn-0").click();
    cy.get("button").contains("/").click();
    cy.get("#btn-1").click();
    cy.get("#btn-0").click();
    cy.get("button").contains("=").click();
    cy.get("#display-number").should("have.text", 1);
  });
});

describe("should clear screen and calculator memory when AC pressed", () => {
  it("should clear screen and when AC pressed", () => {
    //
    cy.get("#btn-ac").click();
    cy.get("#display-number").should("have.text", "");
  });
});

describe("should take a 2 digit input", () => {
  it("should take 2 double digit entries and perform an addition.  20 + 10 = 30", () => {
    //
  });
});

describe("Negative testing - non standard calculator operations", () => {
  it("takes a minus number and adds a positive number. -10 + 10 = 0", () => {
    cy.get("button").contains("-").click();
    cy.get("#btn-1");
    cy.get("#btn-0");
    cy.get("button").contains("+").click();
    cy.get("#btn-1");
    cy.get("#btn-0");
    cy.get("button").contains("=").click();
    cy.get("#display-number").should("have.text", 0);
  });

  it("takes 3 separate inputs.  10 + 10 + 5 = 25", () => {
    cy.get("button").contains("-").click();
    cy.get("#btn-1");
    cy.get("#btn-0");
    cy.get("button").contains("+").click();
    cy.get("#btn-1");
    cy.get("#btn-0");
    cy.get("button").contains("").click();
    cy.get("#btn-5");
    cy.get("button").contains("=").click();
    cy.get("#display-number").should("have.text", 25);
  });
});
