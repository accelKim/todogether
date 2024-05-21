import { useState, useEffect } from 'react';
import style from '../css/Header.module.css';

const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    const today = new Date();
    return (
        <header className={style.hd}>
            <h1 hidden>모바일 헤드</h1>
            <time dateTime={time.toISOString()} className={style.clock}>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
            </time>
            <div className={style.notch}></div>
            <div className={style.icon}>
                <i class="fa-solid fa-signal"></i>
                <i class="fa-solid fa-wifi"></i>
                <i class="fa-solid fa-battery-full"></i>
            </div>
        </header>
    );
};

export default Header;
