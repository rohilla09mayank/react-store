import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

// const fakeCart = [
//     {
//         pizzaId: 12,
//         name: 'Mediterranean',
//         quantity: 2,
//         unitPrice: 16,
//         totalPrice: 32,
//     },
//     {
//         pizzaId: 6,
//         name: 'Vegetale',
//         quantity: 1,
//         unitPrice: 13,
//         totalPrice: 13,
//     },
//     {
//         pizzaId: 11,
//         name: 'Spinach and Mushroom',
//         quantity: 1,
//         unitPrice: 15,
//         totalPrice: 15,
//     },
// ]

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            // payload = id
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload
            )
        },
        increaseItemQuantity(state, action) {
            // payload = id
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )
            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            // payload = id
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
        },
        clearCart(state) {
            state.cart = []
        },
    },
})

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions

export const getCart = (store) => store.cart.cart

export const getTotalCartQuanitity = (store) =>
    store.cart.cart.reduce((sum, curr) => sum + curr.quantity, 0)

export const getTotalCartPrice = (store) =>
    store.cart.cart.reduce((sum, curr) => sum + curr.totalPrice, 0)

export const getPizzaQuantity = (id) => (store) =>
    store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
export default cartSlice.reducer
