/// <reference types="cypress" />

describe('Testes para a home', () => {
    // it('Deve renderizar 3 contatos', () => {
    //     cy.visit('https://agenda-contatos-react.vercel.app/')
    //     cy.get('div .contato').should('be.visible')
    // })

    it('Deve incluir contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('form > input[type="text" i]').should('be.visible').type('ThiagoB')
        cy.get('form > input[type="email" i]').should('be.visible').type('teste@testando.com')
        cy.get('form > input[type="tel" i]').should('be.visible').type('1154657654')
        cy.get('button.adicionar').click()
    })
    it('Deve editar o nome', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('button.edit').contains('Editar').click()
        cy.get('form > input[type="text" i]').should('be.visible').type(' teste')
        cy.get('button.alterar').click()
    })
    it('Deve Remover um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('button.delete').contains('Deletar').click()
    })
})