import { createContext, useReducer } from "react";
import { useSelector, useDispatch } from 'react-redux';

export interface Product { 
  id: number, 
  name: string,
  price: number, 
  stock: number,
}

export interface CartItem extends Product {
  quantity: number
}

export interface CartState {
  items: CartItem[],
  total: number
}

interface CartAction { 
  type: 'ADD' | 'REMOVE' | 'UPDATE' | 'CLEAR', 
  payload: CartItem
}

const getInitialState = () => { 
  const savedState = localStorage.getItem('cart');
  return savedState ? JSON.parse(savedState) : { items: [], total: 0 };
}

export const CartReducer = (state: CartState, action: CartAction): CartState => { 
  let newState: CartState = state;
  switch (action.type) { 
    case 'ADD':
      newState = {
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price * action.payload.quantity
      };
      break;
    case 'REMOVE':
      newState = {
        items: [...state.items.filter(item => item.id !== action.payload.id)],
        total: state.total - action.payload.price * action.payload.quantity
      };
      break;
    case 'UPDATE':
      let item = state.items.find(item => item.id === action.payload.id);
      if (item) { 
        newState = {
          items: state.items.map(item => item.id === action.payload.id ? action.payload : item),
          total: state.total + action.payload.price * (action.payload.quantity - item.quantity)
        };
      }
      break;
    case 'CLEAR':
      newState = {items: [], total: 0};
      break;
  }
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export const CartContext = createContext<{state: CartState, dispatch: React.Dispatch<CartAction>} | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 

  const [state, dispatch] = useReducer(CartReducer, getInitialState());

  return (
    <CartContext.Provider value = {{ state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

