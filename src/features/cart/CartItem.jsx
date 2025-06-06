import { formatCurrency } from '../../utilities/helpers'
import QuantityUpdate from './QuantityUpdate'

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>

                <QuantityUpdate id={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
