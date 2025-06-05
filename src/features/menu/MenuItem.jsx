import Button from '../../ui/Button'
import { formatCurrency } from '../../utilities/helpers'

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

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
                            <Button type="small">Add to Cart</Button>
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
