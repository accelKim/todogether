import style from '../css/Footer.module.css';
import { useState } from 'react';
import AddTodo from './AddTodo';

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <footer className={style.ft}>
                <a href="/">
                    <i class="fa-solid fa-house"></i>Index
                </a>
                <a href="/calendar">
                    <i class="fa-solid fa-calendar-days"></i>Calendar
                </a>
                <button onClick={handleShow}>+</button>
                <a href="">
                    <i class="fa-regular fa-clock"></i>Focus
                </a>
                <a href="">
                    <i class="fa-regular fa-user"></i>Profile
                </a>
                <div className={style.homeBtn}></div>
            </footer>

            <AddTodo show={show} handleClose={handleClose} />
        </>
    );
};

export default Footer;
