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
        <div className='flex flex-col py-8 px-4 lg:px-8'>
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
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 2.5,
                  centerPadding: '20px',
                  slidesToScroll: 1,
                  autoPlay: true,
                  infinite: true,
                }
              },
              {
                breakpoint: 1240,
                settings: {
                  slidesToShow: 1,
                  centerPadding: '20px',
                  slidesToScroll: 1,
                  autoPlay: true,
      
                }
              },
            {
                breakpoint: 600,
                settings: {
                  autoPlay: true,
                  slidesToShow: 1,
                  centerPadding: '10px',
                  slidesToScroll: 1,
                  autoplay: true,
                }
              }
        ],
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
    <div className='bg-black-100 pt-6 lg:pt-10 relative pb-24 w-full'>
    
    <div className='hidden lg:flex mt-8 w-full pr-16 gap-x-4 items-center justify-end'>
        <button disabled={currentSlide === 0} onClick={() => clickButton(false)}   className={`${currentSlide === 0 ? 'bg-[#111623]' : 'bg-primary-gradient'} border-none  h-[50px] flex items-center justify-center rounded-[50px]  w-[50px]`}>
            <img alt='arrow-left' src={images.arrowLeft} />
        </button>
        <button disabled={currentSlide === blogData.length - 1} onClick={() => clickButton(true)} className={`${currentSlide === blogData.length - 1 ? 'bg-[#111623]': 'bg-primary-gradient'} border-none  h-[50px] flex items-center justify-center rounded-[50px] w-[50px]`}>
            <img alt='arrow-left' src={images.arrowRight} />
        </button>
    </div>
    
    <div className='mt-8 px-3 lg:px-6 w-full '>
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