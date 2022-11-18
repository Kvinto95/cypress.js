describe('Тренировка на сайте qa.studio', function () {
   it('Проверка, на негативный кейс авторизации логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('artem@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
     })
})