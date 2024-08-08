import { useEffect } from "react";
import ContentConsumo from "./components/ContentConsumo"
import ContentMenu from "./components/ContentMenu"
import ContentTotals from "./components/ContentTotals";
import useOrder from "./hooks/useOrder"


function App() {

  const { order, addItem, removeItem } = useOrder();

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order))
  }, [order])

  return (
    <>
      <header className=" w-full p-4 bg-cyan-600 text-center text-4xl font-black">
        <h1>Calculadora de propinas y consumo</h1>
      </header>

      <div className=" max-w-7xl mx-auto grid grid-cols-2 my-20">
        <div className=" px-5 pt-5">
          <h2 className=" font-extrabold text-3xl mb-5">Menú</h2>
          <ContentMenu
            addItem={addItem}
          />
        </div>
        <div className=" p-5 border-dashed border-2 border-cyan-600">
          {order.length ? (
            <>
              <ContentConsumo
                order={order}
                removeItem={removeItem}
              />
              <ContentTotals
                order={order}
              />
            </>
          ) : (
            <p className=" text-center text-lg">No hay ningún pedido.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
