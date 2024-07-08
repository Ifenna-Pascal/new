import Footer from '../../layout/footer'
import { ASpline, DexAnalysis, FAQ, HeroSection, Staking } from './sections'

const HomePage = () => {
  return (
    <div  className='bg-black-100'>
        <HeroSection />
        <DexAnalysis />
        <Staking />
        <ASpline />
        <FAQ />
        <Footer />
    </div>
  )
}

export default HomePage