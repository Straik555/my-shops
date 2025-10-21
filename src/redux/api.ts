import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import { CookiesConfig } from '~/shared'

const axiosBaseQuery = (): BaseQueryFn => {
	return async (request: AxiosRequestConfig) => {
		const axiosInstance = axios.create({
			baseURL: `https://fakestoreapi.com${request}`
		})
		try {
			const token = Cookies.get(CookiesConfig.ACCESS_TOKEN)

			const res = await axiosInstance({
				headers: {
					...(token ? { Authorization: `Bearer ${token}` } : {}),
					...(request.headers || {})
				}
			})
			return { data: res.data }
		} catch (axiosError) {
			const err = axiosError as AxiosError
			return {
				error: err.message ?? ''
			}
		}
	}
}

export const baseApiSlice = createApi({
	reducerPath: 'myProductsApi',
	baseQuery: axiosBaseQuery(),
	endpoints: () => ({}),
	refetchOnMountOrArgChange: 30
})
