import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialFooter = () => {
  return (
    <>
      <div className="flex justify-center gap-1.5 mb-2">
        <a
          href="https://www.linkedin.com/company/kyliecosmetics"
          aria-label="LinkedIn"
          className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#eed7e4] !border-2 !border-[#e8a4ab]"
        >
          <Linkedin className="w-3 h-3 !text-[#966c76]" />
        </a>

        <a
          href="https://www.facebook.com/KylieCosmetics"
          aria-label="Facebook"
          className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#eed7e4] !border-2 !border-[#e8a4ab]"
        >
          <Facebook className="w-3 h-3 !text-[#966c76]" />
        </a>

        <a
          href="https://www.instagram.com/kyliecosmetics/"
          aria-label="Instagram"
          className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#eed7e4] !border-2 !border-[#e8a4ab]"
        >
          <Instagram className="!w-3 !h-3 !text-[#966c76]" />
        </a>
      </div>

      <footer className="text-[#966c76] text-[9px]">
        <p className="!text-center !m-0 !p-0">© 2026</p>
        <p className="!text-center">All rights reserved</p>
        <p className="!text-center !mt-12 !px-4 text-[#966c76] text-[7px] leading-tight">
          This independent reward program is not sponsored, endorsed, or
          administered by Kylie Cosmetics Pty Ltd. All brand names and
          logos are trademarks of their respective owners.
        </p>
      </footer>
    </>
  );
};

export default SocialFooter;