import type { MenuItem } from '../types'

type ItemProp = {
    item: MenuItem
}
export default function MenuItem({ item }: ItemProp) {
    const { name, price } = item;

  return (
    <section>
        {name} {price}
    </section>
  )
}
