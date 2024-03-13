# Arquitetura da Solução

A Arquitetura da Solução, nada mais é que a definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

Sendo assim, conforme a ilustração esse é o Fluxo da Arquitetura aplicado ao projeto Personal Cash:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-personalcash/assets/126628545/dba1568b-9040-42b7-9337-db7623d91d76)

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

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-personalcash/assets/126628545/a89596c9-a86c-49c9-b146-b56008cae817)


# Modelo Entidade-Relacionamento

O Modelo ER, trata-se de um modelo conceitual usado para descrever entidades (coisas, objetos) envolvidos no domínio de um sistema a ser constreuído, incluindo seus atributos e relacionamentos. </br>
</br>
O Modelo Entidade-Relacionamento permite representar de forma abstrata a estrutura que irá constituir o banco de dados.

![Modelo ER E3](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-personalcash/assets/128739177/e27e0e4c-07f8-44aa-a60c-e7c4ff20ee3b)

# Esquema Relacional EM CONSTRUÇÃO)

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico EM CONSTRUÇÃO)

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

# Tecnologias Utilizadas EM CONSTRUÇÃO)

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

# Hospedagem EM CONSTRUÇÃO)

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

# Qualidade de Software 

A definição dos critérios de qualidade da aplicação Personal Cash foi realizada conforme a utilização da Norma de Qualidade de Produto de Software ISO/IEC 9126.

Dessa forma, foi levantado para o projeto seis características com três sub-características em cada tópico.

Logo abaixo é apresentado a justificação de todas as sub-características escolhidas pelo time e as métricas que permitirão a equipe avaliar os objetos de interesse.

# Métricas (EM CONSTRUÇÃO)
