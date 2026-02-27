import Image from "next/image";
export default function HeroSection(){
    return(
        <section className="relative min-h-screen  mx-3 w-auto">
      <div className="fixed inset-0 -z-10 bg-cover bg-top mx-2"
      style={{backgroundImage: "url('/images/last-mount.jpg')"}}
      />
    
      <div className="relative z-10 flex flex-col min-h-screen items-center justify-center text-center px-4 ">
        <h1 className="text-6xl md:text-5xl text-teal-400 font-extrabold py-5">Hello there</h1>
        <p className="bg-white px-2 py-1 text-[20px] font-stretch-150%">We are Leon - Super Creative &<br/> Minimal Agency Web Template</p>
      </div>
        </section>
    );
}