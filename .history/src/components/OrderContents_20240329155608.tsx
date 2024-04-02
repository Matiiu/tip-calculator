import { OrderItem } from "../types";
import { formatCurrency } from "../../.history/src/helpers/index_20240329155241";

type OrderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Cosumo</h2>

      <section className="space-y-3 mt-5">
        {!order.length ? (
          <p className="text-center">La Orden Está Vacía</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p className="text-lg">
                {item.price} - {item.price}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
