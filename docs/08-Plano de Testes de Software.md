# Plano de Testes de Software 

O  Plano de Testes de Software é um documento que define as estratégias, os objetivos e as etapas necessárias para testar um software de forma a garantir que ele esteja funcionando corretamente e de acordo com os requisitos estabelecidos.

Deste modo, segue o Plano de Testes de Software da aplicação Personal Cash e os testes funcionais a serem realizados:

# Caso de Teste: Realizar Cadastro

| Caso de Teste | CT-01 - Realizar cadastro |
|---------------|-----------------------------|
| Requisitos Associados | RF-001 - O aplicativo deve permitir que o usuário consiga realizar o seu cadastro |
| Objetivo do Teste | Verificar se o usuário consegue realizar o cadastro na aplicação |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Clicar na opção **Criar Conta** <br> - Informar o **Nome**, **E-mail** e **Senha** <br> - Em seguida, clicar na opção em **Cadastrar** |
| Critérios de Êxito | O usuário consegue acessar a página inicial. |

| Caso de Teste | CT-02 - Realizar cadastro com o E-mail inválido|
|---------------|-----------------------------|
| Requisitos Associados | RF-001 - O aplicativo não deve permitir que o usuário consiga realizar o seu cadastro, caso o e-mail informado seja inválido |
| Objetivo do Teste | Verificar se o usuário não consegue realizar o cadastro na aplicação |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Clicar na opção **Criar Conta** <br> - Informar o **Nome**, **E-mail** e **Senha** <br> - Em seguida, clicar na opção em **Cadastrar** |
| Critérios de Êxito | O usuário não vai conseguir realizar o cadastro e vai aparecer uma mensagem: "E-mail inválido" |

# Caso de Teste: Realizar o Login

| Caso de Teste | CT-03 - Realizar o login |
|---------------|---------------------------------|
| Requisitos Associado | RF-002 - O aplicativo deve permitir que o usuário Personal Triner efetue o processo de Login |
| Objetivo do Teste | Verificar se o usuário consegue realizar o login na aplicação |
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - Informar o seu **E-mail** e **Senha**<br> - Clicar em **Logar** |
| Critérios de Êxito | O usuário consegue realizar o login. | 

| Caso de Teste | CT-04 - Realizar o login com E-mail errado|
|---------------|---------------------------------|
| Requisitos Associado | RF-002 - O aplicativo deve permitir que o usuário Personal Triner efetue o processo de Login |
| Objetivo do Teste | Verificar se o usuário consegue realizar o login na aplicação informando o seu e-mail|
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - Informar o seu **E-mail** e **Senha**<br> - Clicar em **Logar** |
| Critérios de Êxito | O usuário não vai conseguir realizar o cadastro e vai aparecer uma mensagem: **"E-mail inválido"** |

| Caso de Teste | CT-05 - Realizar o Login com a senha errada|
|---------------|---------------------------------|
| Requisitos Associado | RF-002 - O aplicativo deve permitir que o usuário Personal Trainer efetue o processo de Login |
| Objetivo do Teste | Verificar se o usuário consegue realizar o login na aplicação informando a sua senha |
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - Informar o seu **E-mail** e **Senha**<br> - Clicar em **Logar** |
| Critérios de Êxito | O usuário não vai conseguir realizar o cadastro e vai aparecer uma mensagem: **"Senha inválida"** |


(EM CONSTRUÇÃO)

# º Caso de Teste: Registrar os valores dos pagamentos de cada cliente.

| Caso de Teste | CT-0 - Registrar os valores de cada Cliente |
|------------------|-----------------------------------------|
| Requisitos Associado | RF-005 - O aplicativo deve permitir que o usuário registre os valores de pagamento de cada Cliente |
| Objetivo do Teste | Verificar se o usuário logado consegue cadastrar os valores a receber |
| Instruções | - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar o **Login** <br> - Na página inicial **Home**, clicar nas opções **Cliente 1**, ou, **Cliente 2** <br> - Preencher o campo **Valor** e confirmar |
| Critérios de Êxito | O usuário consegue realizar o cadastro do valor a receber de um cliente. |

# 4º Caso de Teste:  Cadastrar os clientes

| Caso de Teste | CT-0 - Realizar o cadastro de clientes|
|------------------|-----------------------------------------|
| Requisitos Associado | RF-005 - Permitir o cadastro de clientes e os dados pessoais. |
| Objetivo do Teste | Verificar se o usuário consegue cadastrar clientes |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar login <br> - Na página inicial, o usuário deve clicar na  opção **Adicionar Cliente** <br> - Depois, inserir os dados pessoais do cliente: **Nome**, **Sobrenome**, **Apelido**, **Telefone**, **Endereço**, **Valor pago por treino** e **Turno do treino** <br> - Após preencher todos os campos, clicar em **Cadastrar**|
| Critérios de Êxito |O usuário consegue realizar o cadastro de clientes - |

