describe('Тест функционала записи на техуслуги', () => {
    it('Проверка работы табов', () => {
        cy.visit('/maintenance')
        cy.contains('Электрик').should('have.class', 'btn-primary')
        cy.contains('Плотник').click().should('have.class', 'btn-primary')
        cy.url().should('include', '#step-2')
        cy.contains('Электрик').should('not.have.class', 'btn-primary')
    })

    it('Проверка формы', () => {
        cy.get('[name="email"]')
            .focus()
            .blur()
            .should('have.class', 'is-valid')
            .type('fake')
            .blur()
            .should('have.class', 'is-invalid')
            .type('@gmail.com')
            .should('have.value', 'fake@gmail.com')
            .should('have.class', 'is-valid')

        cy.get('[name="surname"]')
            .focus()
            .blur()
            .should('have.class', 'is-invalid')
            .type('Фамилия')
            .should('have.value', 'Фамилия')
            .blur()
            .should('have.class', 'is-valid')

        cy.get('[name="name"]')
            .focus()
            .blur()
            .should('have.class', 'is-invalid')
            .type('Имя')
            .should('have.value', 'Имя')
            .blur()
            .should('have.class', 'is-valid')

        cy.get('[name="building"]')
            .type(2)
            .should('have.value', 2)
            .blur()
            .should('have.class', 'is-valid')

        cy.get('[name="room"]')
            .type(111)
            .should('have.value', 111)
            .blur()
            .should('have.class', 'is-valid')

        cy.get('[name="text"]')
            .focus()
            .blur()
            .should('have.class', 'is-invalid')
            .type('Сломалась дверь!')
            .should('have.value', 'Сломалась дверь!')
            .blur()
            .should('have.class', 'is-valid')
    })

    it('Отправка формы', () => {
        cy.intercept('POST', 'https://api.cyberdas.net/next/maintenance', {
            statusCode: 200,
        })

        cy.get('[type=submit]').click()
        cy.contains('Успех')
        cy.get('[role="button"]').filter(':contains("Далее")').click()
    })

    it('Очистилась ли форма', () => {
        cy.get('[name="email"]').should('have.value', '')
        cy.get('[name="surname"]').should('have.value', '')
        cy.get('[name="name"]').should('have.value', '')
        cy.get('[name="patronymic"]').should('have.value', '')
        cy.get('[name="building"]').should('have.value', '')
        cy.get('[name="room"]').should('have.value', '')
        cy.get('[name="text"]').should('have.value', '')
        cy.contains('Электрик').should('have.class', 'btn-primary')
    })
})
