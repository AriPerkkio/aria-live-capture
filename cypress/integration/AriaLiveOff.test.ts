const BASE_URL = 'iframe.html?id=aria-live-aria-live-off--';

it('With Text Content', () => {
    cy.visit(`${BASE_URL}with-text-content`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton();

    cy.getAnnouncements().should('not.exist');
});

it('Wraps Live Region', () => {
    cy.visit(`${BASE_URL}wraps-live-region`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton().clickMountButton();

    cy.getAnnouncements()
        .should('have.length', 1)
        .findByText('polite: Hello world');
});

it('Wrapped In Live Region', () => {
    cy.visit(`${BASE_URL}wrapped-in-live-region`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton().clickMountButton();

    cy.getAnnouncements().should('not.exist');
});

it('Sibling Is Visible', () => {
    cy.visit(`${BASE_URL}sibling-is-visible`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton().clickMountButton();

    cy.getAnnouncements().should('have.length', 1).findByText('polite: world');
});

export {};
