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

/**
 * @description Axios POST 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {Record<string, unknown>} [params.data] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const post = (url: string, data?: Record<string, unknown>, baseURL?: string) => {
	const instance = createAxiosInstance(baseURL);

	return instance
		.post(url, data)
		.then(response => {
			return Promise.resolve(response.data.data);
		})
		.catch(error => {
			console.log(`POST :: ${url} Failed!`);
			return Promise.reject(error);
		});
};

/**
 * @description Axios PUT 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {Record<string, unknown>} [params.data] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const put = () => (url: string, data?: Record<string, unknown>, baseURL?: string) => {
	const instance = createAxiosInstance(baseURL);

	return instance
		.put(url, data)
		.then(response => {
			return Promise.resolve(response.data.data);
		})
		.catch(error => {
			console.log(`PUT :: ${url} Failed!`);
			return Promise.reject(error);
		});
};

/**
 * @description Axios PATCH 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {Record<string, unknown>} [params.data] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const patch = () => (url: string, data?: Record<string, unknown>, baseURL?: string) => {
	const instance = createAxiosInstance(baseURL);

	return instance
		.patch(url, data)
		.then(response => {
			return Promise.resolve(response.data.data);
		})
		.catch(error => {
			console.log(`PATCH :: ${url} Failed!`);
			return Promise.reject(error);
		});
};

/**
 * @description Axios DELETE 요청 메서드
 * @param {Object} params
 * @param {string} params.path - api endpoint
 * @param {Record<string, unknown>} [params.data] - 요청과 함께 보낼 매개변수
 * @param {string} [params.baseURL] - 요청의 기본 URL
 * @returns {Promise<any>}
 * @throws {Error}
 */
const remove = () => (url: string, data?: Record<string, unknown>, baseURL?: string) => {
	const instance = createAxiosInstance(baseURL);

	return instance
		.delete(url, { data })
		.then(response => {
			return Promise.resolve(response.data.data);
		})
		.catch(error => {
			console.log(`DELETE :: ${url} Failed!`);
			return Promise.reject(error);
		});
};

export default {
	get,
	post,
	put,
	patch,
	remove,
};
