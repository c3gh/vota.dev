import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from '../hooks/useTranslation'
import Header from '../components/Header'
import SectionTitle from '../components/SectionTitle'
import List from '../components/List'
import VotePill from '../components/VotePill'
import * as SVG from '../components/SVGIcons'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <Head>
        <title>{i18n.SEO_TITLE}</title>
      </Head>
      <Header />
      <section className='mb-24'>
        <h1 className='mx-auto max-w-5xl text-center text-8xl font-bold text-white'>
          {i18n.HERO_TITLE}
        </h1>
        <p className='mt-4 text-center text-xl text-white opacity-80'>
          {i18n.HERO_SUBTITLE}
        </p>

        <div className='mx-auto mt-20 max-w-4xl rounded-lg border-2 border-black bg-white p-10'>
          <SectionTitle>Frontend</SectionTitle>
          <List>
            <VotePill title='React' svg={<SVG.React />} />
            <VotePill title='Angular' svg={<SVG.Angular />} />
            <VotePill title='Vue.js' svg={<SVG.Vue />} />
            <VotePill title='Svelte' svg={<SVG.Svelte />} />
            <VotePill title='Preact' svg={<SVG.Preact />} />
          </List>

          <SectionTitle>Backend</SectionTitle>
          <List>
            <VotePill title='Nest.js' svg={<SVG.Nest />} />
            <VotePill title='Express' svg={<SVG.Express />} />
            <VotePill title='Fastify' svg={<SVG.Fastify />} />
            <VotePill title='Hapi' svg={<SVG.Hapi />} />
          </List>

          <SectionTitle>Fullstack</SectionTitle>
          <List>
            <VotePill title='Next.js' svg={<SVG.Next />} />
            <VotePill title='Nuxt' svg={<SVG.Nuxt />} />
            <VotePill title='SvelteKit' svg={<SVG.Svelte />} />
            <VotePill title='Remix' svg={<SVG.Remix />} />
          </List>

          <SectionTitle>Empaquetadores de código</SectionTitle>
          <List>
            <VotePill title='Webpack' svg={<SVG.Webpack />} />
            <VotePill title='Rollup' svg={<SVG.Rollup />} />
            <VotePill title='Parcel' svg={<SVG.Parcel />} />
            <VotePill title='Esbuild' svg={<SVG.Esbuild />} />
            <VotePill title='Vite' svg={<SVG.Vite />} />
          </List>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
