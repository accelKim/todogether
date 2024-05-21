import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoList } from '../store/todoStore';

import Calendar from 'react-calendar';
import MyTodoList from '../component/MyTodoList';
import TodoList from '../component/TodoList';

import style from '../css/Calendar.module.css';
import '../css/calendar.css';

const CalendarPage = () => {
    const dispatch = useDispatch();
    const todoListState = useSelector((state) => state.todo);
    const todoList = todoListState.todoList;
    const todos = useSelector((state) => state.myTodo);

    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const formattedDate = selectedDate.toISOString().slice(0, 10);
        dispatch(getTodoList(formattedDate));
    }, [dispatch, selectedDate]);

    const handleDateChange = (date) => {
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);
        setSelectedDate(nextDate);
    };

    const selectedFormattedDate = selectedDate.toISOString().slice(0, 10);
    const filteredTodos = todos.filter(todo => {
        return todo.dueDate === selectedFormattedDate;
    });

    return (
        <section className={`${style.CP} mw`}>
            <Calendar onChange={handleDateChange} value={selectedDate - 1}/>
            <div>
                <h2>선택한 날짜의 할 일</h2>
                <MyTodoList todoList={filteredTodos}/>
            </div>
            <div>
                <h2>추천 할 일</h2>
                <TodoList todoList={todoList}/>
            </div>
        </section>
    );
};

export default CalendarPage;
