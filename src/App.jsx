import Header from './components/Header/Header';
import ResultGrid from './components/ResultsGrid/ResultGrid';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<div className='container'>
					<ResultGrid />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
