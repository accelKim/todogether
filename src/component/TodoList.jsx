import List from './List';
import style from '../css/ListCard.module.css';
import { addItem } from '../store/myTodoStore';
import { useDispatch } from 'react-redux';
const TodoList = ({ todoList }) => {
    const dispatch = useDispatch();
    const handleAdd = (task, dueDate) => {
        dispatch(addItem({ task, dueDate }));
    };
    return (
        <ul  className={style.listCards}>
            {todoList.map((todo) => {
                return (
                    <li key={todo.id} className={style.listCard}>
                        <List todo={todo} />
                        <button onClick={() => handleAdd(todo.task, todo.dueDate)}>추가</button>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;
