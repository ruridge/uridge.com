import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Robert Uridge</title>
        <meta name="description" content="Robert's homepage" />
      </Head>
      <section className="flex flex-col items-center justify-center w-screen h-screen p-4">
        <h1 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          <span className="text-purple-300">Robert</span> Uridge
        </h1>
        <p className="text-2xl text-gray-700">
          Digital artist / developer / designer
        </p>
      </section>
    </>
  )
}

export default Home
