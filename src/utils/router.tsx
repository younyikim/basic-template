import { createBrowserRouter } from 'react-router-dom';

// Pages
import Root from '@pages/Root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/test',
				element: <div>Test</div>,
			},
		],
	},
]);

export default router;
