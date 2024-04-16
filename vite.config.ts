import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		open: '/',
		proxy: {
			// '/api' 라는 문자열이 target 에 지정한 문자열로 변환되어 사용
			'/api': {
				target: 'http://localhost:5000',
				changeOrigin: true, // HTTP 요청 헤더의 Host 값을 서버의 호스트와 일치하도록 변경
				secure: false,
				rewrite: path => path.replace(/^\/api/, ''), // 프록시 요청의 경로를 재작성하는 함수를 설정
			},
		},
	},
	resolve: {
		alias: [
			{ find: '@', replacement: resolve(__dirname, 'src') },
			{ find: '@pages', replacement: resolve(__dirname, 'src/pages') },
			{ find: '@components', replacement: resolve(__dirname, 'src/components') },
			{ find: '@utils', replacement: resolve(__dirname, 'src/utils') },
			{ find: '@assets', replacement: resolve(__dirname, 'src/assets') },
			{ find: '@apis', replacement: resolve(__dirname, 'src/apis') },
			{ find: '@public', replacement: resolve(__dirname, 'public') },
			{ find: '@icons', replacement: resolve(__dirname, 'public/assets/icons') },
			{ find: '@images', replacement: resolve(__dirname, 'public/assets/images') },
		],
	},
});
