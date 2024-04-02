import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  subtotal: number;
  tipAmount: number;
  total: number;
};

export default function OrderTotal({
  subtotal,
  tipAmount,
  total,
}: OrderTotalProps) {
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
        className="w-full bg-black p-3 uppercase text-white font-bold  mt-10 disabled:opacity-10"
        disabled={total === 0}
      >Guardar Orden</button>
    </>
  );
}
