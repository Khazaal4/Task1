"use client";
import NavMenu from "./navmenu";
import NavToggle from "./navtoggle";
import Image from "next/image";
import { useState } from "react";
export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <nav className="relative z-50 w-full flex items-center justify-between py-2 bg-white">
            <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
                <div>
                <Image
                src="/images/logo.png"
                alt=""
                width={300}
                height={120}
                className="h-6 w-auto"
                />
            </div>
            <div className="relative">
                <div className="flex items-center gap-3">
            <NavToggle open={open} onToggle={() => setOpen(!open)} />
            <NavMenu open={open} onClose={() => setOpen(false)} />
                </div>
                </div>
            </div>
        </nav>
    );
}