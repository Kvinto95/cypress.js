describe('Тренировка на сайте staya.dog', function () {
   it('Автотесты для формы логина и пароля на Staya', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('artem@dolnikov.ru');
        cy.get('.auth-form > form > [type="password"]').type('Nr7-ZMY-z3p-NyF');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');


     })
})