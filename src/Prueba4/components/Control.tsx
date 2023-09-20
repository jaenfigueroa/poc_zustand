import { useExampleStore } from '../store/UserStore'

const Control = () => {
  const userName = useExampleStore((state) => state.user.name)
  const petAge = useExampleStore((state) => state.pet.age)
  const updateUserName = useExampleStore((state) => state.updateUserName)
  const updateAgePet = useExampleStore((state) => state.updatePetAge)

  return (
    <>
      <p>Actualiza nombre de usuario</p>
      <input type='text' onChange={(e) => updateUserName(e.currentTarget.value)} value={userName} />

      <p>Actualiza edad de mascota</p>
      <input
        type='number'
        onChange={(e) => updateAgePet(Number(e.currentTarget.value))}
        value={petAge}
      />
    </>
  )
}

export default Control
