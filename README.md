# Adonis
Informações a respeito de JWT:
[text](https://www.youtube.com/watch?v=DPrhem174Ws)

## Auth
Caso queira alterar a chave primária de autenticação de um usuário é necessário alterar os nomes na tablea criada em migrations
[text](database/migrations/1709324540730_create_users_table.ts)
E também, é necessário alterar o UIDS em config -> auth
[text](config/auth.ts)
## Create AdonisJs project
npm init adonisjs@latest AdonisJs

## Settando o ambiente
Configurar o arquivo `docker-compose.yml`

### Configuração

```
version: '25.0.3'

services:
  database:
    image: mysql
    container_name: MB-Server
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 'root'
      MYSQL_DATABASE: 'api'
    ports:
      - '3306:3306'

```

Instalaçaõ geral
`npm i`

Linha de comando para subir o container *Docker*:
`docker-compose up -d`

Roda a última migration
`node ace migration:run`

Lista todas as rotas presentes na aplicação
`node ace list:routes`


## Adonis CLI
Roda o server
` node ace serve --watch`

Criar uma *Migration*
`node ace make:migration add_slug_column`

Criar uma *Migration* para *Editar uma tabela*
`node ace make:migration add_slug_column`


Desfaz a última migration
`node ace migration:rollback`

Cria um arquivo *Model*
`node ace make:model Post`

Cria um *Controler* com todos os recursos 
`node ace make:controller Posts -r`