# º Caso de Teste: Registar os treinos dos clientes

| Caso de Teste | CT-0 - Registrar os treinos dos clientes|
|------------------|-----------------------------------------|
| Requisitos Associado | RF-004 - Permitir o cadastro do turno e data do treino de cada cliente. |
| Objetivo do Teste | Verificar se o usuário consegue registrar o turno e a data do treino dos clientes |
| Instruções| - Acessar o navegador <br> - Informar ao navegador a URL <br> - Efetuar login <br> - Na página inicial, o usuário deve clicar na  opção **Treinos do Dia** <br> - Depois, clicar na opções **Clientes 1**, **Clientes 2** ou **Clientes 3** e inserir a data do treino e o **Turno** escolhido <br> - Concluir clicando na opção **Registrar**|
| Critérios de Êxito |O usuário consegue registrar o treino do cliente. |

# Indicadores de Desempenho e Metas para o Processo de Negócio

# 1º Indicador: Histórico de clientes e Previsão de Crescimento / Porcentagem

Com um pequeno histórico na sua carteira de clientes, o Personal Trainer já vai ter alguns dados para projetar uma previsão de crescimento ao seu negócio. Assim, é possível efetuar uma análise de forma estratégica utilizando uma Previsão de Crescimento de modo a utilizar esses dados na sua tomada de decisão.

Dessa forma, por exemplo, é importante que o Personal consiga acompanhar o crescimento da sua carteira de clientes de forma mensal. 

Para isso, inicialmente pensando em uma projeção um crescimento de clientes em %, basta o Personal seguir a fórmula:

**Fórmula do Histórico e Previsão de Crescimento / Porcentagem:**

- `Número de Clientes Mês Atual => Previsão de Crescimento Mês Seguinte = Clientes novos mês`

**Exemplo prático:**

Um Personal tem 20 clientes ativos em Março de 2024 **=>** Objetivo de Crescimento de 5% em Abril 2024 **=** ???

Dessa forma basta multiplicar o valor (20 clientes) pela porcentagem (5%) e então dividir o resultado por 100.
Assim, 5% de 20 clientes = 20 × 5 / 100 = 20 × 0,05 = 1 cliente.

Logo, se o Personal Trainer tem 20 clientes ativos em Março de 2024 busca um crescimento de 5% para o mês de Abril de 2024, ele teria que captar mais 1 novo aluno para a sua carteira de clientes.

# 2º Indicador: Custo de Aquisição de Clientes (CAC)

Para o Personal Trainer entender quanto cada cliente custa é uma importante métrica para verificar futuros investimentos em Marketing e Venda.

Mas se o custo de aquisição for muito elevado é provável que essa situação possa comprometer o lucro e o crescimento do negócio. 

Dessa forma, por exemplo, é importante que o Personal consiga acompanhar o Custo de Aquisição de Clientes (CAC).

**Fórmula do CAC:**

- `CAC (em R$) = investimentos totais em marketing e vendas ÷ número de clientes adquiridos no mesmo período`

**Exemplo prático:**

Um Personal Trainer, em um trimestre, investiu R$ 5.000 nas áreas de Marketing Digital via Google Ads e Instagram Ads. Nesse investimento ele conquistou 10 clientes novos. 

Dessa forma, R$5.000 Investimentos em Marketing Digital via Google Ads e Instagram Ads % 10 clientes novos = R$500.

Logo, o CAC do Personal Trainer foi de R$ 500.

# 3º Indicador: Churn Rate

A taxa de rotatividade de clientes para o Personal Trainer é uma medida de proporção importante para o controle do seu negócio, por isso, é um dos fatores principais que determinam o nível estável de clientes que ele vai conseguir atender.

O Churn Rate é um indicador que representa o número de clientes e o percentual que cancelam o serviço. 

Com um simples cadastro na carteira de clientes do Personal é possível calcular esse importante indicador.

**Fórmula do Churn Rate:**

- `Churn Rate (em %) = Quantidade de clientes ativos no início de um mês ÷ Cancelamentos realizados no final do mesmo mês ×100`

**Exemplo prático:**

Um Personal Trainer no inicio do mês de Março de 2024 tinha 20 clientes ativos. 
Porém, no fim do mês de Março de 2024 3 clientes não vão continuar treinando com ele.

