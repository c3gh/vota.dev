import NavUserOutlet from './NavUserOutlet'

const Header = () => {
  return (
    <header className='mx-auto my-4 mb-32 flex w-full max-w-4xl items-center justify-between'>
      <h1 className='text-2xl font-bold'>🗳️ Vota.Dev</h1>
      <div>
        <NavUserOutlet />
      </div>
    </header>
  )
}

export default Header
