// 练习4：购物车组件

// 要求实现：
// 商品列表展示
// 添加商品到购物车
// 购物车数量修改
// 计算总价
// 库存管理
// 使用 Context API 管理购物车状态
// 使用 localStorage 持久化购物车数据


import { Fragment, useContext, useState} from "react";
import { CartContext, Product, CartItem } from "./cartContext";

export default function ShoppingCart() {

  const initialProductList = [
    { id: 1, name: 'Product 1', price: 100, stock: 10 },
    { id: 2, name: 'Product 2', price: 200, stock: 10 },
    { id: 3, name: 'Product 3', price: 500, stock: 10 },
  ]

  const [productList, setProductList] = useState<Product[]>(initialProductList);
  const { state, dispatch } = useContext(CartContext);

  const handleAdd = (product: Product) => {
    dispatch({ type: 'ADD', payload: { ...product, quantity: 1 } });
    setProductList([...productList.map(item => item.id === product.id ? { ...item, stock: item.stock - 1 } : item)]);
  }

  const handleIncrement = (product: CartItem) => { 
    dispatch({ type: 'UPDATE', payload: { ...product, quantity: product!.quantity + 1 } });
    setProductList([...productList.map(item => item.id === product.id ? { ...item, stock: item.stock - 1 } : item)]);
  }

  const handleDecrement = (product: CartItem) => { 
    dispatch({ type: 'UPDATE', payload: { ...product, quantity: product!.quantity - 1 } });
    setProductList([...productList.map(item => item.id === product.id ? { ...item, stock: item.stock + 1 } : item)]);
  }

  return (
    <Fragment>
      <h5>高级：购物车组件</h5>
      <h6>商品列表</h6>
      <ul>
        {
          productList.map((item: Product, index: number) => (
            <li key={index}>
              {item.name} - 价格：{item.price} - 库存：{item.stock}
              <button disabled={ state.items.find(i => i.id === item.id)} onClick={ () => handleAdd(item)}>加入购物车</button>
            </li>
          ))
        }
      </ul>
      <h6>购物车</h6>
      { 
        state.items.map((item: CartItem, index: number) => (
          <li key={index}>
            {item.name} - 价格：{item.price} - 数量：{item.quantity}
            <button onClick={ () => handleIncrement(item)}>+</button>
            <button onClick={ () => handleDecrement(item)}>-</button>
          </li>
        ))
      }
      <h6>总价</h6>
      <p>{ state.total }</p>
      
    </Fragment>
  )
}