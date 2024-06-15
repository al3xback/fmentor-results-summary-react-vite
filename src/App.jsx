import Header from './components/Header/Header.jsx';
import ResultGrid from './components/ResultsGrid/ResultGrid.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<div className="container">
					<ResultGrid />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
