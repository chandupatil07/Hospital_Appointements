import React from 'react'
import { assets } from '../assets/assets'

const About =() => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500' >
        <p>
          ABOUT <span className='text-gray-700 font-medium' >US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12 ' >
        <img  className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Prescripto is a platform that connects patients with verified doctors for online consultations and prescriptions. Our mission is to make healthcare accessible, affordable, and efficient for everyone. </p>
          <p>Prescripto is designed to simplify your healthcare journey. We bring together trusted medical professionals and modern technology to offer seamless online consultations, appointment bookings, and prescription services. Our goal is to empower patients with easy access to quality care—anytime, anywhere.</p>
          <b className='text-gray-800' >Our Vision</b>
          <p>We believe that technology can bridge the gap between patients and healthcare providers. Our team is committed to building tools that simplify medical access, reduce wait times, and improve overall patient experience. Prescripto is more than just an app—it’s a step toward smarter, more connected healthcare.</p>
        </div>
      </div>
<div className='text-xl my-4' >
  <p>WHY  <span className='text-gray-700 font-semibold' >CHOOSE US</span></p>
</div>

<div className='flex flex-col md:flex-row mb-20' >
  
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer' >
    <b>Efficiency:</b>
    <p>Streamlized appointment scheduling that fits into your busy lifestyle.</p>
  </div>
  <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
     <b>Convenience:</b>
    <p>Access to a network of trusted healthcare professionals in your area.</p>
  </div>
  <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
     <b>Personalization:</b>
    <p>Tailored recommandations and reminders to help you stay on top of your health.</p>
  </div>
</div>

    </div>
  )
}

export default About
