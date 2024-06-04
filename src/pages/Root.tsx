import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '@/App.css';

// Components
import { Button } from '@/components/ui/button';

function Root() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<h1 className="p-1 pt-2 text-3xl font-bold underline">Hello Tailwind CSS!</h1>
			<Button onClick={() => console.log('Clicked')}>Click me</Button>
			<Outlet />
		</>
	);
}

export default Root;
