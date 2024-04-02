import { OrderItem } from "../types";

type OrderTotalProps = {
  subtotal: number;
};

export default function OrderTotal({ subtotal }: OrderTotalProps) {
  console.log('entra')
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>
          Subototal a Pagar: <b>${subtotal}</b>
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
