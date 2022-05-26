# Pizzaria

## Relatório do projeto

[CLIQUE PARA ABRIR O RELATÓRIO DO PROJETO](https://docs.google.com/document/d/137GubXS3HyKLAk3oGIvqLc2T_CFyy_A9/edit?usp=sharing&ouid=115879622815069047243&rtpof=true&sd=true)

## Informações básicas sobre o projeto:

  - A aplicação baseia-se em um ecommerce de pizzas, com diversos produtos, no qual o usuário deve se cadastrar para realizar suas compras;  
  - No Painel Restrito, o usuário logado realiza o CRUD das pizzas que aparecem no catálogo do site; 
  - A interface foi desenvolvida utilizando o framework Angular;
  - O projeto segue o padrão MVC;
  - Foi implementado o CRUD com PHP na parte de cadastro, login e catálogo de pizzas;
  - A criação do BD foi realizada pela interface phpMyAdmin disponibilizada pelo Xampp;
  - O servidor do front está configurado local na porta 4200;
  - O servidor do back está configurado local na porta 8080;
  - Quando o usuário realiza Login nos sistemas, será gerado um código JWT, para que o mesmo possa continuar logado por determinado tempo;
  - Há validação do Token para acesso ao Painel Restrito, onde é apresentado uma lista das pizzas cadastradas no sistema. 
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

#### Requisitos para a instalação do backend
O servidor do banco foi configurado de forma local (localhost) e utilizando o gerenciador MySQL. A comunicação com o banco ocorre pela linguagem PHP e o servidor foi configurado pelo Apache. Para rodar o código deve ser instalado o ambiente [XAMPP](https://www.apachefriends.org/index.html), sendo que neste trabaho foi uitlizada a versão 8.1.4 para Windows e Linux.


Após a instalação deve ser criado uma pasta `api` no `htdocs` do repositório do xampp. Nesta pasta ficam os códigos em php para comunicação com o banco. Assim a pasta `api` deste repositório remoto deve ser copiada e colada no `htdocs`. 

As configurações do banco devem ser definidas no arquivo config.php na pasta `api`. Para criar o banco e a tabela se sugere usar a interface phpMyAdmin disponibilizado pelo xampp. O script utilizado para criar o banco de usuários está no arquivo banco-cadastro.txt e para o banco das pizzas no banco-pizzas.txt. Após gerar manualmente a base e a tabela, as configurações devem ser atualizadas no config.php. No exemplo nomeamos a base como `aulabd` e a tabela como `cadastro` para a base de usuários e a tabelas das pizzas como `pizzas`.

Neste trabalho foi utilizado o [Composer](https://getcomposer.org/) `version 2.3.5` como gerenciador de pacotes. Após instalação e autilização do comando `composer init` adicione as seguintes linhas no arquivo `composer.json`:

  "autoload": {     
          "classmap": ["./"],
          "file":["config.php"]
      }

Com o comando `composer install` é gerada a pasta `vendor` onde ficam salvas as dependências. 

Para configurar as rotas transparentes pode ser utilizado como referência o material disponibilizado pelo professor 
[CLIQUE PARA ABRIR O TUTOTIAL ROTAS TRANSPARENTES](https://drive.google.com/file/d/1Ab_Kl0K8bg_8Y3PVRcqtMHtyOq9k1MCt/view?usp=sharing). Nesta configuração utilizamos tanto o `nome do projeto` quanto o `ServerName` como `api`.

Faça a instalação dos seguintes pacotes: 
  composer require pecee/simple-router
  composer require symfony/serializer
  composer require symfony/property-access
  composer require symfony/validator
  composer require doctrine/annotations
  composer require symfony/cache

Para carregar as classes para o autoload utilize o comando `composer dump-autoload`.

#### Como configurar o projeo

Depois de instalar todos os requisitos, deve-se abrir o terminal na pasta do projeto `api` e entrar com o comando `php -S localhost:8080`.

Após a compilação, o Backend será disponibilizado na porta `8080`

