# Arquitetura da Solução

A Arquitetura da Solução, nada mais é que a definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

O foco da aplicação Personal Cash é o Front-end, sendo assim, a ilustração abaixo é o Fluxo da Arquitetura que imaginamos aplicado ao projeto conforme os seguintes moldes:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-personalcash/assets/126628545/79aaf759-e3cb-406f-b156-81dd05a07733)

Abaixo a explicação do Fluxo da Arquitetura:

- **`1`º**: Os usuários realizam uma requisião por meio do Front-end ou do app mobile.
- **`2`º**: A requisição é consequentemente encaminhada para o Back-end que em seguida a processa.
- **`3`º**: O Back-end efetua uma série de operações que envolvem a leitura, a criação, a atualização ou a exclução de dados no MySql.
- **`4`º**: Posteriormente após o processamento uma resposta é instituída e encaminhada de volta para o Front-end ou Mobile.

Consequentemente, essa arquitetura permite uma emissão compreensível de todas as responsabilidades e facilita futuras melhorias separadamente em cada componente.

# Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

A seguir o diagrama de classe do projeto Personal Cash demonstra visualmente como será toda a estrutura do software, dessa forma, como cada uma das classes da sua estrutura estarão interligadas, para a sua construção foi utilizada a ferramenta Canva.

Todas essas classes demonstradas servem de um modelo com o objetivo de matrerializar os objetos que serão executados na memória.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-personalcash/assets/126628545/2b51c99f-b460-4fc9-97ea-4b661005eaf6)

# Modelo Entidade-Relacionamento

O Modelo ER, trata-se de um modelo conceitual usado para descrever entidades (coisas, objetos) envolvidos no domínio de um sistema a ser constreuído, incluindo seus atributos e relacionamentos. </br>
</br>
O Modelo Entidade-Relacionamento permite representar de forma abstrata a estrutura que irá constituir o banco de dados.

![Modelo ER E3-2](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-personalcash/assets/128739177/14641579-4599-4050-a0a2-fadc42a1cd57)

# Esquema Relacional 

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária. 

Assim, o Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa, logo abaixo o
Modelo ER do projeto Personal Cash.

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-personalcash/assets/126628545/c9577264-ff7e-4bab-8acd-bdb585bc85ef)

# Modelo Físico (EM CONSTRUÇÃO)

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

# Tecnologias Utilizadas 

Estas serão as tecnologias utilizadas para a criação, desenvolvimento e conclusão do projeto:

>- Linguagem utlizada para desenvolver o projeto: JavaScript;
>- Biblioteca utilizada: React;
>- IDE de desenvolvimento: Visual Studio Code;
>- Plataforma para hospedagem dos arquivos: GitHub;
>- Plataforma para hospedagem do projeto: GitHub Pages;
>- Ferramenta para crição do template: Figma;
>- Ferramenta para criação de diagramas: Draw.io;

# Hospedagem

## Utilizando o GitHub

- **1. `Repositório`**:

Foi criado um repositório no Github visando armazenar todo o código-fonte e a documentação do projeto. Assim fica totalmente viável a realização de alterações, permitindo uma colaboração entre todos os membros do time.

- **2.`Branching e Merging`**:

O recurso de Branching foi utilizado visando o desenvolvimento de novas funcionalidades e a correção de bugs. As alterações foram integradas no branch principal por meio de Pull Requests.

- **3.`CI/CD`**:
  
Uma pipeline de Integração Contínua/Entrega Contínua foi configurada visando automatizar os testes e outros checks antes de incorporar as alterações.

## Utilizando Github Pages e SQLite

A hospedagem do projeto vai ser realizado diretamente no Github Pages em conjunto com o SQLite para o armazenamento de todos os dados.

# Qualidade de Software 

A definição dos critérios de qualidade da aplicação Personal Cash foi realizada conforme a utilização da Norma de Qualidade de Produto de Software ISO/IEC 9126.

Dessa forma, foi levantado para o projeto seis características com três sub-características em cada tópico.

Logo abaixo é apresentado a justificação de todas as sub-características escolhidas pelo time e as métricas que permitirão a equipe avaliar os objetos de interesse.

**1.	Confiabilidade – Refere-se à capacidade que o software possui em manter o seu desempenho após falhas.**
| -------------------------------------------------------------------------------- |
| **Recuperabilidade:** Contextualiza sobre a capacidade do software recuperar os seus dados após uma situação de falha. Assim, é fundamental que não ocorra perdas de informações importantes ao usuário. Caso ocorra perdas, que não sejam dados essencialmente tão importantes. |
| **Maturidade:** É indicado a frequência da ocorrência das falhas. Quanto mais falhas o software tiver, menos maduro ele vai estar.
Isso é extremamente importante para o app, pois uma simples falha pode comprometer o sistema, sendo um fator impeditivo onde o Personal não consiga, por exemplo, gerenciar o fluxo das suas finanças. |
| **Tolerância a falhas:** É verificado o comportamento do software após uma possível falha, como a aplicação é focado em um controle monetário particular de um Personal, é muito importante que o software tenha uma reação adequada após uma falha onde o usuário não perca as suas informações primordiais. |

