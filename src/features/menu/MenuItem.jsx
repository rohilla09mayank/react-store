import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { formatCurrency } from '../../utilities/helpers'
import { addItem, getPizzaQuantity } from '../cart/cartSlice'
import QuantityUpdate from '../cart/QuantityUpdate'

function MenuItem({ pizza }) {
    const dispatch = useDispatch()
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
    const currentQuantity = useSelector(getPizzaQuantity(id))

    function handleAddItem() {
        const newItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice,
        }

        dispatch(addItem(newItem))
    }

    return (
        <li key={id} className="flex gap-4 py-2 ">
            <img
                src={imageUrl}
                alt={name}
                className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex flex-col grow pt-0.5">
                <p className="font-medium ">{name}</p>
                <p className="text-sm italic capitalize text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="mt-auto flex items-center justify-between ">
                    {!soldOut ? (
                        <>
                            <p className="text-sm">
                                {formatCurrency(unitPrice)}
                            </p>
                            {currentQuantity > 0 ? (
                                <QuantityUpdate id={id} />
                            ) : (
                                <Button onClick={handleAddItem} type="small">
                                    Add to Cart
                                </Button>
                            )}
                        </>
                    ) : (
                        <p className="text-sm uppercase font-medium text-stone-500">
                            Sold out
                        </p>
                    )}
                </div>
            </div>
        </li>
    )
}

export default MenuItem
