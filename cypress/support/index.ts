/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getAnnouncements', () => {
    return cy.get('#announcements-frame li');
});

Cypress.Commands.add('waitForPageLoad', () => {
    cy.findByRole('heading', {
        hidden: true,
        level: 2,
        name: 'Captured announcements',
    });

    return cy;
});

declare global {
    namespace Cypress {
        interface Chainable {
            getAnnouncements(): Chainable<Element | Element[]>;
            waitForPageLoad(): Chainable;
        }
    }
}
