import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '~/redux/product/product.api'
import { baseApiSlice } from '~/redux/api'
import { cartReducer, cartSlice } from '~/redux/cart/cart.slice'

const reducers = {
	[baseApiSlice.reducerPath]: baseApiSlice.reducer,
	[cartSlice.name]: cartReducer
}

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([productApi.middleware])
})

export type TypeRootState = ReturnType<typeof store.getState>
