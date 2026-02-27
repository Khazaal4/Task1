import Image from "next/image";
export default function AboutSection(){
    return(
        <section id="About" className="w-full py-18 z-20 bg-white">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center mb-20">
                    <h1 className="text-8xl font-extrabold text-gray-200 tracking-tighter ">About</h1>
                    <p className="-mt-4 text-[20px] text-gray-500">less is more Work</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {/*photo and what is behind */}
                    <div className="relative w-60 h-90 ">
                        <div>
                            <div className="absolute -top-7 -left-4 w-20 h-[115%] bg-gray-200"/>
                            <div className="absolute top-60 -right-30 w-[120%] h-20 bg-teal-400"/>
                            <div className="absolute -right-12 -top-10 w-20 h-full bg-teal-400"/>
                        </div>
                        <Image
                        src="/images/about.jpg"
                        alt=""
                        fill
                        className="object-fill"/>
                    </div>
                    {/*the 2 p */}
                    <div className="space-y-10">
                        <p className="font-bold leading-8 tracking-wider  text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod pariatur voluptatum id ea iure, ducimus dolor culpa saepe sed similique delectus reiciendis sint sunt ullam esse voluptate. Doloribus, labore?</p>
                        <div className="h-px w-80 bg-teal-400"/>
                        <p className="leading-8 text-gray-500 tracking-wider">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolores illo quia perferendis eaque nisi iure, laboriosam repellat voluptate eligendi asperiores fugit. Numquam vero nisi repudiandae fugit, hic eos? Voluptas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}