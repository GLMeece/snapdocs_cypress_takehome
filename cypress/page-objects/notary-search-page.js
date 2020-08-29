// EXPORTED FUNCTIONS
export function notaryCardItem(elementNum) {
    // Pass in element number of Notary card to get notary's name
    return `#notaries-list tr:nth-child(${elementNum}) > td > div > div.media-body > h5.media-notary__name > a`
}
