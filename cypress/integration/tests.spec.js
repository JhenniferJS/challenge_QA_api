/// <reference types='cypress'/>
import * as bankData from '../fixtures/bankData'


describe('GET request', () => {
    it('GET request with valid token', () => {
        cy.requestGET(Cypress.env('TOKEN'))
        .then(resp => {
            expect(resp.status).to.be.equal(200);
            expect(resp.body).not.null;
            resp.body.forEach(bank => {
                expect(bank.id).not.null
                expect(bank.banco).not.null
                expect(bank.estadoAtuacao).not.null
                expect(bank.juros).not.null
            });
        })
    })
    
    it('GET request without token', () => {
        cy.requestGET()
        .then(resp => {
            expect(resp.status).to.be.equal(401);
        })
    })
    
    bankData.statesData.forEach(state => {
        it(`GET request with valid estadoAtuacao - ${state}`, () => {
            cy.requestGETWithQueryParameter(Cypress.env('TOKEN'), 'estadoAtuacao', state)
            .then(resp => {
                expect(resp.status).to.be.equal(200);
                resp.body.forEach(bank => {
                    expect(bank.estadoAtuacao).to.be.equal(state)
                });
            })
        })
    })
})

describe('PUT request', () => {
    bankData.requestPUTData.forEach(bank => {
        it(`PUT request with valid data and id = ${bank.id}`, () => {
            cy.requestPUT(Cypress.env('TOKEN'), bank)
            .then(resp => {
                expect(resp.status).to.be.equal(200)
                expect(resp.body[0].mensagem).to.be.equal(bank.message)
                expect(resp.body[1].id).to.be.equal(Number(bank.id))
                expect(resp.body[1].banco).to.be.equal(bank.name)
                expect(resp.body[1].estadoAtuacao).to.be.equal(bank.actingState)
                expect(resp.body[1].juros).to.be.equal(bank.tax)
            })
        })
    })
})

describe('POST request', () => {
    bankData.requestPOSTData.forEach(bank => {
        it(`POST request with valid data - ${bank.name}`, () => {
            cy.requestPOST(Cypress.env('TOKEN'), bank)
            .then(resp => {
                expect(resp.status).to.be.equal(201)
                expect(resp.body[0].banco).to.be.equal(bank.name)
                expect(resp.body[0].estadoAtuacao).to.be.equal(bank.actingState)
                expect(resp.body[0].juros).to.be.equal(bank.tax)
                expect(resp.body[1].mensagem).to.be.equal(bank.message)
            })
        })
    })
})