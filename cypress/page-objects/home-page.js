function learnMoreCalloutLinks(sectionText) {
    // Pass in the Callout section Text, this will locate the 'Learn more →' link
    return `h3:contains('${sectionText}') + div p.feature-button > a`
}

function scrollAndClick(selectorCSS) {
    cy.get(selectorCSS).scrollIntoView().click()
}

// EXPORTED FUNCTIONS
export function clickHeaderLink(linkText) {
    cy.get('a').contains(linkText).click()
}

export function calloutLinkScrollAndClick(calloutText) {
    scrollAndClick(learnMoreCalloutLinks(calloutText))
}
