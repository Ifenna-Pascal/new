import { FC } from "react";

interface IProp {
    numbering: string;
    header: string;
    content: string;
}

const WorksCard:FC<IProp> = ({numbering, header, content}) => {
    return (
        <div 
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
       className="flex flex-col flex-1">
           <div 
           className="flex w-full relative items-center">
               <div className="w-[40px] lg:w-[50px]  lg:relative absolute  lg:left-0 left-[43%] h-[40px] lg:h-[50px] rounded-[50px] bg-[#111623] flex items-center justify-center">
                   <span className="font-montserrat font-semibold text-white text-[13px] lg:text-[16px]">{numbering}</span>
               </div>
               <div className="w-full h-[3px] bg-primary-gradient"></div>
           </div>
           <div className="flex flex-col mt-3 items-center lg:items-start pt-5 pl-2 py-12 lg:py-0 lg:h-[300px]">
               <h1 className="text-white font-montserrat font-semibold textt-[24px]/[36px] mb-3">{header}</h1>
               <p className="text-[#A9A9A9] text-center lg:text-left px-4 lg:px-0 text-[16px]/[24px] w-[367px]">{content}</p>
           </div>
       </div>
    
    )
}

const HowItWorks = () => {
    return (
        <div className="flex  w-full bg-center flex-col px-8">
            <h1 className="text-white text-center font-montserrat text-[40px]/[60px] mb-10">How It Works</h1>
            <div className="flex flex-col lg:flex-row items-center ">
                <WorksCard 
                    numbering="1"
                    header="Supply & Earn"
                    content="Supply your assets to the Nebula Protocol to provide liquidity. As a supplier, you earn passive income from the interest paid by borrowers."
                 />
                 <WorksCard 
                    numbering="2"
                    header="Borrow"
                    content='To borrow, first supply an asset as collateral. Then, go to the Borrow section, select the asset you want to borrow, set the amount based on your collateral, choose between a stable or variable interest rate, and confirm the transaction. This way, you get liquidity without selling your assets.'
                 />
                 <WorksCard 
                    numbering="3"
                    header="Manage your load"
                    content= 'Use your dashboard to switch between stable and variable interest rates at any time. Stable rates offer predictable interest payments, while variable rates adjust with market conditions, potentially reducing your costs.'
                 />
            </div>
        </div>
    )
}

export default HowItWorks