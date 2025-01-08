import Image from 'next/image'
import React from 'react'
import HomeSrc from '@/public/1.jpg'
import Hero from '@/components/Hero'

export default function Page() {
  return <Hero imgUrl={HomeSrc} altText="Home" content="werafeadfadfsafdsaf" />
}
