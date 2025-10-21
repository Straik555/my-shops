import { type RefCallback, useCallback, useState } from 'react'
import { limitsProducts } from '~/shared'

const useLoadingNextPage = () => {
	const [nextPage, setNextPage] = useState(limitsProducts)
	const [iseFetchingNextPage, setIsFetchingNextPage] = useState(false)

	// Loading next page
	const cursorRef: RefCallback<HTMLDivElement> = useCallback(
		el => {
			setIsFetchingNextPage(true)
			const observer = new IntersectionObserver(
				entries => {
					if (entries[0].isIntersecting) {
						setNextPage(nextPage + limitsProducts)
					}
				},
				{ threshold: 0.85 }
			)
			if (el) {
				observer.observe(el)
				return () => {
					setIsFetchingNextPage(false)
					observer.disconnect()
				}
			}
		},
		[nextPage]
	)
	return { cursorRef, iseFetchingNextPage, nextPage }
}

export { useLoadingNextPage }
