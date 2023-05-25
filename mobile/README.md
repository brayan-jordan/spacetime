# Mobile
Criei uma aplicação mobile utilizando o framework [Expo](https://docs.expo.dev/?utm_source=google&utm_medium=cpc&utm_content=search&gclid=Cj0KCQjwmZejBhC_ARIsAGhCqnf8ikb9Y44_faRbvS7ruV4x1eHU9n-aG2019tXhd9fCEbXX4GULmaYaAsk2EALw_wcB) que é um framework excelente para trabalhar com ReactNative, permitindo fazer o build de um único código para Android e para IOS.
## Instalação das dependências
```bash
$ npm install
```
## Substituindo váriaveis
1. Arquivo [api.ts](https://github.com/brayan-jordan/spacetime/blob/master/mobile/src/lib/api.ts), substituir o texto ***<backend_url>*** pela URL do seu backend exposto na rede
2. Arquivo [index.tsx](https://github.com/brayan-jordan/spacetime/blob/master/mobile/app/index.tsx), substituir os textos ***<github_client_id>*** pelo ID do seu [Github OAuth](https://docs.github.com/pt/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)
## Github OAuth
Como visto acima, é necessário criar um [Github OAuth](https://docs.github.com/pt/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps), é importante que ao criar, a opção ***Authorization Callback URL*** seja configurada com o seguinte texto exp://<SEU_IP_NA_REDE>:19000
## Inicializando a aplicação
```bash
$ npm start
```
<em>Ao rodar esse comando, irá ser exibido um QRCode no terminal, basta apontar a câmera do seu celular para esse QRCode, que ele vai abrir a aplicação (Necessário ter instalado o aplicativo Expo Go)</em>

