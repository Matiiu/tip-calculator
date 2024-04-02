import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
};

export default function MenuItem({ item }: MenuItemProps) {
  const { name, price } = item;
  
  return (
    <section>
        <p>{name}</p>
        <p>{price}</p>
    </section>
  );
}
