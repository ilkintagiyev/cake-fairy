import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../types/products';

interface ShopState {
  cart: Product[];
  favs: Product[];
}


const getLocalData = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
};

const initialState: ShopState = {
  cart: getLocalData('cart'),
  favs: getLocalData('favs'),
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const exists = state.cart.find(i => i.id === action.payload.id);
      if (!exists) {

        state.cart.push({ ...action.payload, quantity: 1 });
      } else {

        exists.quantity = (exists.quantity || 1) + 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    toggleFav: (state, action: PayloadAction<Product>) => {
      const index = state.favs.findIndex(i => i.id === action.payload.id);
      if (index >= 0) {
        state.favs.splice(index, 1);
      } else {
        state.favs.push(action.payload);
      }
      localStorage.setItem('favs', JSON.stringify(state.favs));
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(i => i.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find(i => i.id === action.payload);
      if (item && (item.quantity || 1) > 1) {
        item.quantity! -= 1;
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(i => i.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }
});


export const {
  addToCart,
  toggleFav,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} = shopSlice.actions;


export default shopSlice.reducer;