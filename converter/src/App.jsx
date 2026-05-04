import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from './components/layout/Header.jsx';
import { Home } from './pages/Home';
import { Converter } from './pages/Converter';
import { Services } from './pages/Services.jsx';
import { Contacts } from './pages/Contacts.jsx';
import { Questions } from './pages/Questions.jsx';
import { Account } from './pages/Account.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { ScrollToHash } from './router/ScrollToHash.jsx';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
