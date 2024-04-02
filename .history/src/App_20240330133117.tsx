import Header from "./components/Header";
import { menuItems } from "./api/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";

export default function App() {
  const { order, addItem, removeItem, subtotal } = useOrder();

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <section className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </section>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem} />
          <OrderTotal subtotal={subtotal} />
        </div>
      </main>
    </>
  );
}
