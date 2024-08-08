import { menuItems } from "../data/db";
import { formatCurrency } from "../helpers";
import type { MenuItem } from "../types";

type ContentMenuProps = {
  addItem: (item: MenuItem) => void
}

export default function ContentMenu({addItem} : ContentMenuProps) {

  return (
    <div className=" space-y-2">
      {menuItems.map(item => (
        <button
          key={item.id}
          className=" w-full flex justify-between p-2 border-2 border-cyan-600 rounded-lg hover:bg-cyan-200"
          onClick={() => addItem(item)}
          >
          <p>{item.name}</p>
          <p className=" font-bold">{formatCurrency(item.price)}</p>
        </button>
      ))}
    </div>
  )
}
