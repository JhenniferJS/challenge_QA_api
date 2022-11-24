// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import * as requestUtils from './utils/requestUtils'

Cypress.Commands.add('setToken', () => {
    cy.request({
        url: '/auth',
        method: 'GET'
    }).then(resp => {
        Cypress.env('TOKEN', resp.body.token)
    })
})

Cypress.Commands.add('requestGET', requestUtils.requestGET)
Cypress.Commands.add('requestGETWithQueryParameter', requestUtils.requestGETWithQueryParameter)
Cypress.Commands.add('requestPUT', requestUtils.requestPUT)
Cypress.Commands.add('requestPOST', requestUtils.requestPOST)
