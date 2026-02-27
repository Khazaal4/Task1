import {Youtube,Facebook,Twitter,Copyright} from "lucide-react";
export default function ReferenceSection(){
    return(
        <section>
            <div className="w-full bg-gray-100 pb-25">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-6">
                    <div className="flex flex-col items-center justify-center ">
                        <div className="pt-6">
                            <h1 className=" text-gray-400 tracking-wider text-[20px]">We are born to create</h1><br/><br/><br/>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div>
                                <h1 className="text-[25px] font-extrabold text-cyan-950 tracking-tighter">Feel free to drop us a line at:</h1>
                            </div>
                            <div>
                                <a
                                href="mailto:Leonagency@gmail.com"
                                className="hover:underline text-[30px] text-teal-400 font-extrabold">
                                    Leonagency@gmail.com
                                </a>
                            </div>
                            <div className="flex gap-2">
                                <h1 className=" text-black">Find Us On Social Networks</h1>
                                <Youtube className="w-5 h-5  text-black"/>
                                <Facebook className="w-5 h-5  text-black"/>
                                <Twitter className="w-5 h-5  text-black"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-cyan-950 ">
                    <div className="flex items-center justify-center py-6">
                    <Copyright className="text-white w-4 h-4 mr-2"/>
                    <h1 className="text-white tracking-wide">2021 <span className="text-teal-400 font-bold ">Leon</span> All Right Reserved</h1>
                </div>
            </div>
        </section>
        
    );
}