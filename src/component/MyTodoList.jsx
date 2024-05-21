import List from './List';
import { delItem, toggleComplete } from '../store/myTodoStore';
import { useDispatch } from 'react-redux';
import style from '../css/ListCard.module.css'

const MyTodoList = ({ todoList }) => {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(delItem(id));
    };
    const handleCompleted = (id) => {
        dispatch(toggleComplete(id));
    };
    return (
        <ul className={style.listCards}>
            {todoList.map((todo) => {
                return (
                    <li key={todo.id} className={style.listCard}>
                        <List todo={todo} />
                        {todo.completed ? <p>완료됨</p> : <p>진행 중</p>}
                        <button onClick={() => handleDelete(todo.id)}>삭제</button>
                        <button onClick={() => handleCompleted(todo.id)}>완료</button>
                    </li>
                );
            })}
        </ul>
    );
};

export default MyTodoList;
