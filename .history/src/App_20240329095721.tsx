import Header from "./components/Header";
import { menuItems } from "./api/db";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <section className="space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
              />
            ))}
          </section>
        </div>

        <div>
          <h2>Cosnumo</h2>

        </div>
      </main>
    </>
  )
}