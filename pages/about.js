import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'

export default () => (
  <>
    <Head />
    <Nav />
    <main className="px-3 py-16">
      <div className="max-w-6xl flex mx-auto">
        <div className="flex-auto md:pt-16">
          <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
            About
          </h2>
          <p className="max-w-xl text-navy-light text-lg sm:text-xl mb-2">
            Your local restaurants are hurt by the current crisis—but they're
            still cooking! Help them stay alive by getting take away from the
            best restaurants in Copenhagen.
          </p>
          <p className="max-w-xl text-navy-light text-lg sm:text-xl">
            Contact us at
          </p>
        </div>
        <div className="flex-shrink-0 hidden md:block w-96 h-96 bg-sand" />
      </div>
    </main>
  </>
)
