describe("NBA app", () => {
  // const response = {
  //   statusCode: 200,
  //   body: { message: "Hello, Cypress!" },
  // };
  // const response = {};
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/");
    cy.intercept("POST", "**/api/v1/auth").as("postTeams");
    cy.intercept("POST", "**/httpapi").as("postHttpapi");
  });
  it("should login to account with valid creds", () => {
    cy.get('button[class*="NavItem"]').contains("Sign In").trigger("mouseover").parents("li").should("have.attr", "aria-expanded", "true");
    cy.contains("a", "Sign in with NBA ID").click();
    cy.url().should("include", "account/sign-in");
    cy.contains("h1", "Sign in with your NBA ID");
    cy.get(`input[data-testid="email"]`).type("qa.usern@gmail.com", { delay: 0 });
    cy.get(`input[data-testid="password"]`).type("Password#1", { delay: 0 });
    cy.get(`button[data-testid="submit"]`).should("not.be.disabled");
    // cy.get(`button[data-testid="submit"]`).click();
    // cy.wait("@postTeams").its("response.statusCode").should("eq", 200);
  });
});
