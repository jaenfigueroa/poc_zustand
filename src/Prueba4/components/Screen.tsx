import { useUserStore } from '../store/UserStore'

const Screen = () => {
  const userName = useUserStore((state) => state.user.name)
  const animalAge = useUserStore((state) => state.animal.age)

  return (
    <>
      <p>Nombre usuario: {userName}</p>
      <p>Edad animal: {animalAge}</p>
    </>
  )
}

export default Screen
