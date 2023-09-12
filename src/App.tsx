import './App.css'
import { useCounterStore } from './store/counterStore'
// import shallow from 'zustand/shallow'

const App = () => {
  // const count = useCounterStore(({ count }) => count)

  const counterStore = useCounterStore(
    (state) => ({
      count: state.count,
      incrementCount: state.incrementCount,
    })
    // shallow
  )

  return (
    <div className='app'>
      <h2>Numero: {counterStore.count}</h2>
      <button onClick={() => counterStore.incrementCount(2)}>Agregar</button>
    </div>
  )
}

export default App
