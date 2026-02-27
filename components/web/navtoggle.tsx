type NavToggleProps = {
  open: boolean;
  onToggle: () => void;
};

export default function NavToggle({ open, onToggle }: NavToggleProps) {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={onToggle}
      className="inline-flex h-10 w-10 items-center justify-center "
    >
      <span className="flex flex-col gap-1.5">
        <span className="h-0.5 w-8 rounded-full bg-black" />
        <span className={[
    "h-0.5 w-8 rounded-full bg-black",
    "origin-right self-end",
    "transition-transform duration-300 ease-in-out",
    open ? "scale-x-100" : "scale-x-50",].join(" ")}/>
        <span className="h-0.5 w-8 rounded-full bg-black" />
      </span>
    </button>
  );
}