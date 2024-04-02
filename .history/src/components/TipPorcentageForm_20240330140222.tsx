const tipOptions = [
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
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export default function TipPorcentageForm({ setTip }: TipPorcentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input 
                onChange={(e) => setTip(Number(e.target.value))}
                id={tip.id}
                type="radio"
                name="tip"
                value={tip.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
