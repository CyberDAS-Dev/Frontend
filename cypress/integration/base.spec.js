describe('Тесты основного функционала', () => {
    it('Отправляет заявку на техосблуживание', () => {
        cy.visit('/')
        cy.contains('Техуслуги').click()
        cy.contains('Плотник').click()
        cy.url().should('include', '#step-2')
        cy.get('[name="email"]').type('fake@gmail.com')
        cy.get('[name="name"]').type('Name')
        cy.get('[name="surname"]').type('Surname')
        cy.get('[name="patronymic"]').type('Patronymic')
        cy.get('[name="patronymic"]').type('Patronymic')
        cy.get('[name="building"]').type('2')
        cy.get('[name="room"]').type('321')
        cy.get('[name="text"]').type('Сломался кран')
        cy.intercept('POST', 'https://api.cyberdas.net/next/maintenance', {
            statusCode: 200,
        })
        cy.get('[type=submit]').click()
        cy.get('[name="email"]').should('have.value', '')
        cy.contains('Успех')
    })

    it('Отправляет обращение администрации', () => {
        cy.visit('/')
        cy.contains('Обратная связь').click()
        cy.contains('Администрация сайта').click()
        cy.get('[type=category]').select('Баг')
        cy.get('[name=text]').type('Я нашел баг на вашем сайте! Исправляйте, живо!!!')
        cy.get('[name=email]').type('bountyhunter@gmail.com')
        cy.intercept('POST', 'https://api.cyberdas.net/next/feedback/admin/items', {
            statusCode: 200,
        })
        cy.get('[type=submit]').click()
    })
})
