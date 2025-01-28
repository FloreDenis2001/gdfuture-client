'use client';
import CTASection from '@/components/CTASection'
import ProcessSection from '@/components/ProcessSection'
import HeroService from '@/components/services/HeroService'
import ServicesGrid from '@/components/services/ServiceGrid'
import TechnologiesSection from '@/components/services/TechnologiesSection'
import React from 'react'

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-32">
    <HeroService/>
    <ServicesGrid />
    <ProcessSection />
    <TechnologiesSection />
    <CTASection />
  </div>
  )
}

export default Services