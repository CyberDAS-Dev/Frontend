describe('Тест функционала обратной связи', () => {
    it('Проверка работы табов', () => {
        cy.visit('/feedback')
        cy.contains('Студенческий комитет').should('have.class', 'btn-primary')
        cy.contains('Администрация сайта').click().should('have.class', 'btn-primary')
        cy.contains('Студенческий комитет').should('not.have.class', 'btn-primary')
    })

    it('Проверка формы', () => {
        cy.get('[type="category"]')
            .children('option:first-of-type')
            .should('have.text', 'Выберите категорию')
            .parent()
            .select('Баг')
            .should('have.value', 'Баг')
            .blur()
            .should('have.class', 'is-valid')

        cy.get('[name="text"]')
            .focus()
            .blur()
            .should('have.class', 'is-invalid')
            .type('Я нашел баг, фиксите!')
            .blur()
            .should('have.class', 'is-valid')

        cy.get('[name="email"]')
            .focus()
            .blur()
            .should('have.class', 'is-valid')
            .type('bountyhunter')
            .blur()
            .should('have.class', 'is-invalid')
            .type('@gmail.com')
            .should('have.class', 'is-valid')
    })

    it('Отправка формы', () => {
        cy.intercept('POST', 'https://api.cyberdas.net/next/feedback/admin/items', {
            statusCode: 200,
        })

        cy.get('[type=submit]').click()
        cy.contains('Успех')
        cy.get('[role="button"]').filter(':contains("Далее")').click()
    })

    it('Очистилась ли форма', () => {
        cy.get('[type="category"]').should('have.value', null)
        cy.get('[name="text"]').should('have.value', '')
        cy.get('[name="email"]').should('have.value', '')
    })
})
