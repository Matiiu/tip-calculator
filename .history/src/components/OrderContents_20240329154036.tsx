import { MenuItem } from "../types"

type OrderContentsProps = {
    order: MenuItem
}

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Cosumo</h2>
    </div>
  )
}
