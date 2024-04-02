import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    setOrder([...order, { ...item, quantity: 1 }]);
  };


  return {
    addItem
  };  
}
