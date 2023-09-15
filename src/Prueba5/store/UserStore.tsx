import { create } from 'zustand'
import * as O from 'optics-ts'

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

export const useUserStore = create<State & Actions>((set) => ({
  user: {
    name: '',
    lastName: '',
  },
  animal: {
    name: '',
    age: 0,
  },

  updateNameUser: (newName: State['user']['name']) =>
    set(O.modify(O.optic<State>().path('user.name'))(() => newName)), // (state) => newName)

  updateAgeAnimal: (newAge: State['animal']['age']) =>
    set(O.modify(O.optic<State>().path('animal.age'))(() => newAge)), // (state) => newName)
}))
