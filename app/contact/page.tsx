'use client';
import ContactGrid from '@/components/contact/ContactGrid'
import FAQSection from '@/components/contact/FAQSection'
import HeroContact from '@/components/contact/HeroContact';
import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black/50 pt-32">
    <HeroContact />
    <ContactGrid />
    <FAQSection />
  </div>
  )
}

export default Contact