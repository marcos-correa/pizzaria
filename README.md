# Pizzaria

## Configurações Front End Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Configurações Backend PHP e MySQL

O servidor do banco foi configurado de forma local (localhost) e utilizando o gerenciador MySQL. A comunicação com o banco ocorre pela linguagem PHP e o servidor foi configurado pelo Apache. Para rodar o código deve ser instalado o ambiente xampp:
https://www.apachefriends.org/index.html

Após a instalação deve ser criado uma pasta "api" no "htdocs" do repositório do xampp. Nesta pasta ficam os códigos em php para comunicação com o banco. Assim a pasta "api" deste repositório remoto deve ser copiada e colada no "htdocs". 

As configurações do banco devem ser definidas no arquivo config.php na pasta "api". Para criar o banco e a tabela se suegere usar a interface phpMyAdmin disponibilizado pelo xampp. O script utilizado está no arquivo banco-cadastro.txt. Após gerar manualmente a base e a tabela, as configurações devem ser atualizadas no config.php. No exemplo nomeamos a base como "aulabd" e a tabela como "cadastro".