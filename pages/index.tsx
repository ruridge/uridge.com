import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import profilePic from '../public/rob-head-shot-profile-photo.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Robert Uridge</title>
        <meta name="description" content="Robert's homepage" />
      </Head>
      <section className="flex flex-col p-4">
        <div className="md:text-center">
          <h1 className="text-[9vw] md:text-[5rem] font-extrabold text-gray-700">
            <span className="text-purple-300">Robert</span> Uridge
          </h1>
          <p className="text-xl text-gray-700 md:text-2xl">
            Digital artist / developer / designer
          </p>
        </div>
        <Image
          src={profilePic}
          alt="A hedshot of Robert Uridge wearing a blue t-shirt"
          sizes="(max-width: 640px) 96px, 240px"
          className="self-center w-24 mt-4 rounded-full shadow-xl md:w-60 md:rounded-xl"
        />
      </section>
    </>
  )
}

export default Home
