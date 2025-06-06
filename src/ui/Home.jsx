import { useSelector } from 'react-redux'
import CreateUser from '../features/user/CreateUser'
import Button from './Button'

function Home() {
    const username = useSelector((store) => store.user.username)

    return (
        <div className="my-10 sm:my-16 text-center px-10">
            <h1 className="text-xl md:text-4xl font-semibold text-center mb-8">
                The best pizza.
                <br />
                <span className="text-orange-400">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            {!username ? (
                <CreateUser />
            ) : (
                <Button to="/menu" type="primary">
                    Continue Ordering, {username}
                </Button>
            )}
        </div>
    )
}

export default Home
