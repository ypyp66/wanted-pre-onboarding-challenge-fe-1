### 구조

#### 디렉토리만

```

├── public
└── src
    ├── api
    ├── components
    │   ├── Login
    │   │   └── hooks
    │   └── Todo
    │       └── hooks
    ├── constant
    │   └── todo
    ├── hooks
    ├── lib
    ├── model
    └── pages
        └── todos

```

#### src 하위 파일까지

```
├── App.module.scss
├── App.test.tsx
├── App.tsx
├── api
│   ├── auth.ts
│   └── todo.ts
├── components
│   ├── AuthRoute.tsx
│   ├── Login
│   │   └── hooks
│   │       └── useLogin.tsx
│   └── Todo
│       ├── EditableItem.tsx
│       ├── TodoInput.tsx
│       ├── TodoItem.tsx
│       ├── TodoList.tsx
│       ├── hooks
│       │   ├── useTodoInput.tsx
│       │   ├── useTodoMutation.tsx
│       │   └── useTodoQuery.tsx
│       └── index.tsx
├── constant
│   └── todo
│       └── queryKey.ts
├── hooks
│   ├── useLocalStorage.ts
│   └── useUser.ts
├── index.scss
├── index.tsx
├── lib
│   ├── axios.ts
│   └── validation.ts
├── logo.svg
├── model
│   └── auth.ts
├── pages
│   ├── auth.tsx
│   ├── register.tsx
│   └── todos
│       ├── [id].tsx
│       └── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```
