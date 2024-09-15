# Тестовое задание: Frontend разработчик на Next.js

[Посмотреть на vercel](https://harmony-hr.grekas.ru)

## Используемые технологии и библиотеки

- Next.js
- TypeScript
- shadcn/ui
- Tailwind CSS
- Apollo GraphQL
- Zustand
- Git
- React Icons
- React Hook Form + zod
- Graphql Codegen

## Что было сделано

- авторизация через graphql api (тестовые данные - email: john@mail.com, password: changeme)
- защищенные страницы my-info, проверка на авторизацию происходит на клиентской части, тк информация хранится в стейте zustand
- авторефреш токена по истечении действия access token
- адаптивная верстка страницы my-info/time-off, иконки были взять из react-icons для удобства
- Доступные страницы - home, my-info, login, my-info/time-off. Все остальные ссылки недействительны

## Запуск проекта локально

- 1 `git clone https://github.com/SergeyBogomolovv/harmony-hr-intern-frontend.git`

- 2 `npm install`

- 3 `npm run build`

- 4 `npm run start`
