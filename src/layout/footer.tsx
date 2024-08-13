import { Link } from 'react-router-dom'
import { images } from '../assets/images'

const Footer = () => {
  return (
    <footer className='lg:py-[56px] flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between px-4 lg:px-12'>
      <div className='flex flex-col lg:w-[25%]'>
        <Link to={'/'} className='mb-4'>
            <img alt='logo-image' src={images.logo} />
        </Link>
        <span className='font-poppins text-gray-100 w-full text-[12px]'>© 2024 Cindex. All rights reserved</span>
        <br /><br /><br /><br />
      </div>
      <div className='hidden lg:flex items-center lg:flex-col'>
          <h2 className='text-[20px]/[30px]  font-poppins block text-white mb-6'>Community</h2> 
          <Link className='mb-4' to={'#'}>
            <img src={images.twitter} alt="icon-twitter"  />
          </Link>
          <Link className='mb-4' to={'#'}>
            <img src={images.discord} alt="icon-twitter"  />
          </Link>
          <Link className='mb-4' to={'#'}>
            <img src={images.medium} alt="icon-twitter"  />
          </Link>
      </div>
      <div className='lg:hidden flex flex-col '>
          <h2 className='text-[20px]/[30px]  font-poppins block text-white mb-6'>Community</h2> 
          <div className="flex -mt-3 mb-8">
          <Link className='mb-4 mr-4' to={'#'}>
            <img src={images.twitter} alt="icon-twitter"  />
          </Link>
          <Link className='mb-4 mr-4' to={'#'}>
            <img src={images.discord} alt="icon-twitter"  />
          </Link>
          <Link className='mb-4' to={'#'}>
            <img src={images.medium} alt="icon-twitter"  />
          </Link>
          </div>
      </div>
      <div className='flex mt-6 lg:mt-0  flex-col'>
          <h2 className='text-[20px]/[30px] font-poppins text-white mb-6'>Protocol</h2>
          <Link className='mb-4' to={'#'}>
        <span className='font-poppins text-gray-100 text-[14px]'>Docs</span>
          </Link>
          <Link className='mb-4' to={'#'}>
        <span className='font-poppins text-gray-100 text-[14px]'>GitHub</span>
          </Link>
          <br /> <br />
      </div>
      <div className='flex flex-col'>
          <h2 className='text-[20px]/[30px] font-poppins text-white mb-6 mr-8'>About Nebula Protocol</h2>
          <Link className='mb-4' to={'#'}>
        <span className='font-poppins text-gray-100 text-[14px]'>Terms and Conidtion</span>
          </Link>
          <Link className='mb-4' to={'#'}>
        <span className='font-poppins text-gray-100 text-[14px]'>Privacy Policy</span>
          </Link>
          <Link className='mb-4' to={'#'}>
        <span className='font-poppins text-gray-100 text-[14px]'>Contact</span>
          </Link>
      </div>
    </footer> 
  )
}

export default Footer