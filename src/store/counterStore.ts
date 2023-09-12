import { create } from 'zustand'

interface CounterState {
  count: number
  incrementCount: (value: number) => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 10,
  incrementCount: (value) =>
    set((state) => ({
      count: state.count + value,
    })),
}))
