import { ReactNode } from 'react'

const List = ({ children }: { children: ReactNode }) => {
  return (
    <ul className='mb-16 flex flex-wrap justify-center gap-2'>{children}</ul>
  )
}

export default List
