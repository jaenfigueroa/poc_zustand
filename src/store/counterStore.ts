import { create } from 'zustand'

interface CounterState {
  animals: number
  persons: number

  incrementAnimals: (value: number) => void
  decrementAnimals: (value: number) => void
  multiplyPersons: (value: number) => void
  dividePersons: (value: number) => void
}

export const useCounterStore = create<CounterState>((set, get) => ({
  animals: 10,
  persons: 50,

  // 1RA FORMA
  incrementAnimals: (value) =>
    set((state) => ({
      animals: state.animals + value,
    })),

  decrementAnimals: (value) =>
    set((state) => ({
      animals: state.animals - value,
    })),

  // 2DA FORMA, USANDO EL GET()
  multiplyPersons: (value) => {
    const { persons } = get()
    set({
      persons: persons * value,
    })
  },

  dividePersons: (value) => {
    const { persons } = get()
    set({
      persons: persons / value,
    })
  },
}))
