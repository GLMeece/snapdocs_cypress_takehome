/// <reference types="cypress" />

import { 
  acceptCookies
} from "../page-objects/all-pages"

import { 
  clickHeaderLink,
  calloutgetAndClick
} from "../page-objects/home-page"

describe('Landing Page Top Links', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookies()
  })

  it('should go to Lenders page', () => {
    clickHeaderLink('Lenders')
    cy.url().should('include', 'lenders')
  })

  it('should go to Title / Escrow page', () => {
    clickHeaderLink('Title / Escrow')
    cy.url().should('include', 'title')
  })

  it('should go to Notary Signing Agents page', () => {
    clickHeaderLink('Notary Signing Agents')
    cy.url().should('include', 'notary-public')
  })

  it('should go to Resource Center page', () => {
    clickHeaderLink('Resource Center')
    cy.url().should('include', 'resources')
  })

  it('should go to COVID-19 Guide page', () => {
    clickHeaderLink('COVID-19 Guide')
    cy.url().should('include', 'digital-closings-coronavirus-guide')
  })

  it('should go to Sign In page', () => {
    clickHeaderLink('Sign In')
    cy.url().should('include', 'users/sign_in')
  })

  it('should go to Get Started page', () => {
    clickHeaderLink('Get Started')
    cy.url().should('include', 'more-info')
  })
})

describe('Landing Page Body Links', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookies()
  })
  
  it('should go to Lenders page', () => {
    calloutgetAndClick('Lenders')
    cy.url().should('include', 'lenders')
  })

  it('should go to Title / Escrow page', () => {
    calloutgetAndClick('Title & Escrow')
    cy.url().should('include', 'title')
  })

  it('should go to Notary Signing Agents page', () => {
    calloutgetAndClick('Notary Signing Agents')
    cy.url().should('include', 'notaries')
  })
})
