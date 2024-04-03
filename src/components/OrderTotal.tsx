import { useMemo, Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

export default function OrderTotal({ order, tip, dispatch }: OrderTotalProps) {
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

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>
          Subototal a Pagar: <b>{formatCurrency(subtotal)}</b>
        </p>

        <p>
          Propina: <b>{formatCurrency(tipAmount)}</b>
        </p>

        <p>
          Total a Pagar: <b>{formatCurrency(total)}</b>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white font-bold  mt-10"
        onClick={() => dispatch({ type: "place-order" })}
      >
        Guardar Orden
      </button>
    </>
  );
}
