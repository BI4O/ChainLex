"use client";

import { useState, useRef, useEffect } from "react";

const imgChainLex = "/logo-text.svg";
const imgGroup2 = "/logo-icon.svg";
const imgGroup26 = "/dropdown-arrow.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // ≥1280px (xl): 等比缩放 (scale = 容器宽/1920)
        // <1280px: 汉堡菜单
        if (containerWidth >= 1280) {
          const newScale = Math.min(1, containerWidth / 1920);
          setScale(newScale);
        } else {
          setScale(1);
        }
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <nav className="absolute left-0 top-0 z-50 w-full h-[80px]">
      {/* Background */}
      <div className="absolute bg-white/[0.01] h-[80px] inset-0" />

      {/* Desktop (≥1280px/xl): Absolute positioning with scale */}
      <div ref={containerRef} className="relative h-full mx-auto max-w-[1920px] overflow-hidden">
        <div
          className="hidden xl:block absolute left-0 top-0 h-[80px] w-[1920px]"
          style={{
            transform: scale < 1 ? `scale(${scale})` : 'none',
            transformOrigin: 'left center',
          }}
        >
          {/* Logo Icon */}
          <div className="absolute h-[43px] left-[28px] top-[18px] w-[42.922px]">
            <img alt="" className="block max-w-none size-full" src={imgGroup2} />
          </div>
          {/* ChainLex Text */}
          <div className="absolute h-[23.991px] left-[82.91px] top-[27.49px] w-[149.09px]">
            <img alt="" className="block max-w-none size-full" src={imgChainLex} />
          </div>

          {/* Menu - Frame 8 */}
          <div className="absolute content-stretch flex gap-[70px] items-center left-[767px] top-[30px]">
            {/* Platform */}
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0 group cursor-pointer">
              <p className="font-['Inter'] font-normal leading-normal not-italic relative shrink-0 text-[16px] text-white/80 group-hover:text-white transition-colors">
                Platform
              </p>
              <div className="relative shrink-0 size-[12px]">
                <img alt="" className="block max-w-none size-full" src={imgGroup26} />
              </div>
            </div>
            {/* Ecosystem */}
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0 group cursor-pointer">
              <p className="font-['Inter'] font-normal leading-normal not-italic relative shrink-0 text-[16px] text-white/80 group-hover:text-white transition-colors">
                Ecosystem
              </p>
              <div className="relative shrink-0 size-[12px]">
                <img alt="" className="block max-w-none size-full" src={imgGroup26} />
              </div>
            </div>
            {/* About */}
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0 group cursor-pointer">
              <p className="font-['Inter'] font-normal leading-normal not-italic relative shrink-0 text-[16px] text-white/80 group-hover:text-white transition-colors">
                About
              </p>
              <div className="relative shrink-0 size-[12px]">
                <img alt="" className="block max-w-none size-full" src={imgGroup26} />
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          {/* Sign Up Button */}
          <div className="absolute bg-white flex h-[40px] items-center justify-center left-[1704px] rounded-[41px] top-[20px] w-[88px] cursor-pointer hover:bg-white/90 transition-colors">
            <p className="font-['Inter'] text-[16px] text-black">
              Sign Up
            </p>
          </div>
          {/* Login Button */}
          <div className="absolute border border-solid border-white/50 flex h-[40px] items-center justify-center left-[1804px] rounded-[41px] top-[20px] w-[88px] cursor-pointer hover:bg-white/10 transition-colors">
            <p className="font-['Inter'] text-[16px] text-white/80">
              Login
            </p>
          </div>
        </div>

        {/* Mobile (<1280px): Hamburger menu */}
        <div className="xl:hidden relative h-full px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[11px]">
            <img alt="ChainLex Icon" src={imgGroup2} className="h-[34px] w-[34px]" />
            <img alt="ChainLex" src={imgChainLex} className="h-[18px] w-[112px]" />
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center justify-center gap-[4px] w-[32px] h-[32px]"
          >
            <span className={`block w-[20px] h-[2px] bg-white/80 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block w-[20px] h-[2px] bg-white/80 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[20px] h-[2px] bg-white/80 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 xl:hidden">
          <div className="flex flex-col items-center gap-6 py-8">
            <p className="font-['Inter'] text-[16px] text-white/80 cursor-pointer hover:text-white transition-colors">
              Platform
            </p>
            <p className="font-['Inter'] text-[16px] text-white/80 cursor-pointer hover:text-white transition-colors">
              Ecosystem
            </p>
            <p className="font-['Inter'] text-[16px] text-white/80 cursor-pointer hover:text-white transition-colors">
              About
            </p>
            <div className="flex gap-4 mt-2">
              <div className="flex h-[40px] w-[100px] items-center justify-center rounded-[41px] bg-white cursor-pointer hover:bg-white/90 transition-colors">
                <p className="font-['Inter'] text-[16px] text-black">
                  Sign Up
                </p>
              </div>
              <div className="flex h-[40px] w-[100px] items-center justify-center rounded-[41px] border border-solid border-white/50 cursor-pointer hover:bg-white/10 transition-colors">
                <p className="font-['Inter'] text-[16px] text-white/80">
                  Login
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
