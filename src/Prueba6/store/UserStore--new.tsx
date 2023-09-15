import { create, StateCreator } from 'zustand'

type FishSlice = {
  fish: number
  addFish: (cty: number) => void // qty --> quantity --> cantidad
}

type BearSlice = {
  bear: number
  addBear: (cty: number) => void
  eatFish: (cty: number) => void
}

const createFishSlice: StateCreator<FishSlice & BearSlice, [], [], FishSlice> = (set) => ({
  fish: 20,
  addFish: (qty) =>
    set((state) => ({
      fish: state.fish + qty,
    })),
})

const createBearSlice: StateCreator<FishSlice & BearSlice, [], [], BearSlice> = (set) => ({
  bear: 5,

  addBear: (qty) =>
    set((state) => ({
      ...state,
      bear: state.bear + qty,
    })),

  eatFish: (qty: number) =>
    set((state) => ({
      fish: state.fish - qty, // aqui podemos acceder a fish tambien
    })),
})

export const useZooStore = create<FishSlice & BearSlice>()((...set) => ({
  ...createFishSlice(...set),
  ...createBearSlice(...set),
}))
