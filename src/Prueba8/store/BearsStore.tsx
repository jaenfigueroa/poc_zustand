import { create } from 'zustand'
import { createSelectors } from './createSelectors--normal'

type State = {
  bears: number
}

type Actions = {
  incrementBear: (qty: number) => void // qty -> quantity -> cantidad
  decrementBear: (qty: number) => void
  removeAllBears: () => void
}

const useBearStoreBase = create<State & Actions>((set) => ({
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

export const useBearStore = createSelectors(useBearStoreBase)
