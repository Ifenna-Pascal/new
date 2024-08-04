import { useEffect } from 'react'
import Footer from '../../layout/footer'
import NavigationBar from '../../layout/navbar'
import { ASpline, DexAnalysis, HeroSection, Staking } from './sections'
import BlogSection from './sections/blog'
import HowItWorks from './sections/how-it-works'
import Paterners from './sections/paterners'
import AOS from 'aos'
import 'aos/dist/aos.css';

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration

    })
  })


  return (
    <div  className='bg-black-100'>
        <div className='bg-backdrop bg-center -mt-9 bg-cover bg-no-repeat'>
           
        <NavigationBar />
        <HeroSection />
        </div>
        <ASpline />
        <HowItWorks />
        <Staking />
        <DexAnalysis />
        <Paterners />
        <BlogSection />
        <Footer />
    </div>
  )
}

export default HomePage