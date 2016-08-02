# Projeto de Refatoração do TCC e Criação de uma Plataforma para IoT
 Esse projeto tem como objetivo refatorar O Software do meu TCC - 'Monitoramento em Tempo Real do Consumo de 
 Energia Elétrica'. 
 
 O Software desenvolvido não ficou completo como eu queria, então essa refatoração visa resolver os tópicos pendentes e também
 criar uma plataforma base para que a comunidade venha a utilizar.
 
 Meu objetivo é tentar desenvolver uma plataforma genérica, para que se adapte a pequenos cenários, assim, caso o usuário
 tenha um sensor de umidade e um shield rele(por exemplo), ele possa criar componentes pré cadastrados no sistema, 
 assim podendo fazer uma linkagem entre o componente da dashboard e o hardware através de um protócolo de comunicação - MQTT, Sockets, HTTP, por exemplo.
 
## Tecnologias a serem Utilizadas
 * NodeJS
 * Redis
 * MongoDB
 * Socket.io
 * MQTT
 * AngularJS
 * MaterializeCSS
 * Docker

## Objetivos específicos
 * Desenvolver uma API Restful;
 * Desenvolver um serviço de Broker MQTT;
 * Desenvolver serviço de WebSockets;
 * Rodar todos os Serviços no Docker.
 
## Por que utilizar Docker no projeto?
 Todo Ecossistema do Projeto rodará em containers Docker(não é obrigatório),
 ou seja, cada serviço terá seu container - Por Exemplo: API, Broker MQTT...
 
 Uma das vantagens da utilização do Docker, se dá por um simples motivo! Padronização de ambientes.
 Com isso, não terá aqueles problemas diários - "Aqui na minha máquina roda", "Puutzz, aqui não roda :/".
 
 Outro fator positivo que não faz parte do projeto, mas é pelo fato do Docker estar sendo cada vez mais utilizados
 pelas empresas. Então a dica é: Estude todo o ecossistema do Docker. - E não se arrependerás  :P
 
## Serviços que compoe todo o ecossistema do projeto (Será adicionado outros serviços)
 * MongoDB - Banco de Dados da Plataforma;
 * API NodeJS - Todos os recursos estarão nessa API - Usuários, Logs, Dados de Sensores...;
 * Broker MQTT - Broker MQTT da Plataforma * utiliza NodeJS;
 * Aplicação Web - Será da Dashboard da Plataforma;
 
## Requisitos para rodar o projeto (Poderá surgir mais dependencias durante o desenvolvimento)
 Como citei anteriormente, o uso do Docker não é obrigatório. Você poderá rodar todos os serviços manualmente. 
 Mas também, como foi citado, irei abranger ele na utilização.
 
 * Docker: [Link de Instruções](https://docs.docker.com/engine/installation/)
 * Docker Compose: [Link de Instruções](https://docs.docker.com/compose/install/)
 * NodeJS / NPM: [Link de Instruções](https://nodejs.org/en/download/current)
    * Bower: [Link de Instruções](https://bower.io/)
    * Gulp: [Link de Instruções](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Dúvidas?
 * [Telegram](https://telegram.me/douglaszuqueto)
 * [Facebook](https://www.facebook.com/douglaszuqueto)
 * Email: douglas.zuqueto@gmail.com