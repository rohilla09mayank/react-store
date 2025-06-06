import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import {
    decreaseItemQuantity,
    deleteItem,
    getPizzaQuantity,
    increaseItemQuantity,
} from './cartSlice'

function QuantityUpdate({ id }) {
    const dispatch = useDispatch()
    const currentQuantity = useSelector(getPizzaQuantity(id))

    function handleDeleteItem(id) {
        console.log('called')
        dispatch(deleteItem(id))
    }
    function handleDecreaseQuantity(id) {
        console.log('called')
        dispatch(decreaseItemQuantity(id))
    }

    function handleIncreaseQuantity(id) {
        console.log('called')
        dispatch(increaseItemQuantity(id))
    }

    return (
        <div className="flex gap-1 items-center">
            <Button type="small" onClick={() => handleDeleteItem(id)}>
                DEL
            </Button>
            <Button
                disabled={currentQuantity <= 1}
                type="round"
                onClick={() => handleDecreaseQuantity(id)}
            >
                -
            </Button>
            <p className="px-4 py-1 border border-orange-400 rounded-full font-bold">
                {currentQuantity}
            </p>
            <Button type="round" onClick={() => handleIncreaseQuantity(id)}>
                +
            </Button>
        </div>
    )
}

export default QuantityUpdate
