import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/site";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
      <div className="home-container flex h-[72px] items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}BLN-Logo-blue.png`}
            alt="BLN Energy"
            className="h-9 w-auto sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-navy/80 transition-colors hover:text-red-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden sm:inline-flex !px-6 !py-3">
            Contact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white sm:hidden"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center p-2 text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white lg:hidden">
          <div className="home-container flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 text-sm font-semibold tracking-wide text-navy/80 transition-colors hover:bg-navy/5 hover:text-red-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
