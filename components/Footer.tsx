const Footer = () => {
  return (
    <footer className='mx-auto w-11/12 border-t-2 border-black p-14'>
      <div className='flex flex-col items-center gap-2 text-white'>
        <ul className='flex gap-2'>
          <li className='after:ml-2 after:content-["•"]'>
            <a
              className='border-dashed hover:border-b-2'
              href='https://github.com/c3gh/vota.dev'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </li>
          <li className='after:ml-2 after:content-["•"]'>
            <a
              className='border-dashed hover:border-b-2'
              href='https://twitter.com/c_guerra0'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className='border-dashed hover:border-b-2'
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
