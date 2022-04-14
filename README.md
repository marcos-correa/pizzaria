# Pizzaria

## Informações básicas sobre o projeto:

	- A aplicação baseia-se em um ecommerce de pizzas, com diversos produtos, no qual o usuário deve se cadastrar para realizar suas compras;  
  - A interface foi desenvolvida utilizando o framework Angular;
  - O projeto segue o padrão MVC;
  - Desenvolvemos uma API, para realizar as comunicações entre a interface e o 
  - Foi implementado o CRUD com PHP na parte de cadastro e login;
  - A criação do BD foi realizada pela interface phpMyAdmin disponibilizada pelo Xampp;
  - O script está localizado no arquivo banco-cadastro.txt;
  - Utilizamos a função md5 que o BD oferece na senha;
  - O servidor está configurado local na porta 4200;
  - O  “sistemas de Pizza” que permite o usuário montar a sua está ausente nesse primeiro projeto;
  - Quando o usuário realiza Login nos sistemas, será gerado um código JWT, para que o mesmo possa continuar logado por determinado tempo;
  - Informações são salvas dentro do próprio navegador para que o usuário possa a vir recuperá-las;
  - Há tratamentos de erros, e exibições de mensagens para o usuário entender o processo;
  - Há validação do Token para acesso ao Painel Restrito, onde é apresentado uma lista dos usuários cadastrados. 
	- OBS: A função base64Erlencode do JWT serve para remover certos caracteres, que no próprio site JWT, pode-se realizar a decodificação do mesmo. Sem essa função a assinatura seria inválida.


## Configurações Front End Angular 

Esse projeto foi desenvolvido utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 12.0.2.

#### Requisitos para a instalação do propjeto

    angular-cli v.12.0.2 - https://github.com/angular/angular-cli
    node v.16.10.0 - https://nodejs.org/en/
    npm v8.1.14 - https://www.npmjs.com/
    git v2.25.1 - https://git-scm.com/
    
#### Como configurar o projeo

Depois de instalar todos os requisitos, deve-se abrir o projeto na pasta que abriga o arquivo package.json e no terminal entrar com os comandos `npm start` ou `ng serve`.

Após a compilação, por padrão o Frontend será disponibilizado na porta `4200`

## Configurações Backend PHP e MySQL

O servidor do banco foi configurado de forma local (localhost) e utilizando o gerenciador MySQL. A comunicação com o banco ocorre pela linguagem PHP e o servidor foi configurado pelo Apache. Para rodar o código deve ser instalado o ambiente xampp:
https://www.apachefriends.org/index.html

Após a instalação deve ser criado uma pasta "api" no "htdocs" do repositório do xampp. Nesta pasta ficam os códigos em php para comunicação com o banco. Assim a pasta "api" deste repositório remoto deve ser copiada e colada no "htdocs". 

As configurações do banco devem ser definidas no arquivo config.php na pasta "api". Para criar o banco e a tabela se suegere usar a interface phpMyAdmin disponibilizado pelo xampp. O script utilizado está no arquivo banco-cadastro.txt. Após gerar manualmente a base e a tabela, as configurações devem ser atualizadas no config.php. No exemplo nomeamos a base como "aulabd" e a tabela como "cadastro".