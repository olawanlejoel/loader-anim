import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const App = () => {
	const [loading, setLoading] = useState(false);
	const [quote, setQuote] = useState({});

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	const getRandomQuote = () => {
		setLoading(true);
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setQuote(data);
			});
	};
	return (
		<div className="container">
			{loading ? (
				<div className="loader-container">
					{/* <div className="spinner"></div> */}
					<ClipLoader color={'#fff'} size={60} />
				</div>
			) : (
				<div className="main-content">
					<h1>Hello World!</h1>
					<p>
						This is a demo Project to show how to add animated loading with
						React.
					</p>
					<div className="buttons">
						<button className="btn">
							<a href="#">Read Article</a>
						</button>
						<button className="btn get-quote" onClick={getRandomQuote}>
							Generate Quote
						</button>
					</div>

					<div className="quote-section">
						<blockquote className="quote">{quote.content}</blockquote>-{' '}
						<span className="author">{quote.author}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
