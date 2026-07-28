import { footer } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="bg-navy-deep bg-[#081A42] py-6 text-white">
      <div className="home-container flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-white/75">{footer.tagline}</p>
        <div className="flex flex-col items-center gap-1 text-center sm:items-end sm:text-right">
          <p className="text-xs text-white/45 sm:text-sm">{footer.copyright}</p>
          <p className="text-xs italic text-white/30">{footer.subline}</p>
        </div>
      </div>
    </footer>
  );
};
