import { useUserStore } from '../store/UserStore'

const Control = () => {
  const userName = useUserStore((state) => state.user.name)
  const lastname = useUserStore((state) => state.animal.age)
  const updateName = useUserStore((state) => state.updateNameUser)
  const animalAge = useUserStore((state) => state.updateAgeAnimal)

  return (
    <>
      Actualiza nombre
      <input type='text' onChange={(e) => updateName(e.currentTarget.value)} value={userName} />
      <hr />
      Actualiza apellido
      <input
        type='number'
        onChange={(e) => animalAge(Number(e.currentTarget.value))}
        value={lastname}
      />
    </>
  )
}

export default Control
