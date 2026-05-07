import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Converter } from './pages/Converter';
import { Services } from './pages/Services';
import { Contacts } from './pages/Contacts';
import { Questions } from './pages/Questions';
import { Account } from './pages/Account';
import { Footer } from './components/layout/Footer';
import { NotFound } from './pages/NotFound';
import { ScrollToHash } from './router/ScrollToHash';

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
