import { useState } from 'react'

import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { createOrder } from '../../services/apiRestaurant'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice'
import EmptyCart from '../cart/EmptyCart'
import store from '../../store'
import { formatCurrency } from '../../utilities/helpers'
import { fetchAddress } from '../user/userSlice'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    )

function CreateOrder() {
    const {
        username,
        address,
        position,
        status: addressStatus,
    } = useSelector((store) => store.user)

    const isLoadingAddress = addressStatus === 'loading'
    const [withPriority, setWithPriority] = useState(false)
    const navigation = useNavigation()
    const formErrors = useActionData()
    const isSubmitting = navigation.state === 'submitting'
    const cart = useSelector(getCart)
    const totalPrice = useSelector(getTotalCartPrice)
    const priorityPrice = withPriority ? totalPrice * 0.2 : 0
    const finalPrice = totalPrice + priorityPrice
    const dispatch = useDispatch()

    const inputStyle =
        'rounded-full border border-stone-200 px-4 py-2 text-md transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-400'

    if (!cart) return <EmptyCart />

    return (
        <div className="px-4 py-6">
            <h2 className="text-xl font-semibold mb-8">
                Ready to order? Let&apos;s go!
            </h2>

            <Form method="POST">
                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center ">
                    <label className="sm:basis-40">First Name</label>
                    <input
                        type="text"
                        name="customer"
                        defaultValue={username}
                        required
                        className={`grow ${inputStyle}`}
                    />
                </div>

                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center ">
                    <label className="sm:basis-40">Phone number</label>
                    <div className="grow">
                        <input
                            type="tel"
                            name="phone"
                            required
                            className={`w-full ${inputStyle}`}
                        />
                        {formErrors?.phone && (
                            <p className="text-xs mt-2 text-red-500 bg-red-100 rounded-full inline-block py-1 px-2">
                                {formErrors.phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
                    <label className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input
                            type="text"
                            disabled={isLoadingAddress}
                            name="address"
                            defaultValue={address}
                            className={`w-full ${inputStyle}`}
                            required
                        />
                        {!position.latitude && !position.longitude && (
                            <span className="absolute right-[3px] top-[3px]">
                                <Button
                                    disabled={isLoadingAddress}
                                    type="small"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(fetchAddress())
                                    }}
                                >
                                    Get position
                                </Button>
                            </span>
                        )}
                    </div>
                </div>

                <div className="mb-12 flex items-center gap-5">
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                        className="h-4 w-4 accent-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2"
                    />
                    <label htmlFor="priority" className="font-medium">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />

                    <Button type="primary" disabled={isSubmitting}>
                        {isSubmitting
                            ? 'Submitting...'
                            : `Order now for ${formatCurrency(finalPrice)}`}
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const order = {
        ...data,
        priority: data.priority === 'true',
        cart: JSON.parse(data.cart),
    }

    const errors = {}
    if (!isValidPhone(order.phone)) {
        errors.phone = 'You have not entered a correct phone number'
        console.log('Heyy')
    }
    if (Object.keys(errors).length > 0) {
        console.log('Yoo')
        return errors
    }

    const newOrder = await createOrder(order)
    store.dispatch(clearCart())

    return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
