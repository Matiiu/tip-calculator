import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const idFound = order.findIndex(({ id }) => id === item.id)
    console.log(idFound)
    if (idFound >= 0) {
        const updateOrder = [...order];
        updateOrder[idFound].quantity ++;
        setOrder(updateOrder);
    }
    const newItem = { ...item, quantity: 1 };
    setOrder([...order, newItem]);
  };


  return {
    addItem
  };  
}
