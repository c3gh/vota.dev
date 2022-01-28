import { useSession } from 'next-auth/react'
import * as SVG from './SVGIcons'
import LoginButton from './LoginButton'
import NavUserProfile from './NavUserProfile'

const NavUserOutlet = () => {
  // check if someone is signed in
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <SVG.Loading className='mr-1 h-6 w-6 animate-spin text-white ' />
  }

  if (status === 'unauthenticated') {
    return <LoginButton />
  }

  return <NavUserProfile user={session?.user} />
}

export default NavUserOutlet
