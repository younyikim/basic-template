import { createAxiosInstance } from '@/apis/axios/instance';

/**
 * @description Axios GET 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {Record<string, unknown>} [params.params] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const get = (url: string, params?: Record<string, unknown>, baseURL?: string) => {
	const instance = createAxiosInstance(baseURL);

	return instance
		.get(url, { params })
		.then(response => {
			return Promise.resolve(response.data.data);
		})
		.catch(error => {
			console.log(`GET :: ${url} Failed!`);
			return Promise.reject(error);
		});
};

const post = () => {};
const put = () => {};
const patch = () => {};
const remove = () => {};

export default {
	get,
	post,
	put,
	patch,
	remove,
};
