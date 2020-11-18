/// <reference types="cypress" />

import { acceptCookies } from "../page-objects/all-pages";

import { notaryCardItem } from "../page-objects/notary-search-page";

describe("Search for Notary by Zip Code", () => {
  beforeEach(() => {
    cy.visit("/notary-public/");
    // What, no cookies? I'm disappointed!
  });

  it("Should show GPDR cookie notice", () => {
    // Negative test case: every other main entry point shows the GPDR cookie notice
    cy.log("Where is the GPDR Cookie Notice?");
    cy.get("#cn-accept-cookie"); // no 'Accept Cookies' alert
  });

  it("Searching by 78665 returns results", () => {
    cy.url().should("include", "notary-public");
    cy.get("#autocomplete").type("78665 {enter}");
    cy.url().should("include", "search?");
    cy.get("table > tbody > tr").should("to.have.lengthOf.above", 0);
  });

  it("Read more leads to correct Bio", () => {
    cy.get("#autocomplete").type("78665 {enter}");
    cy.url().should("include", "search?");
    cy.get(notaryCardItem(1)).then(($notaryName1) => {
      const notaryName = $notaryName1.text().trim();
      cy.get(
        ":nth-child(1) > td > .media > .media-body > .notary-bio > a"
      ).click();
      cy.get(".notary-name").should(($notaryName2) => {
        expect($notaryName2.text()).to.eq(notaryName);
      });
    });
  });
});
