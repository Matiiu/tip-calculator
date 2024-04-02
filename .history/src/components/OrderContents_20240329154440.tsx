import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Cosumo</h2>

      <section className="space-y-3 mt-5">
        {order.lengt === 0 ? 
        (<p className="text-center">La Orden Esta Vacía</p>) :} 
      </section>
    </div>
  );
}
