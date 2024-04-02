import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  subtotal: number;
  tip: number;
};

export default function OrderTotal({ subtotal, tip }: OrderTotalProps) {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>
          Subototal a Pagar: <b>{formatCurrency(subtotal)}</b>
        </p>

        <p>
          Propina: <b>{formatCurrency(subtotal * tip)}</b>
        </p>

        <p>
          Total a Pagar: <b>{formatCurrency(subtotal + (subtotal * tip))}</b>
        </p>
      </div>

      <button></button>
    </>
  );
}
