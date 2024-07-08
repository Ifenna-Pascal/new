import { useState } from 'react'

type IQuestion = {
  question: string;
  answer: string;
  index: string;
}

const Question = ({question, answer, index}:IQuestion) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
  return (
   <div className={`flex w-[807px] border-2 mb-4 duration-300 border-[#6666665C] rounded-[8px] flex-col`}>
     <div className={`py-[3px] ${open && 'border-b border-[#6666665C]'}  flex `}>
        <div className={`flex items-center px-5 w-[90%] ${open ? 'rounded-bl-[8px]' : 'rounded-l-[8px]'} bg-black-100 h-[76px]`}>
            <span className={`text-gray-100 mr-4 text-[24px] font-montserrat`}>{index}</span>
            <span className={`font-montserrat text-[24px]/[29px]  ${open ? 'text-white' : 'text-gray-100' }`}>{question}</span>
        </div>
        <div className={`flex cursor-pointer items-center justify-center w-[10%] ${open ? 'bg-primary-gradient rounded-r-[8px] -ml-[3px]' : 'bg-transparent'}`} onClick={toggle}>
          <span className={`text-center text-[34px] text-white font-montserrat font-[500]`}>{open ? '-' : '+'}</span>
        </div>
       
    </div>
    <div className={`${open && 'py-[17px]'} px-[6%]`}>
      <span className={`text-white text-[16px]/[36px] font-montserrat`}>
      {open && answer}
      </span>
    </div>
   </div>
  )
}

export default Question