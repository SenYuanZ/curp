import Hero from '@/components/Hero'
import React from 'react'
import ScSrc from '@/public/globe.svg'

export default function Page() {
  return <Hero imgUrl={ScSrc} altText="Sc" content="Scaledada!!!!" />
}
