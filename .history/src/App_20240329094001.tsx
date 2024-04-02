import Header from "./components/Header";
import { menuItems } from "./api/db";

export default function App() {
  return (
    <>
    <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menú</h2>
        </div>

        <div>
          <h2>Cosnumo</h2>

        </div>
      </main>
    </>
  )
}