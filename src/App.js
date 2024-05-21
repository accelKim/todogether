import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Header from './component/Header';
import Main from './page/Main';
import Footer from './component/Footer';
import CalendarPage from './page/CalendarPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/calendar" element={<CalendarPage />}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
