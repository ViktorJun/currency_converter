import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Header} from './components/header/Header.jsx';
import {Home} from './pages/Home';
import {Converter} from "./pages/Converter";
import {Services} from "./pages/Services.jsx";
import {Contacts} from "./pages/Contacts.jsx";
import {Questions} from "./pages/Questions.jsx";
import {Account} from "./pages/Account.jsx";

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/converter' element={<Converter />}/>
                <Route path='/services' element={<Services />}/>
                <Route path='/contacts' element={<Contacts />}/>
                <Route path='/questions' element={<Questions />}/>
                <Route path='/account' element={<Account />}/>
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </Router>
    )
}

export default App
