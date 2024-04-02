import { formatCurrency } from '../helpers'

type OrderTotalProps = {
  subtotal: number;
};

export default function OrderTotal({ subtotal }: OrderTotalProps) {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>
          Subototal a Pagar: <b>${formatCurrency(subtotal)}</b>
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
