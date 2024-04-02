import { OrderItem } from "../types";

type OrderTotalProps = {
  order: OrderItem[];
};

export default function OrderTotal({ order }: OrderTotalProps) {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>
          Subototal a Pagar: <b>{order.reduce((total, currentValue) => total * currentValue.price * currentValue.quantity, 0)}</b>
        </p>

        <p>
          Propina: <b>$0</b>
        </p>

        <p>
          Total a Pagar: <b>$0</b>
        </p>
      </div>

      <button></button>
    </>
  );
}
