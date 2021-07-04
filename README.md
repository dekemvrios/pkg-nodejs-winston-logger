# NodeJS Winston Logger

[![npm version](https://badge.fury.io/js/%40sintese%2Fnodejs-winston-logger.svg)](https://badge.fury.io/js/%40sintese%2Fnodejs-winston-logger)
[![Software License][ico-license]](LICENSE.md)

Logger simplificado para NodeJS utilizando [winston](https://github.com/winstonjs/winston)

## Instalando

Via npm

``` bash
$ npm i @sintese/nodejs-winston-logger
```

## Usando

``` nodejs
const logger = require('@sintese/nodejs-winston-logger');

logger.info('Quero minha mensagem padronizada', 'Meu Logger')
```

Irá produzir uma mensagem com o seguinte padrão

```
[2021-07-02T19:55:46.737Z] (info) [Meu Logger] Quero minha mensagem padronizada
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