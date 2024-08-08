import { useState } from "react"
import { MenuItem, MenuOrder } from "../types"

export default function useOrder() {

  const initialOrder = () => {
    const localStorageOrder = localStorage.getItem('order');
    return localStorageOrder ? JSON.parse(localStorageOrder) : []
  }

  const [order, setOrder] = useState<MenuOrder[]>(initialOrder)

  function addItem(item: MenuItem) {
    const itemExist = order.find(orderItem => orderItem.id === item.id)
    if(itemExist) {
      const updateOrder = order.map(orderItem => orderItem.id === item.id ?
        {...orderItem, quantity: orderItem.quantity + 1} :
        orderItem
      )
      setOrder(updateOrder)
    } else {
      const newItem = {...item, quantity: 1};
      setOrder([...order, newItem])
    }
  }

  function removeItem(id: MenuItem['id']) {
    setOrder(order.filter(orderItem => orderItem.id !== id))
  }

  return {
    order,
    addItem,
    removeItem
  }
}
