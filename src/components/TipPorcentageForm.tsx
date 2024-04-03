import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: "tip-0",
    value: 0,
    label: "0%",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPorcentageFormProps = {
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

export default function TipPorcentageForm({
  tip,
  dispatch,
}: TipPorcentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form>
        {tipOptions.map((option) => (
          <div key={option.id} className="flex gap-2">
            <label htmlFor={option.id}>{option.label}</label>
            <input
              onChange={() =>
                dispatch({ type: "add-tip", payload: { value: option.value } })
              }
              id={option.id}
              type="radio"
              name="tip"
              value={option.value}
              checked={option.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
