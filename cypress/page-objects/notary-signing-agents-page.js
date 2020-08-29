// HELPER FUNCTIONS
function moreInfoButtonSelector(moreInfoButtonText) {
    // Pass in button string for more info; locator for appropriate button
    // Valid strings: 'Get Started', 'Activate your Free Account'
    return `div > div.module-buttons > div > a > span:contains('${moreInfoButtonText}')`
}

function fieldSelector(fieldName) {
    // Pass in short field name; field selector is returned
    // Valid strings: 'first', 'last', 'email', 'company', 'phone', 'title'
    let firstHalfSelector = "div > form > div > input[placeholder='";
    let lastHalfSelector = "']";
    if (fieldName == 'first') {
        return firstHalfSelector.concat('First Name', lastHalfSelector);
    } else if (fieldName == 'last') {
        return firstHalfSelector.concat('Last Name', lastHalfSelector);
    } else if (fieldName == 'email') {
        return firstHalfSelector.concat('Work Email Address', lastHalfSelector);
    } else if (fieldName == 'company') {
        return firstHalfSelector.concat('Company Name', lastHalfSelector);
    } else if (fieldName == 'phone') {
        return firstHalfSelector.concat('Phone Number', lastHalfSelector);
    } else if (fieldName == 'title') {
        return firstHalfSelector.concat('Job Title', lastHalfSelector);
    }
}

// EXPORTED FUNCTIONS
export function clickGetStartedButton() {
    cy.get(moreInfoButtonSelector('Get Started')).scrollIntoView().click()
}

export function clickActivateFreeAccountButton() {
    cy.get(moreInfoButtonSelector('Activate your Free Account')).scrollIntoView().click()
}

export function returnFieldSelector(fieldName, divClass = 'marketo_form') {
    // Pass in short field name; field selector is returned
    // For Notary, pass in 'notary_form' as divClass
    // Valid strings: 'first', 'last', 'email', 'company', 'phone', 'title'
    // let firstHalfSelector = "div > form > div > input[placeholder='";
    let firstHalfSelector = `div.${divClass} input[placeholder='`;
    let lastHalfSelector = "']";
    if (fieldName == 'first') {
        return firstHalfSelector.concat('First Name', lastHalfSelector);
    } else if (fieldName == 'last') {
        return firstHalfSelector.concat('Last Name', lastHalfSelector);
    } else if (fieldName == 'email') {
        return firstHalfSelector.concat('Work Email Address', lastHalfSelector);
    } else if (fieldName == 'company') {
        return firstHalfSelector.concat('Company Name', lastHalfSelector);
    } else if (fieldName == 'phone') {
        return firstHalfSelector.concat('Phone Number', lastHalfSelector);
    } else if (fieldName == 'title') {
        return firstHalfSelector.concat('Job Title', lastHalfSelector);
    }
}
