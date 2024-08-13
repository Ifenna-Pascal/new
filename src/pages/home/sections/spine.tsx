import { useEffect } from "react"
import { Button } from "../../../ui"
import Contributions from "./contributions"
import AOS from 'aos'

const ASpline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration

    })
  })
  
  return (
    <div  className='bg-no-repeat bg-a-spline-img h-[500px] lg:h-[600px]  lg:pt-16 lg:items-start lg:justify-start items-center justify-center w-full px-6 lg:px-10 flex flex-col '>
        <h2  
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className='font-montserrat lg:w-[950px] lg:font-semibold text-[24px]/[34px] text-center lg:text-left lg:text-[40px]/[50px]  text-white'>
          Earn <span className='text-[#6868AE]'>$NEB</span> by borrowing, multiplying and profiting  with DeFi’s top protocols on <span className='text-[#6868AE]'><br />Nebula Protocol</span>
        </h2>
        <Button 
        data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    className="mt-4 lg:mt-8">Learn More</Button>
        <Contributions />
    </div>
  )
}

export default ASpline