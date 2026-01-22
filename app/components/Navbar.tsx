const imgChainLex = "/logo-text.svg";
const imgGroup2 = "/logo-icon.svg";
const imgGroup26 = "/dropdown-arrow.svg";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full h-[80px]">
      {/* Background */}
      <div className="absolute bg-white/[0.01] h-[80px] inset-0" />

      {/* Content Container - 1920px centered */}
      <div className="relative h-full mx-auto max-w-[1920px]">
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
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <p className="font-['Inter'] font-normal leading-normal not-italic relative shrink-0 text-[16px] text-white/80">
              Platfotm
            </p>
            <div className="relative shrink-0 size-[12px]">
              <img alt="" className="block max-w-none size-full" src={imgGroup26} />
            </div>
          </div>
          {/* Ecosystem */}
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <p className="font-['Inter'] font-normal leading-normal not-italic relative shrink-0 text-[16px] text-white/80">
              Ecosystem
            </p>
            <div className="relative shrink-0 size-[12px]">
              <img alt="" className="block max-w-none size-full" src={imgGroup26} />
            </div>
          </div>
          {/* About */}
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <p className="font-['Inter'] font-normal leading-normal not-italic relative shrink-0 text-[16px] text-white/80">
              About
            </p>
            <div className="relative shrink-0 size-[12px]">
              <img alt="" className="block max-w-none size-full" src={imgGroup26} />
            </div>
          </div>
        </div>

        {/* Auth Buttons - top */}
        {/* Sign Up Button */}
        <div className="absolute left-[1704px] top-[20px] flex h-[40px] w-[88px] items-center justify-center rounded-[41px] bg-white">
          <p className="font-['Inter'] text-[16px] text-black">
            Sign Up
          </p>
        </div>
        {/* Login Button */}
        <div className="absolute left-[1804px] top-[20px] flex h-[40px] w-[88px] items-center justify-center rounded-[41px] border border-solid border-white/50">
          <p className="font-['Inter'] text-[16px] text-white/80">
            Login
          </p>
        </div>
      </div>
    </nav>
  );
}
