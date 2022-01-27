import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLogo from './img/logo.svg';
import HomePage from './components/HomePage';

function App() {
	return (
		<BrowserRouter>
			<div className=''>
				<header className='flex p-4 h-20 bg-gray-100'>
					<div className='flex items-center'>
						<img src={AppLogo} alt='' />
						<nav className='absolute'>
							<ul>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</nav>
					</div>
				</header>
			</div>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='' element='' />
				<Route path='' element='' />
				<Route path='' element='' />
				<Route path='*' element='' />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
