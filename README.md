# NodeJS Winston Logger

[![npm version](https://badge.fury.io/js/%40sintese%2Fnodejs-winston-logger.svg)](https://badge.fury.io/js/%40sintese%2Fnodejs-winston-logger)
[![Software License][ico-license]](LICENSE.md)

Logger simplificado para NodeJS utilizando [winston](https://github.com/winstonjs/winston)

## Installing

Via npm

``` bash
$ npm i @sintese/nodejs-winston-logger
```

## Usage

``` nodejs
// logger.js
import NodejsWinstonLogger from "@sintese/nodejs-winston-logger";
const logger = new NodejsWinstonLogger();

// script.js
logger.info("Quero minha mensagem padronizada", "Meu Logger");
```

Irá produzir uma mensagem com o seguinte padrão

```
[2021-11-04T23:25:35.884Z] (info) [Meu Logger] Quero minha mensagem padronizada
```

## Change log

Modificações recentes são registradas no [CHANGELOG](CHANGELOG.md)

## Contribuindo

Dúvidas, contribuições e sugestões são muito bem vidas.

## Créditos

- [Rafael Becker][link-author]

## Licença

Esse pacote é disponibilizado sob a licença [MIT](LICENSE.md).

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[link-author]: https://github.com/rafaelbeecker