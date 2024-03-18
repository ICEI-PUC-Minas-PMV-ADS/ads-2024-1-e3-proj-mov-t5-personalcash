# Plano de Testes de Software (Em construção)

O  Plano de Testes de Software é um documento que define as estratégias, os objetivos e as etapas necessárias para testar um software de forma a garantir que ele esteja funcionando corretamente e de acordo com os requisitos estabelecidos.

Deste modo, segue o Plano de Testes de Software da aplicação Personal Cash e os testes funcionais a serem realizados:

# 1º Caso de Teste: Realizar Cadastro

| Caso de Teste | CT-01 - Realizar cadastro |
|---------------|-----------------------------|
| Requisitos Associados | RF-001 - O aplicativo deve permitir que o usuário consiga realizar o seu cadastro |
| Objetivo do Teste | Verificar se o usuário consegue realizar o cadastro na aplicação |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Clicar na opção **Criar Conta** <br> - Informar o **Nome**, **E-mail** e **Senha** <br> - Em seguida, clicar na opção em **Cadastrar** |
| Critérios de Êxito | O usuário consegue acessar a página inicial. |

# 2º Caso de Teste: Realizar o Login

| Caso de Teste | CT-02 - Realizar o login |
|---------------|---------------------------------|
| Requisitos Associado | RF-002 - O aplicativo deve permitir que o usuário Personal Triner efetue o processo de Login |
| Objetivo do Teste | Verificar se o usuário consegue realizar o login na aplicação |
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - Informar o seu **E-mail** e **Senha** dados <br> - Clicar em **Logar** |
| Critérios de Êxito | O usuário consegue realizar o login. | 

# 3º Caso de Teste: Registrar os valores dos pagamentos de cada cliente.

| Caso de Teste | CT-03 - Registrar os valores de cada Cliente |
|------------------|-----------------------------------------|
| Requisitos Associado | RF-005 - O aplicativo deve permitir que o usuário registre os valores de pagamento de cada Cliente |
| Objetivo do Teste | Verificar se o usuário logado consegue cadastrar os valores a receber |
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar o **Login** <br> - Na página inicial **Home**, clicar nas opções **Cliente 1**, ou, **Cliente 2** <br> - Preencher o campo **Valor** e confirmar |
| Critérios de Êxito | O usuário consegue realizar o cadastro do valor a receber de um cliente. |

# 4º Caso de Teste:  Cadastrar os clientes

| Caso de Teste | CT-04 - Realizar o cadastro de clientes|
|------------------|-----------------------------------------|
| Requisitos Associado | RF-005 - Permitir o cadastro de clientes e os dados pessoais. |
| Objetivo do Teste | Verificar se o usuário consegue cadastrar clientes |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar login <br> - Na página inicial, o usuário deve clicar na  opção **Adicionar Cliente** <br> - Depois, inserir os dados pessoais do cliente: **Nome**, **Sobrenome**, **Apelido**, **Telefone**, **Endereço**, **Valor pago por treino** e **Turno do treino** <br> - Após preencher todos os campos, clicar em **Cadastrar**|
| Critérios de Êxito |O usuário consegue realizar o cadastro de clientes - |

# 5º Caso de Teste: Registar os treinos dos clientes

| Caso de Teste | CT-04 - Registrar os treinos dos clientes|
|------------------|-----------------------------------------|
| Requisitos Associado | RF-004 - Permitir o cadastro do turno e data do treino de cada cliente. |
| Objetivo do Teste | Verificar se o usuário consegue registrar o turno e a data do treino dos clientes |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar login <br> - Na página inicial, o usuário deve clicar na  opção **Treinos do Dia** <br> - Depois, clicar na opções **Clientes 1**, **Clientes 2** ou **Clientes 3** e inserir a data do treino e o **Turno** escolhido <br> - Concluir clicando na opção **Registrar**|
| Critérios de Êxito |O usuário consegue registrar o treino do cliente. |
