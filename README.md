# Currency Converter

Навчальний frontend-проєкт обмінника валют, реалізований як SPA-застосунок із формами, роутингом, адаптивною версткою, глобальним станом і тестами.

Проєкт створювався як портфоліо-робота з акцентом на практичні задачі frontend-розробки:

- робота із зовнішнім API
- керування станом форми та застосунку
- валідація користувацького вводу
- адаптація інтерфейсу під mobile і desktop
- збереження даних у `localStorage`
- тестування логіки та користувацьких сценаріїв

## Що реалізовано

### Конвертер валют

- вибір вихідної та цільової валюти
- вибір дати в межах останнього тижня
- розрахунок суми в обидва боки
- захист від вибору однакових валют
- збереження результату в історію

### Історія конвертацій

- додавання нових записів на початок списку
- обмеження історії до 10 елементів
- збереження історії в `localStorage`
- очищення історії

### Форма звернення

- поля імені, email, теми та повідомлення
- валідація через `React Hook Form + Zod`
- mock-відправка даних через `json-server`
- обробка loading / error станів

### Інші сторінки

- `Services`
- `Contacts`
- `Questions`
- `404 Not Found`

### UI

- адаптивна верстка для mobile / tablet / desktop
- окремий мобільний header із burger-menu
- карта на сторінці контактів через `React Leaflet`

## Технології

- `React`
- `TypeScript`
- `Vite`
- `React Router`
- `React Hook Form`
- `Zod`
- `Zustand`
- `MUI`
- `Tailwind CSS`
- `React Leaflet`
- `Vitest`
- `Testing Library`
- `json-server`

## Технічні рішення

- стан форми конвертера перенесено в `React Hook Form`, щоб уникнути дублювання між формою та глобальним store
- історія зберігається в `Zustand` через `persist`
- для форми звернення використовується mock backend, щоб перевірити повний цикл відправки без реального сервера
- тести покривають утиліти, store, форму та базовий routing

## Тести

У проєкті є тести для:

- логіки конвертації
- store історії
- форми звернення
- fallback routing для `404`

Запуск:

```bash
npm test
```

Watch-режим:

```bash
npm run test:watch
```

## Запуск проєкту локально

### 1. Встановлення залежностей

```bash
npm install
```

### 2. Запуск frontend

```bash
npm run dev
```

Застосунок буде доступний за адресою:

```text
http://localhost:5173
```

### 3. Запуск mock backend для форми

```bash
npm run server
```

Mock API буде доступне за адресою:

```text
http://localhost:3001
```

Форма звернення надсилає дані на:

```text
http://localhost:3001/questions
```

## Доступні команди

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run server
npm test
npm run test:watch
```

## Структура проєкту

```text
src/
  components/
    layout/
    sections/
    ui/
  constants/
  pages/
  router/
  schemas/
  store/
  test/
  utils/
```

## Маршрути

- `/` — головна
- `/converter` — конвертер валют та історія
- `/services` — послуги
- `/contacts` — контакти та карта
- `/questions` — форма звернення
- `*` — сторінка `404`

## Що можна покращити далі

- додати деплой і посилання на live demo
- покрити e2e-сценарії
- підключити реальний backend для форми
- розширити тести для конвертера та mobile navigation

## Автор

### Булаш Віктор Ігорович.

Проєкт створено як портфоліо-роботу для позиції `Junior Frontend Developer`.
