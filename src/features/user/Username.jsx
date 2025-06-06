import { useSelector } from 'react-redux'

function Username() {
    const username = useSelector((state) => state.user.username)
    return (
        <div className="text-sm font-semibold md:block hidden">
            {username ? username : 'Guest User'}
        </div>
    )
}

export default Username
