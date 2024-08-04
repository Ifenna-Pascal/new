import { Button, CardLayout } from '../../../ui'

const HeroSection = () => {
  return (
    <div className='h-screen relative '>
        <div className='w-full container h-[450px] bg-no-repeat bg-cover flex-col flex mx-auto items-center justify-center '>
          <div className='flex-col relative flex mx-auto items-center justify-center'>
            <h1 className='text-white relative w-[960px] text-center font-[700] font-inter text-[86px]/[99px]'>
                Nebula Protocol
            </h1>
              <p className='text-[18px] w-[395px] pt-5 font-inter text-center text-gray-100'>Borrow, lend, and earn interest</p>
              <Button className='w-[187px] h-[56px] mt-6'>Launch App</Button>  
          </div>        
        </div>
        <div className="flex mx-auto w-[1000px] mt-8 gap-x-6 items-center">
          <CardLayout size={'sm'} variant={'active'}>
            <span className='text-black font-[16px] font-montserrat mb-4'>Market Size</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-black-100'>$ 2,478,890,999.32</h2>
          </CardLayout>
          <CardLayout size={'sm'}>
            <span className='text-gray-100 font-[16px] font-montserrat mb-4'>Market Size</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-white'>$ 772,638,324.66</h2>
          </CardLayout>
          <CardLayout size={'sm'}>
            <span className='text-gray-100 font-[16px] font-montserrat mb-4'>Market Size</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-white'>$ 1,706,446,827.45</h2>
          </CardLayout>
        </div>
    </div>
  )
}

export default HeroSection