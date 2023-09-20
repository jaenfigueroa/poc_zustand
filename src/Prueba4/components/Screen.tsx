import { useExampleStore } from '../store/UserStore'

const Screen = () => {
  const userName = useExampleStore((state) => state.user.name)
  const petAge = useExampleStore((state) => state.pet.age)

  return (
    <>
      <p>Nombre de usuario: {userName}</p>
      <p>Edad de mascota: {petAge}</p>
    </>
  )
}

export default Screen
