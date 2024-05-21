// AddTodoModal.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/myTodoStore'; // Redux 액션을 임포트합니다.

const AddTodo = ({ show, handleClose }) => {
    const [task, setTask] = useState('');
    const [dueDate, setDueDate] = useState(''); 
    const dispatch = useDispatch();

    const handleSave = () => {
        if (task.trim() && dueDate) {
            dispatch(addItem({ task, dueDate }));
            setTask('');
            setDueDate('');
            handleClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>새 할 일 추가</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label htmlFor="todoTask" className="form-label">할 일 제목</label>
                        <input
                            type="text"
                            className="form-control"
                            id="todoTask"
                            placeholder="할 일 제목을 입력하세요"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="todoDueDate" className="form-label">종료 날짜</label>
                        <input
                            type="date"
                            className="form-control"
                            id="todoDueDate"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    닫기
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    저장하기
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddTodo;
