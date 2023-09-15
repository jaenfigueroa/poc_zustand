import { useBearsStore } from '../store/BearsStore'

const Control = () => {
  const incrementBear = useBearsStore((state) => state.incrementBear)
  const decrementBear = useBearsStore((state) => state.decrementBear)
  const removeAllBears = useBearsStore((state) => state.removeAllBears)

  return (
    <>
      <button onClick={() => incrementBear(1)}>Agregar 1 oso</button>
      <button onClick={() => decrementBear(1)}>Quitar 1 oso</button>
      <button onClick={() => removeAllBears()}>Quitar todos los osos</button>
    </>
  )
}

export default Control
