import { formatCurrency } from "../helpers"
import type { MenuItem, MenuOrder } from "../types"

type ContentConsumoProps = {
  order: MenuOrder[]
  removeItem: (id: MenuItem['id']) => void
}


export default function ContentConsumo({ order, removeItem}: ContentConsumoProps) {

  return (
    <div>
      <h2 className=" font-extrabold text-3xl mb-5">Consumo</h2>
      {order.map(item => (
        <div key={item.id} className=" py-3 flex justify-between items-center border-t border-gray-500 last-of-type:border-b">
          <div>
            <p>
              {item.name} - {formatCurrency(item.price)}
            </p>
            <p className=" font-bold">
              Cantidad: {''}
              {item.quantity} - {formatCurrency(item.price * item.quantity)}
            </p>
          </div>

          <button
            className=" w-8 h-8 rounded-full bg-red-500 text-white font-bold text-xl flex justify-center"
            onClick={() => removeItem(item.id)}
          >x</button>
        </div>
      ))}
    </div>
  )
}
