import Link from "next/link";

type NavMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavMenu({ open, onClose }: NavMenuProps) {
  return (
    <div
      className={[
        "absolute right-0 top-full mt-2 w-50",
        " bg-gray-100 overflow-visible",
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none",
      ].join(" ")}>
       <div className="absolute -top-2 right-4 h-4 w-4 rotate-45 bg-gray-100"/>
      <nav className="py-2 divide-y divide-gray-200">
        <a
          href="#Services"
          onClick={onClose}
          className="block px-4 py-2 text-base transition-transform duration-400 hover:translate-x-3 hover:text-gray-700 text-black">
          Services
        </a>

        <a
          href="#Portfolio"
          onClick={onClose}
          className="block px-4 py-2 text-base transition-transform duration-400 hover:translate-x-3 hover:text-gray-700 text-black">
          Portfolio
        </a>

        <a
          href="#About"
          onClick={onClose}
          className="block px-4 py-2 text-base transition-transform duration-400 hover:translate-x-3 hover:text-gray-700 text-black">
          About
        </a>
        <a
        href="#Contact"
        
        onClick={onClose}
        className="block px-4 py-2 text-base transition-transform duration-400 hover:translate-x-3 hover:text-gray-700 text-black">
          Contact
        </a>
      </nav>
    </div>
  );
}