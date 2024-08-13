import { CardLayout } from '../../../ui'
import { images } from '../../../assets/images'

const Paterners = () => {
  return (
    <div className='px-6 lg:px-12 flex flex-col py-8 lg:py-4'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex flex-col lg:items-start items-center lg:justify-start justify-center lg:w-[536px]'>
                <h1 className='text-white text-center lg:text-left font-montserrat mb-5 font-semibold text-[24px] lg:text-[40px]/[48px]'>Security Contributors</h1>
                <span className='text-[#A9A9A9] text-[16px] lg:text-left text-center mb-4 font-montserrat'>The security of the Nebula Protocol is the highest priority. Under audit by certik.</span>
                <div className='flex text-gray-500 text-center lg:text-left items-center lg:items-start justify-center lg:justify-start space-x-4 underline'>Visit GitHub <img src={images.arrowRight2} width={20} alt='arrow-right' className='ml-1 opacity-40 underline' /></div>
            </div>
            <div className='flex items-center mt-6 space-x-8 lg:space-x-16 lg:mr-14'>
                <img src={images.partner1} alt="partner-1" className='w-[120px] lg:w-[200px]' />
                <img src={images.partner2} alt="partner-2"  className='w-[120px] lg:w-[200px]' />
            </div>
        </div>
        <br /> <br className='lg:block hidden' />
        <div className="flex flex-col lg:flex-row mx-auto gap-y-6 lg:gap-x-6 items-center w-full">
          <CardLayout size={'full'}  variant={'active'} className='lg:py-1 py-8' >
            <span className='text-black font-[16px] font-montserrat mb-4'>TVL</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-black-100'>$ 772,638,324.66</h2>
          </CardLayout>
          <CardLayout size={'full'}  className='flex-1 lg:py-1 py-8'  variant={'active'} >
            <span className=' font-[16px] font-montserrat mb-4'>Users</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-black-100'>72,638,324.66</h2>
          </CardLayout>
          <CardLayout size={'full'}   variant={'active'} className='flex-1 lg:py-1 py-8'>
            <span className=' font-[16px] font-montserrat mb-4'>$NEB Rewards</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-black-100'>$ 7,324.66</h2>
          </CardLayout>
        </div>
    </div>
  )
}

export default Paterners