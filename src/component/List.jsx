import style from '../css/ListCard.module.css';
// import { useNavigate } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

const List = ({ todo }) => {
    const navigate = useNavigate();
    

    const goDetail = () => {
        navigate(`/todoList/${todo.id}`);
    };

    
    return (
        <div onClick={goDetail}>
            <div className={style.pInfo}>
                <p>{todo.task}</p>
                <p>마감일: {new Date(todo.dueDate).toLocaleDateString()}</p>
                
            </div>
        </div>
    );
};

export default List;
