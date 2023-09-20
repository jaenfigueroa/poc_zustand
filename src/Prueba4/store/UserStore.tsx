import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
  user: {
    name: string
    lastName: string
    age: number
  }
  pet: {
    name: string
    age: number
  }
}

type Actions = {
  updateUserName: (newName: State['user']['name']) => void
  updatePetAge: (newAge: State['pet']['age']) => void
}

export const useExampleStore = create(
  immer<State & Actions>((set) => ({
    user: {
      name: '',
      lastName: '',
      age: 0,
    },
    pet: {
      name: '',
      age: 0,
    },
    updateUserName: (newName: State['user']['name']) =>
      set((state) => {
        state.user.name = newName
      }),
    updatePetAge: (newAge: State['pet']['age']) =>
      set((state) => {
        state.pet.age = newAge
      }),
  }))
)
