import Image from 'next/image'
import { BsTrash } from 'react-icons/bs'
import { FC } from 'react'
import { CartItemType } from '~shared/components/cartItem/cartItem.type'

export const CartItem: FC<CartItemType> = ({
	price,
	image,
	title,
	callback
}) => {
	return (
		<div className='flex items-center justify-between bg-green-100 rounded-lg p-4 mb-4'>
			<div className='w-3/4 flex items-center'>
				<div className='mr-4'>
					<Image
						src={image}
						alt={title}
						width='33'
						height='48'
						className='rounded-lg'
						layout='fixed'
					/>
				</div>
				<div className='text-sm mr-4 w-3/4 '>
					<div className='overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-green-900 mb-1'>
						{title}
					</div>
					<div className='text-green-800'>${price}</div>
				</div>
			</div>
			<button onClick={callback}>
				<BsTrash className='text-green-600 hover:text-green-800 cursor-pointer' />
			</button>
		</div>
	)
}
