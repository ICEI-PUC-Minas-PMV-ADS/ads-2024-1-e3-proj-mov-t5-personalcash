# Plano de Testes de Usabilidade

O teste de usabilidade nada mais é que uma maneira de provar a consistência e a solidez de uma interface ao colocá-la para uso em situações comuns do cotidiano da sua utilização. 

Ou seja, entendemos que é um teste que busca compreender como o sistema se comporta no dia a dia, na naturalidade da sua utilização e principalmente se ele atende aos requisitos estabelecidos na construção do software.

Assim, o teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. Consequentemente, o Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

# Método

O método empregado será o de Medição e Avaliação. 

Além disso, encaminharemos um questionário via Google Forms onde o grupo vaia selecionar usuários ativos no mundo da tecnologia e também aqueles usuários com um conhecimento básico e objetivo ao acessar as plataformas digitais em sua simples rotina diária.

# Tarefas Propostas

| **Número da Tarefa** | **Descrição da Tarefa** | **Objetivo da Tarefa** | **Critério de Sucesso** |
| :------------: | :---------------------: | :-----------------------: | :-----------------------: |
| 01 | Criar uma conta de usuário. | Identificar se existem dificuldades no cadastro via app, avaliar se o layout e o fluxo são intuitivos.| Terminar o cadastro sem expressar dificuldades durante esse processo.|
| 02 | Realizar o login no aplicativo e conseguir acessar a próxima página "Home" do app. | Identificar se existem dificuldades no login via app e ao direcionamento na página "Home" na sequência, avaliar se o layout e o fluxo são intuitivos.| Terminar o login e acessar a página "Home" do app sem expressar dificuldades durante esse processo.|
| 03 | Acessar a página de Registros dos Clientes no aplicativo. | Identificar se existem dificuldades no acesso na página de Registro dos Clientes e na sequência, avaliar se o layout e o fluxo são intuitivos.| Acessar a página "Registros dos Clientes" do app sem expressar dificuldades durante esse processo.|
| 04 | Acessar a página de Cadastro de Clientes e adicionar clientes no aplicativo. | Identificar se existem dificuldades no acesso na página de "Registro de Clientes" e na sequência, avaliar se o layout e o fluxo são intuitivos para confirmar essa operação.| Acessar a página "Registros dos Clientes" do app e adicionar clientes sem expressar dificuldades durante esse processo.|




**INSERIR PRINT DO GOOGLE FORMS CRIADO** (EM CONSTRUÇÃO)

Os usuários testados vão responder às seguintes perguntas demonstradas abaixo:

    1.  Gostaria de utilizar esse sistema com muito mais frequência.**
    2.  Achei o sistema muito fácil de usar.
    3.  Achei o sistema desnecessariamente complexo.
    4.  Pensei que fosse necessário o suporte de algum especialista técnico para usar esse sistema.
    5.  Todas as funções do sistema estão muito bem integradas na plataforma.
    6.  Achei o sistema muito inconsistente na sua navegabilidade.
    7.  Acredito que qualquer pessoa consegue aprender a usar o sistema de forma ágil, sem problemas de aprendizado.
    8.  Achei o sistema difícil de usar.
    9.  Me senti confiante ao acessar o sistema.
    10. Eu preciso aprender muitas regras de navegabilidade para continuar usando este sistema.
    11. Eu me senti acolhido e confortável com o sistema.
    12. É fácil e acessível encontrar as informações que eu precisava.
    13. Eu achei positiva a experiência de usar a interface proposta pelo sistema.
    14. A experiência do usuário na interface do sistema é agradável.
    15. As informações e a organização na tela do sistema é de fácil entendimento.

Cada pergunta acima exposta no questionário contém cinco opções de respostas para os participantes:

| Opções | Respostas | 
| ----------------- | ----------------- |
| 1)  | Concordo Totalmente|
| 2)  | Concordo|
| 3)  | Neutro|
| 4)  | Discordo|
| 5)  | Discordo Totalmente|

**INSERIR PRINT DAS RESPOSTAS ENCAMINHADAS VIA FORMS**


# Caso de Teste  (EM CONSTRUÇÃO)

Conforme as informações adquiridas pelo Questionário do Google Forms após o acesso dos usuários, a equipe de Desenvolvimento da aplicação realizará os possíveis ajustes no aplicativo e melhorias na plataforma:
 
|  1° Caso de Teste 	| **CT-01 - Performance**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RNF-006- A aplicação deve carregar todas as telas em no máximo 5 segundos.   |
| Objetivo do Teste 	| Confirmar agilidade e uma boa Performance da aplicação |
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - **Logar** na aplicação** <br> - Acessar todas as telas disponíveis do app| Aguardar no máximo 5 segundos para carregar cada tela| 
| Critério de Êxito  | O usuário espera no máximo 5 segundos para carregar cada tela nas opções de acesso do App|

| 2º Caso de Teste | CT-02 - Usuário |
|---------------|---------------------------------|
| Requisitos Associado | RF-002 - O aplicativo deve permitir que o usuário Personal Trainer efetue o processo de Login |
| Objetivo do Teste | Verificar se o usuário consegue realizar o login na aplicação |
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - Informar o seu **E-mail** e **Senha** dados <br> - Clicar em **Logar** |
| Critérios de Êxito | O usuário consegue realizar o login. | 

| 3º Caso de Teste | CT-03 - Cliente |
|------------------|-----------------------------------------|
| Requisitos Associado | RF-005 - O aplicativo deve permitir que o usuário registre os valores de pagamento de cada Cliente |
| Objetivo do Teste | Verificar se o usuário logado consegue cadastrar os valores a receber |
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar o **Login** <br> - Na página inicial **Home**, clicar nas opções **Cliente 1**, ou, **Cliente 2** <br> - Preencher o campo **Valor** e confirmar |
| Critérios de Êxito | O usuário consegue realizar o cadastro do valor a receber de um cliente. |

| 4º Caso de Teste | CT-04 - Cliente|
|------------------|-----------------------------------------|
| Requisitos Associado | RF-003 - Permitir o cadastro de clientes e os dados pessoais. |
| Objetivo do Teste | Verificar se o usuário consegue cadastrar clientes |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar login <br> - Na página inicial, o usuário deve clicar na  opção **Adicionar Cliente** <br> - Depois, inserir os dados pessoais do cliente: **Nome**, **Sobrenome**, **Apelido**, **Telefone**, **Endereço**, **Valor pago por treino** e **Turno do treino** <br> - Após preencher todos os campos, clicar em **Cadastrar**|
| Critérios de Êxito |O usuário consegue realizar o cadastro de clientes - |

| 5º Caso de Teste | CT-05 - Cliente|
|------------------|-----------------------------------------|
| Requisitos Associado | RF-004 - Permitir o cadastro do turno e data do treino de cada cliente. |
| Objetivo do Teste | Verificar se o usuário consegue registrar o turno e a data do treino dos clientes |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar login <br> - Na página inicial, o usuário deve clicar na  opção **Treinos do Dia** <br> - Depois, clicar na opções **Clientes 1**, **Clientes 2** ou **Clientes 3** e inserir a data do treino e o **Turno** escolhido <br> - Concluir clicando na opção **Registrar**|
| Critérios de Êxito |O usuário consegue registrar o treino do cliente. |
