# 📰 FakePress

**FakePress** — лёгкое React-приложение для просмотра постов и комментариев, построенное на [JSONPlaceholder API](https://jsonplaceholder.typicode.com).

### 🚀 Технологии

- ⚛️ React + Vite + TypeScript
- 🔄 RTK Query для загрузки данных
- 🎨 CSS Modules для стилизации
- 🧱 FSD-архитектура

```
src/
├── app/        # Инициализация: роутинг, store, темы
├── pages/      # Отдельные страницы
├── widgets/    # Крупные UI-блоки
├── features/   # Фичи (поиск, фильтры и т.п.)
├── entities/   # Сущности: post, user...
├── shared/     # Общие компоненты и утилиты
```

### TO-DO HW-1

Необходимо создать начальное приложение, отрисовать список постов (пока с заглушками) и научиться передавать данные через props между компонентами.

Задание:

1. Инициализировать проект с помощью Vite + TypeScript.

   - [x] Инициализировал

2. Создать:

   - [x] App.tsx → src/app/
   - [x] MainLayout.tsx → src/shared/layouts/
   - [x] Header, Footer → src/widgets/LayoutHeader/, LayoutFooter/

3. Отобразить список постов-заглушек:

   - [x] PostList → src/widgets/PostList/
   - [x] PostCard → src/entities/post/ui/PostCard.tsx

4. Передавать данные через props, компонент — функциональный.

   - [x] Реализовано

   ### Исправления

   - [ ] **PR #1**: Добавил передачу через пропсы (`По FSD слой shared не должен импортировать ничего из верхних слоёв`)

### TO-DO HW-2

Необходимо добавить модальное окно с информацией о проекте, которое открывается по кнопке в шапке приложения, а также реализовать переключение светлой и тёмной темы через контекст.

Задание:

1. Реализовать ThemeContext и переключение темы:

   - [x] ThemeProvider, useTheme → src/shared/lib/theme/
   - [x] ThemeSwitcher → src/features/ThemeSwitcher/ui/

2. Использовать React.Fragment и key в списках.

   - [x] Реализовано

3. Модалка "О проекте" через React.Portal → src/shared/ui/Modal/

   - [x] Реализовано

4. Кнопки с обработкой событий → src/shared/ui/Button/

   - [x] Реализовано

   ### Исправления

   - [ ] **PR #2**: Вынес все статичные посты в mockPosts (`Это нужно вынести в entities/post/mocks`)

### TO-DO HW-3

Необходимо реализовать отображение модального окна с использованием compound components, добавить фильтрацию постов по длине заголовка, свертывание комментариев и оптимизации через HOC и хуки.

Задание:

1. Compound Components:

   - [x] Modal с подкомпонентами (Header, Body, Footer) → src/shared/ui/Modal/

2. HOC withLoading:

   - [x] HOC → src/shared/lib/hoc/
   - [x] Применяется к PostList

3. Свертывание/разворачивание комментариев:

   - [x] CommentList.tsx → src/widgets/CommentList/ui/
   - [x] Используй useState, useCallback

4. Фильтр по длине заголовка:

   - [x] PostLengthFilter → src/features/PostLengthFilter/ui/
   - [x] filterByLength.ts → src/features/PostLengthFilter/lib/

5. Оптимизации:
   - [x] useMemo, useCallback в PostList

### TO-DO HW-4

Необходимо добавить маршруты для страниц с постами, комментариями, альбомами, фото и задачами пользователей. Реализовать навигацию и кастомный хук для получения постов.

Задание:

1. Настроить маршруты:

   - [x] /posts, /posts/:id, /users/:id/albums, /albums/:id/photos, /users/:id/todos, /users/:id/posts

   - [x] Роуты → src/pages/

   - [x] Роутинг → src/app/providers/router/

2. Навигация через NavLink → UserTabs → src/widgets/UserTabs/

   - [x] Реализовать навигацию

3. Хук usePosts → src/features/PostList/model/hooks/

   - [x] Реализовать хук

### TO-DO HW-5

Необходимо настроить глобальное состояние приложения с использованием Redux Toolkit и подключить работу с API через RTK Query. Реализовать получение данных и кэширование.

Задание:

1. Redux Toolkit Store → src/app/providers/store/

   - [x] Реализован общий Store

2. RTK Query API:

   - [x] postsApi, commentsApi, albumsApi, todosApi → src/entities/[entity]/api/

3. createEntityAdapter:

   - [x] postSlice, userSlice → src/entities/[entity]/model/slice/

4. Инвалидация, кэширование, загрузка по userId и postId
   - [x] Реализовано за счёт providesTags и invalidatesTags

### TO-DO HW-6

Необходимо типизировать все сущности и компоненты, внедрить дженерики и правильно указать типы обработчиков событий. Настроить строгий режим TypeScript.

Задание:

1. Типы: Post, User, Comment, Album, Photo, Todo → src/entities/[entity]/model/types.ts

   - [x] Созданы описания всех типов сущностей

2. Дженерик ItemList<T> → src/shared/ui/ItemList/

   - [x] Реализован дженерик ItemList

3. Типизация props, обработчиков, PropsWithChildren, MouseEventHandler

   - [x] Реализована типизация в button

4. tsconfig.base.json, tsconfig.app.json

   - [x] Создан base configuration
