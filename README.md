# Pizzaria

## Relatório do projeto

[CLIQUE PARA ABRIR O RELATÓRIO DO PROJETO](https://docs.google.com/document/d/137GubXS3HyKLAk3oGIvqLc2T_CFyy_A9/edit?usp=sharing&ouid=115879622815069047243&rtpof=true&sd=true)

## Informações básicas sobre o projeto:

  - A aplicação baseia-se em um ecommerce de pizzas, com diversos produtos, no qual o usuário deve se cadastrar para realizar suas compras;  
  - A interface foi desenvolvida utilizando o framework Angular;
  - O projeto segue o padrão MVC;
  - Foi implementado o CRUD com PHP na parte de cadastro e login;
  - A criação do BD foi realizada pela interface phpMyAdmin disponibilizada pelo Xampp;
  - O servidor está configurado local na porta 4200;
  - Quando o usuário realiza Login nos sistemas, será gerado um código JWT, para que o mesmo possa continuar logado por determinado tempo;
  - Há validação do Token para acesso ao Painel Restrito, onde é apresentado uma lista dos usuários cadastrados. 
  - OBS: A função base64Erlencode do JWT serve para remover certos caracteres, que no próprio site JWT, pode-se realizar a decodificação do mesmo. Sem essa função a assinatura seria inválida.

# Configurações

## Configurações Frontend Angular 

Esse projeto foi desenvolvido utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 12.0.2.

#### Requisitos para a instalação do frontend

    angular-cli v.12.0.2 - https://github.com/angular/angular-cli
    node v.16.10.0 - https://nodejs.org/en/
    npm v8.1.14 - https://www.npmjs.com/
    git v2.25.1 - https://git-scm.com/
    
#### Como configurar o projeo

Depois de instalar todos os requisitos, deve-se abrir o projeto na pasta que abriga o arquivo package.json e no terminal entrar com os comandos `npm start`.

Após a compilação, por padrão o Frontend será disponibilizado na porta `4200`

## Configurações Backend PHP e MySQL

O servidor do banco foi configurado de forma local (localhost) e utilizando o gerenciador MySQL. A comunicação com o banco ocorre pela linguagem PHP e o servidor foi configurado pelo Apache. Para rodar o código deve ser instalado o ambiente [XAMPP](https://www.apachefriends.org/index.html), sendo que neste trabaho foi uitlizada a versão 8.1.4 para Windows e Linux.


Após a instalação deve ser criado uma pasta `api` no `htdocs` do repositório do xampp. Nesta pasta ficam os códigos em php para comunicação com o banco. Assim a pasta `api` deste repositório remoto deve ser copiada e colada no `htdocs`. 

As configurações do banco devem ser definidas no arquivo config.php na pasta `api`. Para criar o banco e a tabela se sugere usar a interface phpMyAdmin disponibilizado pelo xampp. O script utilizado está no arquivo banco-cadastro.txt. Após gerar manualmente a base e a tabela, as configurações devem ser atualizadas no config.php. No exemplo nomeamos a base como `aulabd` e a tabela como `cadastro`.
