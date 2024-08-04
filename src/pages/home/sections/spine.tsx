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
    <div  className='bg-no-repeat bg-a-spline-img h-[600px] pt-16 w-full px-10 flex flex-col '>
        <h2  
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className='font-montserrat w-[950px] font-semibold text-[40px]/[50px]  text-white'>
          Earn <span className='text-[#6868AE]'>$NEB</span> by borrowing, multiplying and profiting  with DeFi’s top protocols on <span className='text-[#6868AE]'><br />Nebula Protocol</span>
        </h2>
        <Button 
        data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    className="mt-8">Learn More</Button>
        <Contributions />
    </div>
  )
}

export default ASpline