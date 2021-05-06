<p align="center">
  <img src="./images/icons__client.png" width="320" alt="Authorization (client)" />
</p>

<p align="right">
  <a href="../README.md">English</a> | <span>Русский</span>
</p>

# Авторизация (клиент)

Клиентская часть авторизации с использованием React TypeScript, менеджер состояний Redux.

Можно использовать в качестве стартера для нового проекта: реализует API для регистрации/входа пользователя (в том числе через социальные сети) и такие функции, как проверка электронной почты, восстановление пароля, сброс пароля.

## Детали реализации

- React инициализирован через [create-react-app](https://github.com/facebook/create-react-app) с использованием Typescript. Функциональные компоненты и Хуки;
- Менеджер состояний [Redux](https://github.com/reduxjs/redux), с использованием слоев промежуточной обработки [redux-thunk](https://github.com/reduxjs/redux-thunk) и [redux-logger](https://github.com/LogRocket/redux-logger);
- Использует [react-router](https://github.com/ReactTraining/react-router) для маршрутизации;
- Интернационализация [i18next](https://github.com/i18next/react-i18next);
- [Sass](https://github.com/sass/sass) препроцессор для СSS.

## Демо

![Authorization screencast](./images/screencast.gif)

## Как использовать

- Склонируйте этот репозиторий
- Запустите `npm install` для установки пакетов, указанных в `package.json`
- Для настройки авторизации через социальные сети в файле `./src/shared/constants.ts` необходимо указать константы: `FACEBOOK_CLIENT_ID, GOOGLE_CLIENT_ID, VK_CLIENT_ID`
- Запустите приложение

```bash
$ npm start
```

Запускает приложение в режиме разработки. Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.\
Страница перезагружается, если вы вносите правки.\
Все ошибки линтера отображаются в консоли.

## Сборка

```bash
$ npm run build
```

Собирает приложение для продакшена в папку `build`. \
Команда собирает React в продакшн режиме и оптимизирует сборку для достижения максимальной производительности.

Сборка минифицирована, а имена файлов включают хеши. \
Ваше приложение готово к деплою!

## Сервер

Для этого приложения реализован сервер [auth-server](https://github.com/sulakin/auth-server).

<p align="center">
  <a href="https://github.com/sulakin/auth-server" title="Authorization (server)">
    <img src="./images/icons__server.png" width="320" alt="Authorization (server)" />
  </a>
</p>

## Лицензия

Copyright © 2021 MIT by [Sulakin Vadim](https://github.com/sulakin)
