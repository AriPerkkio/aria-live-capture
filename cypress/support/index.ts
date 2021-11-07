/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getAnnouncements', (index?: number) => {
    const listItems = cy.get('#announcements-frame li');

    if (index !== undefined) {
        return listItems.eq(index);
    }

    return listItems;
});

Cypress.Commands.add('waitForPageLoad', () => {
    cy.findByRole('heading', {
        hidden: true,
        level: 2,
        name: 'Captured announcements',
    });

    return cy;
});

Cypress.Commands.add('clickMountButton', () => {
    cy.findByRole('button', { name: 'Mount' }).click();

    return cy;
});

declare global {
    namespace Cypress {
        interface Chainable {
            clickMountButton(): Chainable;
            getAnnouncements(index?: number): Chainable<Element | Element[]>;
            waitForPageLoad(): Chainable;
        }
    }
}
