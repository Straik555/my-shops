import { FC, Ref } from 'react'
import { useActions, useOutside, useTypedSelector } from '~/features'
import { BsCart, BsX } from 'react-icons/bs'
import { CartItem } from '~/shared'

const CartDropdown: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const { cart } = useTypedSelector(state => state)

	const { removeItem } = useActions()
	return (
		<>
			<button
				className='bg-green-800 rounded-full text-white p-2 block cursor-pointer'
				onClick={() => setIsShow(true)}
			>
				<BsCart />
			</button>

			{isShow && (
				<div className='fixed top-0 left-0 z-900 w-full h-screen bg-gray-50/30'>
					<div
						className='relative bg-white anim-cart shadow-2xl top-[100px] overflow-hidden mx-auto w-full min-h-[200px] max-h-[500px] max-w-4xl'
						ref={ref as Ref<HTMLDivElement>}
					>
						<button
							className='absolute right-1.5 top-2 bg-green-800 rounded-full text-white p-0.5 block cursor-pointer'
							onClick={() => setIsShow(false)}
						>
							<BsX />
						</button>
						<div className='max-h-[500px] w-full overflow-y-auto scrollbar p-7 pb-3'>
							{cart.length ? (
								cart?.map(product => (
									<CartItem
										callback={() => removeItem({ id: product.id })}
										key={`Cart item: ${product.id}`}
										{...product}
									/>
								))
							) : (
								<div>Cart is empty</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default CartDropdown
