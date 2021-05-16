import { addBoard } from './commands/addBoard'
import { comparePrice } from './commands/comparePrice'
import { search } from './commands/search'
import { setQuantity } from './commands/setQuantity'
import { assertItemWasAdded } from './commands/assertItemWasAdded'


Cypress.Commands.add('addBoard', addBoard);
Cypress.Commands.add('comparePrice', comparePrice);
Cypress.Commands.add('search', search);
Cypress.Commands.add('setQuantity', setQuantity);
Cypress.Commands.add('assertItemWasAdded', assertItemWasAdded);

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})