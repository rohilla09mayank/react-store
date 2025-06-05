import { useState } from 'react'
import Button from '../../ui/Button'

function CreateUser() {
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }
    const inputStyle =
        'rounded-full border border-stone-200 px-4 py-2 text-md transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-400 w-full'

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>

            <input
                className={`${inputStyle} mb-8 w-72`}
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== '' && (
                <div>
                    <Button type="primary">Start ordering</Button>
                </div>
            )}
        </form>
    )
}

export default CreateUser
