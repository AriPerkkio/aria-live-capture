const BASE_URL = 'iframe.html?id=role-role-status--';

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

    cy.clickMountButton();

    cy.getAnnouncements().should('not.exist');
});

it('Anchestor is hidden', () => {
    cy.visit(`${BASE_URL}anchestor-is-hidden`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton().clickMountButton();

    cy.getAnnouncements().should('not.exist');
});

it('Live region is hidden', () => {
    cy.visit(`${BASE_URL}live-region-is-hidden`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton().clickMountButton();

    cy.getAnnouncements().should('not.exist');
});

it('Content is hidden', () => {
    cy.visit(`${BASE_URL}content-is-hidden`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton().clickMountButton();

    cy.getAnnouncements().should('not.exist');
});

it('Content is partially hidden', () => {
    cy.visit(`${BASE_URL}content-is-partially-hidden`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton();

    cy.getAnnouncements().findByText('polite: Hello');
});

it('Part of content changes', () => {
    cy.visit(`${BASE_URL}part-of-content-changes`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton();

    cy.getAnnouncements().should('have.length', 1);
    cy.getAnnouncements(0).findByText('polite: Hello world');

    cy.clickMountButton();

    cy.getAnnouncements().should('have.length', 2);
    cy.getAnnouncements(0).findByText('polite: Hello world');
    cy.getAnnouncements(1).findByText('polite: Hello');

    cy.clickMountButton();

    cy.getAnnouncements().should('have.length', 3);
    cy.getAnnouncements(0).findByText('polite: Hello world');
    cy.getAnnouncements(1).findByText('polite: Hello');
    cy.getAnnouncements(2).findByText('polite: Hello world');
});

export {};
