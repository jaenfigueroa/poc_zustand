import { useZooStore } from '../store/UserStore--new'

const Screen = () => {
  const fish = useZooStore((state) => state.fish)
  const bear = useZooStore((state) => state.bear)

  return (
    <>
      <p>Numeros de pescados: {fish}</p>
      <p>Numero de osos: {bear}</p>
    </>
  )
}

export default Screen
