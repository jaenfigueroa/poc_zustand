import { create } from 'zustand'

type State = {
  bears: number
}

type Actions = {
  incrementBear: (qty: number) => void // qty -> quantity -> cantidad
  decrementBear: (qty: number) => void
  removeAllBears: () => void
}

export const useBearsStore = create<State & Actions>((set) => ({
  bears: 10,

  incrementBear: (qty) =>
    set((state) => ({
      bears: state.bears + qty,
    })),

  decrementBear: (qty) =>
    set((state) => ({
      bears: state.bears - qty,
    })),

  removeAllBears: () =>
    set({
      bears: 0,
    }),
}))
