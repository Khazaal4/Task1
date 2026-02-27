import Image from "next/image";
import {Palette,Square,PenOff,Table2} from "lucide-react";
export function ServicesSection(){
    return(
        <section id="Services" className="w-full py-18 z-20 bg-white">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="space-y-20">
                    <div className="flex flex-col items-center justify-center ">
                    <h1 className="text-8xl font-extrabold text-gray-200 tracking-tighter ">Services</h1>
                    <p className="-mt-4 text-[20px] text-gray-500">Don't be busy, be productive</p>
                    </div>
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr] items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-15">
                                <div className="flex items-start gap-4 shrink-0 mt-1">
                                <Palette className="text-teal-400 h-20 w-20 -mt-7"/>
                                <div className="space-y-4 flex flex-col text-left">
                                <h1 className="text-1xl font-extrabold tracking-tight  text-black">Graphic Design</h1>
                                <p className="text-left text-gray-500 tracking-wider text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi natus velit explicabo praesentium!</p>
                                </div>
                            </div>
                                <div className="flex items-start gap-4 shrink-0 mt-1">
                                <Square className="text-teal-400 h-20 w-20 -mt-7"/>
                                <div className="space-y-4 flex flex-col text-left">
                                <h1 className="text-1xl font-extrabold tracking-tight  text-black">Web developer</h1>
                                <p className="text-left text-gray-500 tracking-wider text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi natus velit explicabo praesentium!</p>
                                </div>
                            </div>
                            </div>
                            <div className="space-y-15">
                                <div className="flex items-start gap-4 shrink-0 mt-1">
                                <Table2 className="text-teal-400 h-20 w-20 -mt-7"/>
                                <div className="space-y-4 flex flex-col text-left">
                                <h1 className="text-1xl font-extrabold tracking-tight  text-black">UI & UX</h1>
                                <p className="text-left text-gray-500 tracking-wider text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi natus velit explicabo praesentium!</p>
                            </div>
                        </div>
                                <div className="flex items-start gap-4 shrink-0 mt-1">
                                <PenOff className="text-teal-400 h-20 w-20 -mt-7"/>
                                <div className="space-y-4 flex flex-col text-left">
                                <h1 className="text-1xl font-extrabold tracking-tight  text-black">Web Designer</h1>
                                <p className="text-left text-gray-500 tracking-wider text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi natus velit explicabo praesentium!</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute -top-6 -right-9 w-20 h-99 bg-slate-700 z-0"/>
                            <div>
                                <Image
                                src="/images/image.jpg"
                                alt=""
                                width={226}
                                height={340}
                                className="relative justify-self-end"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}