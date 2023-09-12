import './App.css'
import { useCounterStore } from './store/counterStore'
// import shallow from 'zustand/shallow'

const App = () => {
  // const count = useCounterStore(({ count }) => count)

  const counterStore = useCounterStore(
    (state) => ({
      count: state.count,
      incrementCount: state.incrementCount,
      decrementCount: state.decrementCount,
    })
    // shallow
  )

  return (
    <div className='app'>
      <h2>Numero: {counterStore.count}</h2>
      <button onClick={() => counterStore.incrementCount(2)}>Sumar 2</button>
      <button onClick={() => counterStore.decrementCount(2)}>Restar 2</button>
    </div>
  )
}

export default App
