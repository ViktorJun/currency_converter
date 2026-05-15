import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { Converter } from './pages/Converter';
import { Services } from './pages/Services';
import { Contacts } from './pages/Contacts';
import { Questions } from './pages/Questions';
import { Footer } from './components/layout/Footer';
import { NotFound } from './pages/NotFound';
import { ScrollToHash } from './router/ScrollToHash';
import { HeaderForPhone } from './components/layout/HeaderForPhone';

function App() {
	return (
		<Router>
			<ScrollToHash />
			<HeaderForPhone />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/converter" element={<Converter />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/questions" element={<Questions />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
