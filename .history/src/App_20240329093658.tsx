import Header from "./components/Header";
import { menuItems } from "./api/db";

export default function App() {
  return (
    <>
    <Header />
      <main className="max-w-7xl mx-auto py-20 grid grid-cols-2">
        <h2 className="">Menú</h2>
        <h2>Cosnumo</h2>
      </main>
    </>
  )
}