import Header from "./components/Header";
import { menuItems } from "./api/db";

export default function App() {
  return (
    <>
    <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}