import React from 'react'
import Hero from '@/components/Hero'
import PerSrc from '@/public/2.jpg'

export default function Page() {
  return (
    <Hero imgUrl={PerSrc} altText="Performance" content="Performance!!!!" />
  )
}
