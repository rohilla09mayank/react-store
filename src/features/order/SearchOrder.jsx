import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchOrder() {
    const [query, setQuery] = useState()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (!query) return

        navigate(`/order/${query}`)
        setQuery('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="rounded-full px-4 py-2 text-sm bg-orange-100 placeholder:text-color-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-orange-100 focus:ring-offset-2 focus:ring-opacity-50"
                placeholder="Search Order #"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}

export default SearchOrder
