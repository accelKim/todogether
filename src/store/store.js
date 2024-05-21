import { configureStore } from '@reduxjs/toolkit';

import todo from './todoStore';
import myTodo from './myTodoStore';
import user from './userStore';

export const store = configureStore({
    reducer: {
        user: user.reducer,
        myTodo: myTodo.reducer,
        todo: todo.reducer,
    },
});