**2.	Funcionalidade – Certifica-se sobre um conjunto de funções determinadas a atender às necessidades definidas anteriormente nos requisitos estabelecidos.**
| ----------------------------------------------------------------------------------- |   
| **Segurança:** Condiz sobre a capacidade de proteção aos dados dos usuários. A aplicação recolhe e armazena informações financeiras relevantes ao Personal, a segurança é muito importante. Será avaliado sobre a segurança de acesso aos dados inseridos e a segurança da senha do usuário. |
| **Acurácia:** É avaliado se o app compõe os resultados precisos conforme o solicitado. Tendo em vista que a sua principal função é registrar o fluxo financeiro de toda a cartela de clientes do Personal.|
| **Adequação:** Verifica-se se o software exerce adequadamente a finalidade do seu objetivo e principalmente, se ele satisfaz o foco da aplicação que é o gerenciamento financeiro da carteira de clientes de Personal Trainers. |

**3.	Eficiência – É indicado sobre ao desempenho do software.**
| ----------------------------------------------------------------------------------- |
| **Conformidade:** Objetiva garantir que a aplicação forneça um serviço compatível com o desempenho desejado, será averiguado se os resultados de todas as pesquisas realizadas pelos usuários do aplicativo são precisos. |
| **Comportamento em relação ao tempo:** Condiz sobre ao tempo de resposta do software, por se tratar de um app móvel espera-se que todas as informações sejam rapidamente apresentadas na tela. Sendo assim, melhorar o desempenho da aplicação é extremamente importante. |
| **Utilização de Recursos:** Relaciona-se aos recursos necessários do app para viabilizar o que foi solicitado. É analisado a entrega de dados, garantindo um tempo plausível na exibição das informações ao usuário. |

**4.	Usabilidade – Corresponde sobre a facilidade de uso do software pelo usuário.**
| ----------------------------------------------------------------------------------- |
| **Atratividade:** Condiz sobre a capacidade do software em captar a atenção do usuário para demonstrar aspectos relevantes da aplicação. Como o app é uma ferramenta que visa auxiliar no gerenciamento financeiro do Personal, o foco está nos registros e na fácil visualização do controle das finanças cadastradas pelo usuário. |
| **Inteligibilidade:** É avaliado a capacidade do software transmitir a sua finalidade de uso, a aplicação visa ser acessível com um layout muito intuitivo para todos os usuários, independente do nível de conhecimento e da faixa etária. |
| **Apreensibilidade:** Refere-se ao esforço que o usuário necessita para aprender a utilizar a aplicação. O desenvolvimento do software deve ser realizado com o intuito de facilitar a aprendizagem, evitando adversidades na sua utilização. |


**5.	Portabilidade - Aborda sobre à capacidade do software ser transferido de um ambiente para outro.**
| ----------------------------------------------------------------------------------- |
| **Coexistência:** É verificado se o software pode funcionar corretamente com outros sistemas instalados. Vai ser analisado se existem conflitos com outros aplicativos e sistemas operacionais. |
| **Capacidade para substituir:** É determinado se o software pode substituir outro no ambiente operacional, tendo em vista que ele vai estar disponível para download em todas as plataformas móveis. |
| **Capacidade de instalação:** É avaliado a facilidade de instalação do software, pois, como é um aplicativo móvel, aqui é considerado as possíveis dificuldades que o usuário pode ter no momento da sua instalação. |

**6.	Manutenibilidade – Aborda ao esforço empregado para efetuar alterações no software.**
| ----------------------------------------------------------------------------------- |   
| **Modificabilidade:** Ao esforço prescrito para modificar o software. A estruturação do código e a documentação do mesmo vão ser analisados para existir uma facilitação na identificação de todas as funções necessárias. |
| **Testabilidade:** É avaliado todo o esforço prescrito para testar o software após as alterações, assim, o time de desenvolvimento vai realizar testes de usabilidade visando a garantia do funcionamento correto da aplicação. |
| **Analisabilidade:** É analisado o código para apontar a facilidade, ou, determinar uma dificuldade para mapear e identificar os problemas. Aqui é avaliado o esforço utilizado para analisar o projeto.. |

# Métricas 

Conforme as informações investigadas por futuros usuarios da aplicação Personal Cash e aplicando as características contextualizadas junto as subcaracterísticas definidas anteriormente, optamos pela a opção de escalas e porcentagens.

Assim, as respostas reveladas pelos usuários irão possuir os seguintes valores quantitativos conforme a opção confirmada:

- **`ESCALA: SIM // PARCIALMENTE // NÃO`**:

- **`SIM`**: Por volta de 100% até 70% de resposta.
- **`PARCIALMENTE`**: Por volta de 60% e 40% de resposta.
- **`NÃO`**: Por volta de30% e 0% de resposta.
