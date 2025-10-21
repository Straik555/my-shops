import { IProduct } from '~/shared'

export type CartItemType = {
	callback: () => void
} & Pick<IProduct, 'price' | 'title' | 'image'>