Dessa forma, 20 Clientes ativos no ínicio do mês de Março 2024 % 3 Clientes vão cancelar os treinos no mês de Março 2024 x100

Logo, nesse caso a perca de 3 clientes ao Personal Trainer vai representar um Churn Rate de 15%.

# 4º Indicador: Taxa de Conversão de Vendas

A taxa de conversão de vendas é um insumo relevante que pode ajudar o Personal Trainer, de uma maneira prática, quantos clientes entram em contato com o Personal via telefone?
Quantas pessoas encaminham uma mensagem ao seu Instagram?

Esses números podem viabilizar uma definição de metas ao prórpio negócio além de melhorias em seu serviço visando prover mais resultados para ele Personal, quando for realizar a venda em contato direto com as pessoas.

**Fórmula da Taxa de Conversão de Vendas:**

- `Taxa de Conversão (%) = (Número de Conversões / Total de Pessoas que entram em contato) x 100`

**Exemplo prático:**

Um Personal teve o contato de 40 pessoas no mês de Março de 2024 via Instagram e Telefone.
Dessas 40 pessoas, o Personal conseguiu converter a venda dos seus serviços para novos 6 clientes.

Dessa forma: 40 clientes (%) = (6 números de Conversões) x 100 = 15%.

O Personal Trainer teve 6 conversões em vendas, nesse caso, a sua tava representou 15%.

# 5º Indicador: Indicações + Agendamento + Vendas

**Indicações**

Cada vez mais, ter indicações é uma questão de sobrevivência no âmbito dos negócios, e como Personal Trainer a indicação em si é muito importante, pois ao contrário das visitas em aulas e contatos espontâneos, as indicações são uma forma ativa de atrair cada vez mais novos clientes.

Segundo a Tecnofit em seu Guia Prático de Indicadores para Gestão Fitness (2024)[^1], ao contrário das visitas espontâneas, as indicações são uma forma ativa de atrair novos clientes. E, para que isso aconteça, é preciso ter uma estratégia de atuação em conjunto entre indicações, agendamentos e vendas (TECNOFIT, 2024).

Agorando esses indicadores, o Personal pode começar por novas INSCRIÇÕES (ou CONVIDADOS), assim, ele pode pedir aos seus alunos que estão se tornando clientes ativos a indicação de outras pessoas. Uma das primeiras coisas nesse caso que o cliente pede antes de efetuar uma INSCRIÇÃO (ou CONVIDADO) é um desconto.

Então, o Personal pode oferecer um desconto ao aluno já ativo em sua cartela de clientes em troca da indicação.

Esta é uma maneira de ambos os lados obterem um benefício. Após pedir as indicações, o Personal precisa entrar em contato para dar continuidade com a sua estratégia de venda.

**Exemplo prático Indicações:**

- `Número estabelecido de 3 INDICAÇÕES por venda`
- `Se existe 45 RENOVAÇÕES + 60 novas INSCRIÇÕES = 105 clientes`
- `105 clientes x 3 INDICAÇÕES POR VENDAS = 315 INDICAÇÕES/MÊS`

**Agendamentos + Vendas**

Agora o primeiro passo para fazer os agendamentos é explicar o porquê está ligando e quem deu o contato da pessoa.

O Personal pode oferecer a mesma condição de desconto que ofereceu ao aluno que o indicou para aumentar o interesse dele. Mas em um primeiro momento o Personal pode convidar para ele conhecer a sua assessoria, e agendar, por exemplo, uma aula experimental. 

Assim, as chances do Personal fechar uma venda podem ser ampliadas devido a sua assessoria personalizada e a exposição direta das qualidades dos seus serviços.

Esse processo é de médio a longo prazo, pois é necessário ter uma agenda com todas as indicações, entrar em contato e confirmar se a pessoa vai participar de uma assessoria experimental.

Esse ciclo deve ser constante, é um procedimento que com uma continuidade pode resultar bons resultados.

**Exemplo prático Indicações + Agendamento + Vendas**

- `Das 315 INDICAÇÕES > Se conseguir 30% de DE SUCESSO  = 95 CONTATOS`
- `Dos 95 CONTATOS > Se conseguir 30% DE SUCESSO = Cerca de 28 PESSOAS agendando uma aula experimental`
- `Converter 50% = 14 vendas`

[^1]: https://s3-sa-east-1.amazonaws.com/tecnofit-site/media/files/2019/10/17153859/GUIA_PRATICO_DE_INDICADORES_PARA_GESTAO_FITNESS-compactado.pdf?utm_source=SiteTecnofit&utm_medium=email&utm_campaign=EbookIndicadoresPerformance&utm_term=aquisicao&utm_content=ebook
