describe('Validação de Estabilidade - Fluxo Crítico', () => {
  it('Deve carregar o sistema e validar o login sem falhas', () => {
    // Acessa o ambiente de homologação
    cy.visit('https://ambiente-de-homologacao-exemplo.com');
    
    // Insere as credenciais
    cy.get('#username').type('usuario_teste');
    cy.get('#password').type('senha_segura123');
    
    // Executa a ação de login
    cy.get('#btn-login').click();

    // Valida se o painel carregou corretamente (Garantia de Qualidade)
    cy.url().should('include', '/dashboard');
    cy.get('.status-sistema').should('contain', 'Operacional');
  });
});
