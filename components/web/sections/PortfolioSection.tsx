import Image from "next/image";
export default function PortfolioSection(){
    return(
        <section className="w-full py-18 z-20 bg-gray-100">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center mb-20">
                    <h1 className="text-8xl font-extrabold text-gray-200 tracking-tighter ">Portfolio</h1>
                    <p className="-mt-4 text-[20px] text-gray-500">If you do it right, it will last forever.</p>
                    </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/*1st card*/}
                    <div className="bg-white w-90 overflow-hidden transition-transform duration-400 hover:scale-107 hover:rotate-3">
                        <div>
                            <Image 
                            src="/images/portfolio1.jpg"
                            alt=""
                            width={540}
                            height={360}/>
                        </div>
                        <div className="space-y-3 px-3 py-4">
                            <h1 className="font-extrabold ">Project Here</h1>
                            <p className="text-gray-500 tracking-wider ">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                        </div>
                    </div>
                    {/*2nd card*/}
                    <div  className="bg-white w-90 overflow-hidden transition-transform duration-400 hover:scale-107 hover:rotate-3">
                        <div>
                                <Image 
                                src="/images/portfolio2.jpg"
                                alt=""
                                width={577}
                                height={340}/>
                            </div>
                            <div className="space-y-3 px-3 py-4">
                                <h1 className="font-extrabold ">Project Here</h1>
                                <p className="text-gray-500 tracking-wider">My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                            </div>
                        </div>
                    {/*3rd card*/}
                    <div  className="bg-white w-90 overflow-hidden transition-transform duration-400 hover:scale-107 hover:rotate-3">
                        <div>
                                <Image 
                                src="/images/portfolio3.jpg"
                                alt=""
                                width={510}
                                height={340}/>
                            </div>
                            <div className="space-y-3 px-3 py-4">
                                <h1 className="font-extrabold ">Project Here</h1>
                                <p className="text-gray-500 tracking-wider">My creative ability is very difficult to measure because it can manifest in so many surprising andh</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}