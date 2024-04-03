import { useReducer } from "react";

import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPorcentageForm from "./components/TipPorcentageForm";

import { menuItems } from "./api/db";
import { initialState, OrderReducer } from "./reducers/order-reducer";

export default function App() {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <section className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </section>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {!state?.order.length ? (
            <p className="text-center">La Orden Está Vacía</p>
          ) : (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPorcentageForm tip={state.tip} dispatch={dispatch} />
              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}
