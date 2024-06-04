import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Utils
import router from './utils/router';
import { queryClient } from '@/apis/react-query';

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<div
				style={{
					fontSize: '16px',
				}}
			>
				<ReactQueryDevtools initialIsOpen={false} />
			</div>
		</QueryClientProvider>
	);
}

export default App;
