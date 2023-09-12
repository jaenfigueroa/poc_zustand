import './App.css'
import { useCounterStore } from './store/counterStore'
// import shallow from 'zustand/shallow'

const App = () => {
  // 1RA FORMA
  // EXTRAER ESPECÍFICAMENTE SOLO ESTAS PROPIEDADES, MEJOR OPTIMIZACION
  // EVITAmos LA RENDERIZACIÓN INNECESARIA DE COMPONENTES SI OTRAS PARTES DEL ESTADO CAMBIAN
  const { animals, persons } = useCounterStore(
    (state) => ({
      animals: state.animals,
      persons: state.persons,
    })
    // shallow
  )

  // 2DA FORMA
  // EXTRAER TODAS LAS PROPIEDADES
  const { incrementAnimals, decrementAnimals, multiplyPersons, dividePersons } = useCounterStore()

  return (
    <div className='app'>
      <h2>Animales: {animals}</h2>
      <h2>Personas: {persons}</h2>

      <div className='buttonsContainer'>
        <button onClick={() => incrementAnimals(2)}>Restar 2 animales</button>
        <button onClick={() => decrementAnimals(2)}>Sumar 2 animales</button>
        <button onClick={() => multiplyPersons(2)}>Multiplicar por 2 las personas</button>
        <button onClick={() => dividePersons(2)}>Dividir entre 2 las personas</button>
      </div>
    </div>
  )
}

export default App
