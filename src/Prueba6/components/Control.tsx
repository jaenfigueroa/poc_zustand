import { useZooStore } from '../store/UserStore--new'

const Control = () => {
  const addFish = useZooStore((state) => state.addFish)
  const addBear = useZooStore((state) => state.addBear)
  const eatFish = useZooStore((state) => state.eatFish)

  return (
    <>
      <button onClick={() => addFish(1)}>Agregar 1 pescado</button>
      <button onClick={() => addBear(1)}>Agregar 1 oso</button>
      <button onClick={() => eatFish(1)}>Comer 1 pescado</button>
    </>
  )
}

export default Control
