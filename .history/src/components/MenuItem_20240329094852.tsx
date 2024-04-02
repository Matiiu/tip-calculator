import type { MenuItem } from '../types'
export default function MenuItem({ item }: MenuItem) {
    const { name, price } = item;

  return (
    <section>
        {name} {price}
    </section>
  )
}
