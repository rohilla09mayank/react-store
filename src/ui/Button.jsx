import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type, onClick }) {
    const base =
        'text-sm bg-orange-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-orange-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-orange-300 focus:bg-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300'

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
        round: base + ' py-1 px-2.5 md:px-3.5 md:py-2 ',
        secondary:
            'border-2 border-stone-300 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:text-stone-800 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300  px-4 py-2.5 md:px-6 md:py-3.5',
    }
    if (to)
        return (
            <Link className={styles[type]} to={to}>
                {children}
            </Link>
        )

    if (onClick) {
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={styles[type]}
            >
                {children}
            </button>
        )
    }

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
