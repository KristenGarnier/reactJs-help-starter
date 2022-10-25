import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import { usePostStore } from './store/postStore';

function App() {
	const { posts, setPosts } = usePostStore();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((res) => setPosts(res));
	}, []);

	return (
		<div className="App">
			<h1>Les articles</h1>
			<div className="card">
				{posts.length > 0 &&
					posts.map((post) => {
						return (
							<div key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.body}</p>
								<Link to={`/articles/${post.id}`}>Consulter l'article</Link>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default App;
