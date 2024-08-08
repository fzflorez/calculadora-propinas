import { useMemo } from "react"
import type { MenuOrder } from "../types"
import { formatCurrency } from "../helpers"

type ContentTotalsProps = {
  order: MenuOrder[]
}

export default function ContentTotals({order} : ContentTotalsProps) {

  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0),[order])

  return (
    <div className=" mt-8 space-y-2">
      <h2 className=" text-2xl font-extrabold">Totales</h2>
      <p className=" text-xl">Total a pagar: {''}
        <span className=" font-bold">{formatCurrency(subtotalAmount)}</span>
      </p>
    </div>
  )
}
