import {Gem,Wand,Earth} from "lucide-react";
export default function IdeasSection(){
    return(
        <section className="w-full py-16 z-20 bg-white">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <Wand className="text-teal-400 h-17 w-17"/>
                        <h1 className="text-2xl font-extrabold">Tell Us your idea</h1>
                        <p className="leading-7 tracking-wider">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, rem repudiandae ducimus dolorum dicta alias magni commodi temporibus tenetur nihil reprehenderit cum harum eius at beatae ex? Maiores, ipsam nostrum?</p>
                    </div>
                <div className="flex flex-col items-center text-center space-y-4">
                    <Gem className="text-teal-400 h-17 w-17"/>
                    <h1 className="text-2xl font-extrabold">We Will do All The Work</h1>
                    <p className="leading-7 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea distinctio voluptatibus iure numquam quia officiis, culpa nemo omnis laborum aspernatur? Sapiente distinctio molestias facilis magni accusamus culpa quod cum.</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                    <Earth className="text-teal-400 h-17 w-17"/>
                    <h1 className="text-2xl font-extrabold">Your Product is Wordwide</h1>
                    <p className="leading-7 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, earum. Quidem officia natus harum a quas autem veritatis eos temporibus explicabo cumque deleniti quibusdam aut qui quisquam minima, voluptatem eum.</p>
                </div>
                </div>
            </div>
        </section>
    );
}