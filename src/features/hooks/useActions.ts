import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { cartActions } from '~/redux/cart/cart.slice'

const allActions = {
	...cartActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(allActions, dispatch)
}
