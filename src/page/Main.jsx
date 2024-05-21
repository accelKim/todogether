import React from 'react';
import { useSelector } from 'react-redux';
import style from '../css/Main.module.css';

import MyTodoList from '../component/MyTodoList';

const Main = () => {
    const todos = useSelector((state) => state.myTodo);

    const today = new Date();
    const todayTodos = todos.filter(todo => {
        const todoDate = new Date(todo.dueDate);
        return (
            todoDate.getDate() === today.getDate() &&
            todoDate.getMonth() === today.getMonth() &&
            todoDate.getFullYear() === today.getFullYear()
        );
    });

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); 
    const tomorrowTodos = todos.filter(todo => {
        const todoDate = new Date(todo.dueDate);
        return (
            todoDate.getDate() === tomorrow.getDate() &&
            todoDate.getMonth() === tomorrow.getMonth() &&
            todoDate.getFullYear() === tomorrow.getFullYear()
        );
    });

    return (
        <section className={`${style.main} mw`}>
            <div className={style.index}>
                <h3>INDEX</h3>
                <i className={`fa-solid fa-arrow-down-short-wide ${style.sortBtn}`}></i>
                <i className="fa-regular fa-user"></i>
            </div>
            <div>
                
            </div>
            {todos?.length > 0 ? (
                <>
                <h3>오늘 할 일</h3>
                <MyTodoList todoList={todayTodos} />
                <h3>내일 할 일</h3>
                <MyTodoList todoList={tomorrowTodos} />
                </>
            ) : (
                <>
                    <div className={style.mainImgWrap}>
                        <img src="/img/mainlogo.svg" alt="mainlogo" className={style.mainImg} />
                    </div>
                    <div className={style.mainText}>
                        <p>What do you want to do today?</p>
                        <p>Tap + to add your tasks</p>
                    </div>
                </>
            )}
        </section>
    );
};

export default Main;
