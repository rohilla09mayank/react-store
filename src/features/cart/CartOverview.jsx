import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotalCartPrice, getTotalCartQuanitity } from './cartSlice'

function CartOverview() {
    const totalCost = useSelector(getTotalCartPrice)
    const numPizzas = useSelector(getTotalCartQuanitity)

    if (!numPizzas) return null
    return (
        <div className="bg-stone-800 text-stone-200 uppercase p-4 sm:p-6 text-sm md:text-base flex items-center justify-between">
            <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
                <span>{numPizzas} pizzas</span>
                <span>${totalCost}</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview
