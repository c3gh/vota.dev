import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='flex min-h-screen flex-col bg-blue-600'>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default MyApp
