import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
  user: {
    name: string
    lastName: string
  }
  animal: {
    name: string
    age: number
  }
}

type Actions = {
  updateNameUser: (newName: State['user']['name']) => void
  updateAgeAnimal: (newAge: State['animal']['age']) => void
}

export const useUserStore = create(
  immer<State & Actions>((set) => ({
    user: {
      name: '',
      lastName: '',
    },
    animal: {
      name: '',
      age: 0,
    },
    updateNameUser: (newName: State['user']['name']) =>
      set((state) => {
        state.user.name = newName
      }),
    updateAgeAnimal: (newAge: State['animal']['age']) =>
      set((state) => {
        state.animal.age = newAge
      }),
  }))
)
