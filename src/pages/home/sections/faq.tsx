import { faqs } from '../../../__mock_data__/faq'
import Question from './question'


const FAQ = () => {
  return (
    <div className='py-24'>
          <div className='flex-col z-50 flex mx-auto items-center justify-center'>
            <h1 className='text-white w-[960px] text-center font-semibold font-montserrat text-[40px]/[50px]'>
                Frequently Asked Questions
            </h1>
            <p className='text-[18px] w-[568px] pt-5 font-montserrat text-center text-gray-100'>
                Below are some some common questions, please join our Discord for more information.
            </p>
        </div>  
        <div className='py-8 w-[808px] mx-auto'>
            {
              faqs.map((question, index) => {
                const id = index <= 9 ? `0${index}` : `${index}`
                return (
                  <Question key={index} question={question.question} answer={question.answer} index={id} />
                )
              })
            }
        </div>
    </div>
  )
}

export default FAQ