function learnMoreCalloutLinks(sectionText) {
    // Pass in the Callout section Text, this will locate the 'Learn more →' link
    return `h3:contains('${sectionText}') + div p.feature-button > a`
}

function getAndClick(selectorCSS) {
    cy.get(selectorCSS).click()
}

// EXPORTED FUNCTIONS
export function clickHeaderLink(linkText) {
    cy.get('a').contains(linkText).click()
}

export function calloutgetAndClick(calloutText) {
    getAndClick(learnMoreCalloutLinks(calloutText))
}
