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
          title="Guest Lecture"
        />
        <BackgroundCircles/>

        <ComingSoon/>
        
      </div>
      <Gradient/>
    </Section>
  )
}

export default GuestLecture;