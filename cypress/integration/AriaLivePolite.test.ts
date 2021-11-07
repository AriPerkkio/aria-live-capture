const BASE_URL = 'iframe.html?id=aria-live-aria-live-polite--';

it('Live Region Available Before Content', () => {
    cy.visit(`${BASE_URL}live-region-available-before-content`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton();

    cy.getAnnouncements()
        .should('have.length', 1)
        .findByText('polite: Hello world');
});

it('Live Region Unavailable Before Content', () => {
    cy.visit(`${BASE_URL}live-region-unavailable-before-content`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton().clickMountButton();

    cy.getAnnouncements().should('not.exist');
});

export {};
