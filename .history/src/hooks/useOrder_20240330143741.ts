import { useMemo, useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0.1);

  function addItem(item: MenuItem) {
    // Buscar la posición del objeto (si es que existe)
    const idFound = order.findIndex(({ id }) => id === item.id);
    if (idFound >= 0) {
      const updateOrder = [...order];
      updateOrder[idFound].quantity++;
      setOrder(updateOrder);
      return;
    }
    setOrder([...order, { ...item, quantity: 1 }]);
  }

  function removeItem(id: MenuItem["id"]) {
    setOrder(order.filter((item) => item.id !== id));
  }

  const subtotal = useMemo(
    () =>
      order.reduce(
        (total, current) => total + current.price * current.quantity,
        0
      ),
    [order]
  );

  const tipAmount = useMemo(() => subtotal * tip, [subtotal, tip]);
  const total = useMemo(() => subtotal + tipAmount, [subtotal, tipAmount]);

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    subtotal,
    tipAmount,
    total,
  };
}
