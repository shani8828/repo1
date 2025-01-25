import React from 'react'
import Section from './Section';
import Heading from './Heading';
import ComingSoon from './design/ComingSoon';
import { BackgroundCircles } from './design/Hero';
import { Gradient } from './design/Services';

const GuestLecture = () => {
  return (
    <Section id='guestLecture'>
        <div className="container relative z-2 min-h-screen">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Guest Lectures"
        />
        <BackgroundCircles/>

        <ComingSoon/>
        
      </div>
      <Gradient/>
      <div className="text-2xl text-center m-0">
        <span><a href="https://optima.org.in/guest-lectures" className="bg-transparent border border-n-1/10 transition-all duration-300 hover:shadow-md hover:shadow-purple-500 p-2 rounded-md cursor-pointer" target="_blank">Visit</a></span>
        <span> our past edition.</span>
      </div>
    </Section>
  )
}

export default GuestLecture;