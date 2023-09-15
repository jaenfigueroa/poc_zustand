import { incrementBear, decrementBear, removeAllBears } from '../store/BearsStore'

const Control = () => {
  return (
    <>
      <button onClick={() => incrementBear(1)}>Agregar 1 oso</button>
      <button onClick={() => decrementBear(1)}>Quitar 1 oso</button>
      <button onClick={() => removeAllBears()}>Quitar todos los osos</button>
    </>
  )
}

export default Control
