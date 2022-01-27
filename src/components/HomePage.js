import React from 'react';

const HomePage = () => {
	return (
		<div className='font-sans'>
			<main className='bg-gray-50 bg-hero-mobile bg-no-repeat bg-left-top bg-cover h-[420px]'>
				<div className='bg-hero-mockups bg-no-repeat bg-cover bg-left w-full h-[480px] px-4 mb-4'></div>
				<h1 className='text-center font-normal text-4xl text-slate-700 px-4 mb-4'>Next generation digital banking</h1>
				<p className='text-gray-400 font-normal text-normal  text-justify px-8 line'>
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving budgeting,
					investing. and much more.
				</p>
				<button
					className='block mx-auto mt-4 bg-gradient-to-r from-lime-500 via-cyan-300 
				to-cyan-500 rounded-full h-10 w-40 text-gray-50 font-bold  '>
					Request Invite
				</button>
			</main>
		</div>
	);
};

export default HomePage;
