import { IProduct, limitsProducts } from '~/shared'
import { baseApiSlice } from '~/redux/api'

export enum ProductsApiTagTypes {
	ALL_PRODUCTS = 'ALL_PRODUCTS'
}

export const productsApiTagTypes = [ProductsApiTagTypes.ALL_PRODUCTS]

const enhancedBaseApiSlice = baseApiSlice.enhanceEndpoints({
	addTagTypes: [...productsApiTagTypes]
})

export const productApi = enhancedBaseApiSlice.injectEndpoints({
	endpoints: builder => ({
		getProducts: builder.query<IProduct[], number>({
			query: (limit = limitsProducts) => `/productas?limit=${limit}`,
			providesTags: [ProductsApiTagTypes.ALL_PRODUCTS]
		})
	})
})

export const { useGetProductsQuery } = productApi
