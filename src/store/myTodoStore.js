import { createSlice } from '@reduxjs/toolkit';

const myTodoData = localStorage.getItem('myTodoData') ? JSON.parse(localStorage.getItem('myTodoData')) : [];

let nextId = myTodoData.length > 0 ? Math.max(...myTodoData.map((todo) => todo.id)) + 1 : 1;

const myTodo = createSlice({
    name: 'myTodos',
    initialState: myTodoData,
    reducers: {
        addItem: (state, action) => {
            const { task, dueDate } = action.payload;
            const newItem = {
                id: nextId++,
                task: task,
                dueDate: dueDate,
                completed: false,
            };
            state.push(newItem);
            localStorage.setItem('myTodoData', JSON.stringify(state));
        },
        delItem: (state, action) => {
            const idToDelete = action.payload;
            const indexToDelete = state.findIndex((todo) => todo.id === idToDelete);
            if (indexToDelete !== -1) {
                state.splice(indexToDelete, 1);
                localStorage.setItem('myTodoData', JSON.stringify(state));
            }
        },
        toggleComplete: (state, action) => {
            const idToToggle = action.payload;
            const todoToToggle = state.find((todo) => todo.id === idToToggle);
            if (todoToToggle) {
                todoToToggle.completed = !todoToToggle.completed;
                localStorage.setItem('myTodoData', JSON.stringify(state));
            }
        },
        editItem: (state, action) => {
            const { id, newTask, newDueDate } = action.payload; 
            const todoToEdit = state.find((todo) => todo.id === id);
            if (todoToEdit) {
                todoToEdit.task = newTask;
                todoToEdit.dueDate = newDueDate; 
                localStorage.setItem('myTodoData', JSON.stringify(state));
            }
        },
    },
});

export const {addItem, delItem, toggleComplete, editItem } = myTodo.actions;
export default myTodo;
