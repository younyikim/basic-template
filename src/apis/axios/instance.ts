import axios from 'axios';
import qs from 'qs';

/**
 * @description API endpoints의 기본 경로
 */
export const apiUrl = '/api';

/**
 * @description baseUrl을 기반으로 Axios Instance를 생성하는 함수
 * @param baseUrl
 */
export const createAxiosInstance = (baseUrl?: string) => {
	return axios.create({
		baseURL: baseUrl ?? apiUrl,
		paramsSerializer: params => {
			return qs.stringify(params);
		},
	});
};
