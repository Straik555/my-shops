'use client'
import { FC, useEffect } from 'react'
import { useGetProductsQuery } from '~/redux/product/product.api'
import { limitsProducts } from '~/shared'
import { CartDropdown, ProductItem } from '~/entities'
import { Loader } from '~/widgets'
import { toast } from 'react-toastify'

const HomePage: FC = () => {
	const { data, isLoading, error } = useGetProductsQuery(limitsProducts)

	useEffect(() => {
		if (error) {
			toast.error(String(error ?? 'Error fetching products'))
		}
	}, [error])

	return (
		<Loader isLoading={isLoading}>
			<div className='flex justify-between items-center mb-10'>
				<h1 className='text-3xl text-green-900 font-bold'>
					Let&apos;s find your products!
				</h1>
				<CartDropdown />
			</div>
			<div className='grid grid-cols-4 gap-3 justify-between '>
				{data?.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</Loader>
	)
}

export default HomePage
