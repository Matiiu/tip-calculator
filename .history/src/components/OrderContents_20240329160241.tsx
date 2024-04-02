import { OrderItem } from "../types";
import { formatCurrency } from "../../.history/src/helpers/index_20240329155241";

type OrderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Cosumo</h2>

      <section className="space-y-3 mt-10">
        {!order.length ? (
          <p className="text-center">La Orden Está Vacía</p>
        ) : (
          order.map((item) => (
            <div 
                className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                key={item.id}
            >
                <div>
                    <p className="text-lg">
                        {item.name} - {item.price}
                    </p>
                    <p className="font-black">
                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                </div>

              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
