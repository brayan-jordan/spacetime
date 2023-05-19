# Spacetime Server
Servidor back-end completo, contendo autenticação que conecta com o Github e validação de JWT para controlar as rotas e o acesso ao conteúdo. As bibliotecas utilizadas para o desenvolvimento da aplicação foram: [fastify](https://www.fastify.io/), [prisma](https://www.prisma.io/docs/concepts/components/prisma-client), [axios](https://www.npmjs.com/package/axios), etc.
## Instalação das dependências
```bash
$ npm install
```
## Configurando a aplicação
É necessário definir o arquivo `.env` para configurar o ambiente da aplicação, as configuração obrigatórias são:
```.env
# Caminho da base de dados SQLite (ex: file:./dev.db)
DATABASE_URL=**********

# Informações do oAuth app que deve ser criado no Github
GITHUB_CLIENT_ID=**********
GITHUB_CLIENT_SECRET=**********
```
## Migrando a configuração do banco de dados
Depois de configurado o .env com o caminho do banco de dados SQLite, é necessário rodar as migrações, usando o seguinte comando:
```bash
$ npx prisma migrate deploy
```
## Inicializando a aplicação
```bash
# development
$ npm run dev
```

