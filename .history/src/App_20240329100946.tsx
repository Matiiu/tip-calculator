import Header from "./components/Header";
import { menuItems } from "./api/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";

export default function App() {
  const { addItem } = useOrder();

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

        <div>
          <h2>Cosnumo</h2>
        </div>
      </main>
    </>
  );
}
