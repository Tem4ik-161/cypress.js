describe('Покупка', function () {
    it('Флоу покупки', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(4500);
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Артём');
        cy.get('#billing_last_name').type('Берчанов');
        cy.get('#billing_address_1').type('14, Московская');
        cy.get('#billing_city').type('Недвиговка');
        cy.get('#billing_state').type('Новомихайловская');
        cy.get('#billing_postcode').type('346400');
        cy.get('#billing_phone').type('89281114565');
        cy.get('#billing_email').type('mail@mail.com');
        cy.get('#place_order').click();
        cy.contains('Оформение заказа').should('be.visible');
    })
})