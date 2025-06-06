import { useState } from 'react'
import Button from '../../ui/Button'
import { updateName } from './userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function CreateUser() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()

        if (!username) {
            return
        }

        dispatch(updateName(username))
        navigate('/menu')
    }
    const inputStyle =
        'rounded-full border border-stone-200 px-4 py-2 text-md transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-400 w-72'

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
