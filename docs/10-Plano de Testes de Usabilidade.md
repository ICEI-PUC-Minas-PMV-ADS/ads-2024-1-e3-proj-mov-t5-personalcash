# Plano de Testes de Usabilidade

O teste de usabilidade nada mais é que uma maneira de provar a consistência e a solidez de uma interface ao colocá-la para uso em situações comuns do cotidiano da sua utilização. 

Ou seja, entendemos que é um teste que busca compreender como o sistema se comporta no dia a dia, na naturalidade da sua utilização e principalmente se ele atende aos requisitos estabelecidos na construção do software.

Assim, o teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. Consequentemente, o Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

Dessa forma, para o projeto Personal Cash, iremos utilizar o modelo de perguntas via Google Forms, vamos selecionar usuários ativos no mundo da tecnologia e também um representante do público-alvo central do nosso projeto, um Personal trainer.

**INSERIR PRINT DO GOOGLE FORMS CRIADO**

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


# Caso de Teste  (EM CONSTRUÇÃO..)

Conforme as informações adquiridas pelo Questionário do Google Forms, a equipe de Desenvolvimento da aplicação realizará os possíveis ajustes no aplicativo e melhorias na plataforma:
 
| **Caso de Teste** 	| **CT-12 - Navegadores**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RNF-04- A aplicação deve ser totalmente compatível com os principais navegadores utilizados do mercado (Google Chrome, Mozila Firefox, Microsoft Edge, Apple Safari e Opera).   |
| Objetivo do Teste 	| Confirmar se o usuário consegue visualizar a aplicação interativa em outros navegadores.                                     |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site<br>3. Testar a aplicação em outros navegadores                      |
| Critério de Êxito  | A aplicação demonstra ser totalmente compatível com os principais navegadores do mercado.   

| **Caso de Teste** 	| **CT-13 - Usuários**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RNF-005	Não é permitido o recebimento de cadastros de usuários com todos aqueles dados necessários.   |
| Objetivo do Teste 	| Confirmar se o usuário consegue cadastrar sem preencher qualquer dado descrito, deixando em branco essa opção.                                     |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site<br>3. Acessar "registrar" <br> 4. Tentar cadastrar um usuário sem dado algum. <br> 5. salvar dados após essa tentativa|
| Critério de Êxito  | Não vai ser permitido o cadastro do usuário nesse caso, pois é necessário preencher e confirmar todos os dados.     | 

| **Caso de Teste** 	| **CT-14 - Erro de Login e Cadastro**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RNF-006	A aplicação deve informar de forma instantânea o erro de login e de cadastro para aquele usuário caso os dados informados não estejam dentro do banco de dados.
| Objetivo do Teste 	| Confirmar ao realizar o cadastro ou login se algum erro ou falha vai ser emitido.                                   |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site<br>3. Efetuar o cadastro de forma errada. <br> 4. Verificar se é demonstrado alguma falha.|
| Critério de Êxito  | Vai ser retornado uma falha no registro do usuário em questão.      

| **Caso de Teste** 	| **CT-15 - Responsividade**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RNF-002	A aplicação deverá ser totalmente responsiva permitindo a visualização em diferentes telas de navegação (PC, Smartphones, Tablets, iPads, E-Reader etc) de forma proporcional ao layout e adequada   |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar a aplicação em diferentes aparelhos. Assim, confirmando se a aplicação é totalmente responsiva.                                     |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site<br>3. Testar a aplicação em PC, Smartphones, Tablets, iPads, E-Reader e em outros diversos aparelhos.                     |
| Critério de Êxito  | Todos os meios de acesso da aplicação é responsiva em celulares, tabletes, computadores entre outros.                                  | 





