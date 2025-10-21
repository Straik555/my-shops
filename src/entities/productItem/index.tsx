'use client'

import { FC } from 'react'
import Image from 'next/image'
import { IProduct } from '~/shared'
import { useActions, useTypedSelector } from '~/features'
import cn from 'classnames'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const { addItem } = useActions()
	const { cart } = useTypedSelector(state => state)
	const isExistsInCart = cart.some(i => i.id === product.id)
	return (
		<div className='flex flex-col justify-between rounded-xl p-3 shadow-sm bg-[#E5F0EA] w-auto'>
			<div className='flex justify-center items-center h-full'>
				<Image
					src={product.image}
					alt={product.title}
					width='100'
					height='143'
					className='rounded-xl'
				/>
			</div>
			<div className='px-4'>
				<div className='flex justify-between items-center mt-3'>
					<div className='text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5'>
						{product.title}
					</div>
					<div className='text-sm text-green-600'>${product.price}</div>
				</div>
				<button
					className={cn(
						'text-sm mt-3 rounded-xl text-green-600 w-3/4 mx-auto block p-1 hover:bg-green-200',
						{
							'bg-green-200': isExistsInCart,
							'bg-white cursor-pointer': !isExistsInCart
						}
					)}
					onClick={() => !isExistsInCart && addItem(product)}
				>
					{isExistsInCart ? 'Already in cart' : 'Add to cart'}
				</button>
			</div>
		</div>
	)
}

export default ProductItem
