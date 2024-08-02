import { useRef, useState } from 'react'
import { Button } from '../../../ui';
import { images } from '../../../assets/images';
import Slider from 'react-slick';
import { blogData } from '../../../__mock_data__/dex-info';

interface IBlog {
    title: string;
    desc: string;
    link: string;
    img: string
}

const Blog = ({title, desc, link, img}: IBlog) => {
    return (
        <div className='w-full border min-h-[540px] rounded-[10px] border-[#302E2E]'>
        <div className='h-[211px] bg-[#fdf7f7] flex items-center rounded-t-[10px] justify-center w-full'>
            <img src={img} width={90} alt="cover-pic" />
        </div>
        <div className='flex flex-col py-8 px-8'>
            <h1 className='font-montserrat text-white text-[18px]/[24px] font-semibold mb-6'>{title}</h1>
            <span className='text-[15px]/[24px] text-[#A9A9A9] font-montserrat mb-8'>{desc}</span>
            <Button href={link}>Learn more</Button>
        </div>
    </div>

    )
}

const BlogSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
        beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
      };
      
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sliderRef = useRef<any>(null);
    const clickButton = (isNext: boolean) => {
        if(sliderRef.current === null) return;   
        if(isNext) {
            sliderRef.current.slickNext()
        }else {
            sliderRef.current.slickPrev()   
        }
    }

    

  return (
    <div className='bg-black-100   pt-24 relative pb-24 w-full'>
    <div className='flex-col  flex mx-auto items-center justify-center'>
        <h1 className='text-white w-[960px] font-semibold text-center font-montserrat text-[40px]/[50px]'>
            DEX LP Tokens as Collateral 
        </h1>
        <p className='text-[18px] w-[936px] pt-5 font-montserrat text-center text-gray-100'>
            Power up your portfolio by Borrowing, Lending and Multiplying your favorite assets. Made Safe and Easy by industry leading automation tools.
        </p>
    </div> 
    <div className='flex mt-8 w-full pr-16 gap-x-4 items-center justify-end'>
        <button disabled={currentSlide === 0} onClick={() => clickButton(false)}   className={`${currentSlide === 0 ? 'bg-[#111623]' : 'bg-primary-gradient'} border-none  h-[50px] flex items-center justify-center rounded-[50px]  w-[50px]`}>
            <img alt='arrow-left' src={images.arrowLeft} />
        </button>
        <button disabled={currentSlide === blogData.length - 1} onClick={() => clickButton(true)} className={`${currentSlide === blogData.length - 1 ? 'bg-[#111623]': 'bg-primary-gradient'} border-none  h-[50px] flex items-center justify-center rounded-[50px] w-[50px]`}>
            <img alt='arrow-left' src={images.arrowRight} />
        </button>
    </div>
    
    <div className='mt-8 px-6 w-full '>
       <Slider ref={sliderRef} {...settings}>
       {
            blogData.map((info, index) => {
                return (
                    <Blog key={index} title={info.title} desc={info.desc} link='#' img={images.logoMark} />
                )
            })
        }
       </Slider>
    </div>
       </div> 
  )
}

export default BlogSection 