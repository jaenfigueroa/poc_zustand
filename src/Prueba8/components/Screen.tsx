import { useBearStore } from '../store/BearsStore'

const Screen = () => {
  // const bears = useBearsStore((state) => state.bears) // ANTES
  const bears = useBearStore.use.bears() // AHORA

  return <p>Numero de osos: {bears}</p>
}

export default Screen
