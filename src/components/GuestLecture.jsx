import React from 'react'
import Section from './Section';
import Heading from './Heading';
import ComingSoon from './design/ComingSoon';
import { BackgroundCircles } from './design/Hero';
import { Gradient } from './design/Services';

const GuestLecture = () => {
  return (
    <Section id='guestLecture'>
        <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Guest Lectures"
        />
        <BackgroundCircles/>

        <div className='flex justify-center'>
          <ComingSoon link="https://optima.org.in/guest-lectures"/>
        </div>
        
      </div>
      <Gradient/>
    </Section>
  )
}

export default GuestLecture;