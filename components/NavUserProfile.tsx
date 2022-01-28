import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

const NavUserProfile = ({ user }: any) => {
  const handleSignOut = () => signOut()

  return (
    <Menu as='div' className='relative ml-3'>
      <div>
        <Menu.Button className='flex items-center rounded-full text-sm hover:opacity-80'>
          <Image
            width={32}
            height={32}
            className='h-8 w-8 rounded-full'
            src={user.image ?? ''}
            alt=''
          />
          <span className='ml-2 font-semibold text-white'>{user.name}</span>
          <svg
            className='text-white'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'></path>
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 block w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleSignOut}
                className={`${
                  active ? 'bg-blue-300' : ''
                } group flex w-full items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold text-gray-900`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  viewBox='0 0 24 24'
                >
                  <path d='M16 13v-2H7V8l-5 4 5 4v-3z'></path>
                  <path d='M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z'></path>
                </svg>
                Cerrar sesión
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default NavUserProfile
