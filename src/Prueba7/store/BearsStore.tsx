import { create } from 'zustand'

type State = {
  bears: number
}

export const useBearsStore = create<State>(() => ({
  bears: 10,
}))

// las actions quedan fuera del store, para usar ya no necesitamos del usar el hook, si no directamente
// version modificada -> Prueba 2
export const incrementBear = (qty: number) =>
  useBearsStore.setState((state) => ({
    bears: state.bears + qty,
  }))

export const decrementBear = (qty: number) =>
  useBearsStore.setState((state) => ({
    bears: state.bears - qty,
  }))

export const removeAllBears = () =>
  useBearsStore.setState(() => ({
    bears: 0,
  }))
