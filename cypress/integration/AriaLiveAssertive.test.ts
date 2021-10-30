const BASE_URL = 'iframe.html?id=aria-live-aria-live-assertive--';

it('Live Region Available Before Content', () => {
    cy.visit(`${BASE_URL}live-region-available-before-content`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton();

    cy.getAnnouncements()
        .should('have.length', 1)
        .findByText('assertive: Hello world');
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

    cy.getAnnouncements().findByText('assertive: Hello');
});

it('Part of content changes', () => {
    cy.visit(`${BASE_URL}part-of-content-changes`);
    cy.waitForPageLoad();
    cy.getAnnouncements().should('not.exist');

    cy.clickMountButton();

    cy.getAnnouncements().should('have.length', 1);
    cy.getAnnouncements(0).findByText('assertive: Hello world');

    cy.clickMountButton();

    cy.getAnnouncements().should('have.length', 2);
    cy.getAnnouncements(0).findByText('assertive: Hello world');
    cy.getAnnouncements(1).findByText('assertive: Hello');

    cy.clickMountButton();

    cy.getAnnouncements().should('have.length', 3);
    cy.getAnnouncements(0).findByText('assertive: Hello world');
    cy.getAnnouncements(1).findByText('assertive: Hello');
    cy.getAnnouncements(2).findByText('assertive: Hello world');
});

export {};
