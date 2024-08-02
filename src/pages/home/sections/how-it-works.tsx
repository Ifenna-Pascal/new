const HowItWorks = () => {
    return (
        <div className="flex flex-col px-8">
            <h1 className="text-white text-center font-montserrat text-[40px]/[60px] mb-10">How It Works</h1>
            <div className="flex items-center ">
                <div 
                 data-aos="fade-up"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                className="flex flex-col flex-1">
                    <div 
                    className="flex items-center">
                        <div className="w-[50px] h-[50px] rounded-[50px] bg-[#111623] flex items-center justify-center">
                            <span className="font-montserrat font-semibold text-white text-[16px]">1</span>
                        </div>
                        <div className="w-full h-[3px] bg-primary-gradient"></div>
                    </div>
                    <div className="flex flex-col pt-5 pl-2 h-[300px]">
                        <h1 className="text-white font-montserrat font-semibold textt-[24px]/[36px] mb-3">Supply and Earn</h1>
                        <p className="text-[#A9A9A9] text-[16px]/[24px] w-[367px]">Supply your assets to the Nebula Protocol to provide liquidity. As a supplier, you earn passive income from the interest paid by borrowers.</p>
                    </div>
                </div>
                <div 
                 data-aos="fade-up"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                className="flex flex-col flex-1">
                    <div className="flex items-center">
                        <div className="w-[50px] h-[50px] rounded-[50px] bg-[#111623] flex items-center justify-center">
                            <span className="font-montserrat font-semibold text-white text-[16px]">2</span>
                        </div>
                        <div className="w-full h-[3px] bg-primary-gradient"></div>
                    </div>
                    <div className="flex flex-col pl-2 pt-5  h-[300px]">
                        <h1 className="text-white font-montserrat font-semibold textt-[24px]/[36px] mb-3">Borrow</h1>
                        <p className="text-[#A9A9A9] text-[16px]/[24px] w-[367px]">To borrow, first supply an asset as collateral. Then, go to the Borrow section, select the asset you want to borrow, set the amount based on your collateral, choose between a stable or variable interest rate, and confirm the transaction. This way, you get liquidity without selling your assets.
                        </p>
                    </div>
                </div>
                <div
                 data-aos="fade-up"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                className="flex flex-col flex-1">
                    <div className="flex items-center">
                        <div className="w-[50px] h-[50px] rounded-[50px] bg-[#111623] flex items-center justify-center">
                            <span className="font-montserrat text-white font-semibold text-[16px]">3</span>
                        </div>
                        <div className="w-full h-[3px] bg-primary-gradient"></div>
                    </div>
                    <div className="flex flex-col pl-2 pt-5 h-[300px]">
                        <h1 className="text-white font-montserrat font-semibold textt-[24px]/[36px] mb-3">Manage your loan</h1>
                        <p className="text-[#A9A9A9] text-[16px]/[24px] w-[367px]">Use your dashboard to switch between stable and variable interest rates at any time. Stable rates offer predictable interest payments, while variable rates adjust with market conditions, potentially reducing your costs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;