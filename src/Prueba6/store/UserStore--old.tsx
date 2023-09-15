import { create } from 'zustand'

type State = {
  fish: number
  bear: number
}

type Actions = {
  addFish: (cty: number) => void // qty --> quantity --> cantidad
  addBear: (cty: number) => void
  eatFish: (cty: number) => void
}

export const useUserStore = create<State & Actions>((set) => ({
  fish: 20,
  bear: 5,

  addFish: (qty) =>
    set((state) => ({
      fish: state.fish + qty,
    })),

  addBear: (qty) =>
    set((state) => ({
      bear: state.bear + qty,
    })),

  eatFish: (qty) =>
    set((state) => ({
      fish: state.fish - qty,
    })),
}))
