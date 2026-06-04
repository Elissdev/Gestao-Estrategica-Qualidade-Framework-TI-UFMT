# Gestão Estratégica da Qualidade em TI
**Framework de Automação e Modelagem Estatística/Financeira**

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-green)
![UFMT](https://img.shields.io/badge/Institui%C3%A7%C3%A3o-UFMT-blue)
![Disciplina](https://img.shields.io/badge/Semin%C3%A1rio-Integrador_IV-purple)

## Sobre o Projeto
Este repositório contém a base técnica e os scripts de automação do projeto desenvolvido para o **Seminário Integrador IV** do curso de Bacharelado em Ciência e Tecnologia (UFMT). 

O framework propõe a união da cultura **Shift-Left Testing** com **Automação de Testes**, validando a viabilidade técnica e financeira através de modelagem estatística (previsão de falhas) e matemática financeira (cálculo de ROI). O foco é reduzir o desperdício em empresas locais e ONGs que dependem de estabilidade sistêmica.

## Arquitetura do Framework (Pilares)
1. **Shift-Left Testing:** Antecipação da qualidade para a fase de requisitos.
2. **Modelagem de Risco:** Uso de dados históricos para identificar módulos críticos.
3. **Automação Contínua:** Scripts de regressão integrados (Cypress).
4. **Análise de Viabilidade:** ROI que comprova a redução de custos de manutenção.

## Tecnologias Utilizadas
* **Node.js** (Ambiente de execução)
* **Cypress** (Framework de automação de testes E2E)
* **JavaScript** (Linguagem base dos scripts)
* **Markdown** (Documentação técnica)

## Estrutura de Diretórios

 QA-Framework-UFMT
 
 ┣ 📂 cypress
 
 ┃ ┣ 📂 e2e             # Scripts de testes automatizados
 
 ┃ ┣ 📂 fixtures        # Massa de dados mockada
 
 ┃ ┗ 📂 support         # Comandos customizados
 
 ┣ 📂 docs              # Relatórios de Risco e Planilhas de ROI
 
 ┣ 📜 cypress.config.js # Configurações do framework
 
 ┣ 📜 package.json      # Dependências do projeto
 
 ┗ 📜 README.md         # Documentação principal
 
## Exemplo de Script de Automação (Cypress)
Abaixo, um exemplo da implementação de um teste focado na verificação de estabilidade do sistema para o usuário final:

    
          javascript
    describe ('Validação de Estabilidade - Fluxo Crítico', () => {
       it ('Deve carregar o sistema e validar o login sem falhas de timeout', () => {
   
     // Aplicação da métrica de confiabilidade
      cy.visit('https://ambiente-de-homologacao-exemplo.com');
     
           cy.get('#username').type('usuario_teste');
           cy.get('#password').type('senha_segura123');
           cy.get('#btn-login').click();

           // Verificação de tempo de resposta e integridade da UI
           cy.url().should('include', '/dashboard');
           cy.get('.status-sistema').should('contain', 'Operacional');
    
    });
    });


## Equipe Desenvolvedora
* Andressa Fernanda Santos Oliveira
* Daniel Barbosa dos Santos
* Eduardo Luis Silva Torres
* Elissandra Santos da Silva (Dev / QA)
* Fabio Gonzaga Zvir
* Laíse Vieira

---
*Projeto acadêmico desenvolvido para fins de extensão universitária - UFMT.*
