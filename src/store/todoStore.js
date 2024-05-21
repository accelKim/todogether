import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodoList = createAsyncThunk(
    'todos/getTodoList', // 액션의 이름
    async (date) => {
        let url = `https://my-json-server.typicode.com/accelKim/todogether/todoList`;
        if (date) {
            url += `?dueDate=${date}`;
        }
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
);

let todo = createSlice({
    name: 'todo',
    initialState: {
        todoList: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        loadTodoList: (state, action) => {
            state.todoList = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTodoList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTodoList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todoList = action.payload;
            })
            .addCase(getTodoList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { extraReducers } = todo.actions;
export default todo;
