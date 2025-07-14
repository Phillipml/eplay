import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Game } from '@/types/game'

type CartState = {
  items: Game[]
  isOpen: boolean
}
const initialState: CartState = {
  items: [],
  isOpen: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((i) => i.id === action.payload.id)
      !game ? state.items.push(action.payload) : alert('O jogo já está no carrinho')
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})
export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
