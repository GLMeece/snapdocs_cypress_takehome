/// <reference types="cypress" />

import { 
  acceptCookies
} from "../page-objects/all-pages"

import {
  clickGetStartedButton,
  clickActivateFreeAccountButton,
  returnFieldSelector
} from "../page-objects/notary-signing-agents-page"

describe('Notary Signing Agent page', () => {
  beforeEach(() => {
    cy.visit('/notaries/')
    acceptCookies()
  })

  it('Get Started button should lead to the Perfect Closing page', () => {
    clickGetStartedButton()
    cy.url().should('include', 'more-info/?identity=Notary')
  })

  it('Activate Free Account button should lead to the Perfect Closing page', () => {
    clickActivateFreeAccountButton()
    cy.url().should('include', 'more-info/?identity=Notary')
  })
})

describe('Perfect Closing Signup page', () => {
  beforeEach(() => {
    cy.visit('more-info/?identity=Notary')
    acceptCookies()
    cy.get('#lender + label').as('lenderButton')
    cy.get('#title-escrow + label').as('titleEscrowButton')
    cy.get('#signing-service + label').as('signingServiceButton')
    cy.get('#notary + label').as('notaryButton')
  })

  it('Lender sign-up fields functional', () => {
    cy.get('@lenderButton').click()
    cy.get(returnFieldSelector('first')).type('Lenny')
    cy.get(returnFieldSelector('last')).type('Durr')
    cy.get(returnFieldSelector('email')).type('len.durr@somelender.com')
    cy.get(returnFieldSelector('company')).type('Lenders R Us')
    cy.get(returnFieldSelector('phone')).type('555-321-1234')
    cy.get(returnFieldSelector('title')).type('Primary Predator')
    cy.get("div.g-recaptcha > div > div > iframe").should('not.be.visible')
  })

  it('Title / Escrow sign-up fields functional', () => {
    cy.get('@titleEscrowButton').click()
    cy.get(returnFieldSelector('first')).type('Van')
    cy.get(returnFieldSelector('last')).type('Gough')
    cy.get(returnFieldSelector('email')).type('van.gough@vangoughescrow.com')
    cy.get(returnFieldSelector('company')).type("Van Gough's Escrows")
    cy.get(returnFieldSelector('phone')).type('555-321-5678')
    cy.get(returnFieldSelector('title')).type('Chief Listener')
    cy.get("div.g-recaptcha > div > div > iframe").should('not.be.visible')
  })

  it('Signing Service sign-up fields functional', () => {
    cy.get('@signingServiceButton').click()
    cy.get(returnFieldSelector('first')).type('John')
    cy.get(returnFieldSelector('last')).type('Hancock')
    cy.get(returnFieldSelector('email')).type('jhancock@calligraphic.com')
    cy.get(returnFieldSelector('company')).type('Hancock Signing Service')
    cy.get(returnFieldSelector('phone')).type('555-321-9101')
    cy.get(returnFieldSelector('title')).type('Main Pen Tester')
    cy.get("div.g-recaptcha > div > div > iframe").should('not.be.visible')
  })

  it('Notary signing agent button should trigger CAPTCHA', () => {
    cy.get('@notaryButton').click()
    cy.get(returnFieldSelector('first', 'notary_form')).type('Noh')
    cy.get(returnFieldSelector('last', 'notary_form')).type('Torry')
    cy.get(returnFieldSelector('email', 'notary_form')).type('ntorry@stampies.com')
    cy.get(returnFieldSelector('company')).should('not.be.visible')
    cy.get(returnFieldSelector('phone')).should('not.be.visible')
    cy.get(returnFieldSelector('title')).should('not.be.visible')
    cy.get("div.g-recaptcha > div > div > iframe").should('be.visible')
  })

})