# TO-DO List

Informações sobre o teste.

**URL API** http://localhost/quero-ser-quality/todo-list-api/public

**URL APP Front-end** http://localhost:8080

## todo-list-api 

Api desenvolvida em Laravel + Mysql.

**Configurações do bando de dados**

Arquivo de configuração encontra-se na raiz do diretório:

**/todo-list-api/**

Configurei o banco com as infromações abaixo:

Nome do arquivo que configura o banco: **.env**.

```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo_list_quality
DB_USERNAME=root
DB_PASSWORD=''
```
**O backup do bando encontra-se no diretório raiz**

Nome do arquivo: **todo_list_quality.sql**

## todo-list-app

Sobre o front-end.

**/todo-list-api/**

Comando para instalar as dependências:

```cmd
npm install
```
Comando para startar o servidor:

```cmd
npm run build
```
Comando para gerar o bundle.js para produção:

```cmd
npm run build:prod
```