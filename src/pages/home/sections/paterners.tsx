import { CardLayout } from '../../../ui'
import { images } from '../../../assets/images'

const Paterners = () => {
  return (
    <div className='px-12 flex flex-col py-16'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col lg:w-[536px]'>
                <h1 className='text-white font-montserrat mb-5 font-semibold text-[40px]/[48px]'>Security Contributors</h1>
                <span className='text-[#A9A9A9] text-[16px] mb-4 font-montserrat'>The security of the Nebula Protocol is the highest priority. Under audit by certik.</span>
                <div className='flex text-gray-500 space-x-4 underline'>Visit GitHub <img src={images.arrowRight2} width={20} alt='arrow-right' className='ml-1 opacity-40 underline' /></div>
            </div>
            <div className='flex items-center space-x-16 mr-14'>
                <img src={images.partner1} alt="partner-1" />
                <img src={images.partner2} alt="partner-2" />
            </div>
        </div>
        <br /> <br />
        <div className="flex mx-auto gap-x-6 items-center  w-full">
          <CardLayout size={'full'}  variant={'active'} >
            <span className='text-black font-[16px] font-montserrat mb-4'>TVL</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-black-100'>$ 772,638,324.66</h2>
          </CardLayout>
          <CardLayout size={'full'}  className='flex-1' variant={'active'}>
            <span className=' font-[16px] font-montserrat mb-4'>Users</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-black-100'>72,638,324.66</h2>
          </CardLayout>
          <CardLayout size={'full'}   variant={'active'} className='flex-1'>
            <span className=' font-[16px] font-montserrat mb-4'>$NEB Rewards</span>
            <h2 className='font-montserrat font-semibold text-[24px] text-black-100'>$ 7,324.66</h2>
          </CardLayout>
        </div>
    </div>
  )
}

export default Paterners