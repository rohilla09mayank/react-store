import LinkButton from '../../ui/LinkButton'
import Button from '../../ui/Button'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'

function Cart() {
    const cart = useSelector(getCart)
    const username = useSelector((store) => store.user.username)
    const dispatch = useDispatch()

    function handleClearCart() {
        if (cart.length === 0) return

        dispatch(clearCart())
    }

    if (cart.length === 0) return <EmptyCart />

    return (
        <div className="py-3 px-4 ">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {username}
            </h2>

            <ul className="divide-y dicive-stone-200 border-b mt-3 ">
                {cart.map((item) => (
                    <CartItem key={item.pizzaId} item={item} />
                ))}
            </ul>

            <div className="mt-6 space-x-2">
                <Button type="primary" to="/order/new">
                    Order Pizzas
                </Button>
                <Button onClick={handleClearCart} type="secondary">
                    Clear cart
                </Button>
            </div>
        </div>
    )
}

export default Cart
