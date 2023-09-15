import { useBearsStore } from '../store/BearsStore'

const Screen = () => {
  const bears = useBearsStore((state) => state.bears)

  return <p>Numero de osos: {bears}</p>
}

export default Screen
