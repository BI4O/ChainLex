const img394Be3Cbf28563E7D1A869A89Bd2862A3 = "/hero-bg.png";
const imgDown = "/scroll-down.svg";
const imgGroup1420068994 = "/btn-arrow.svg";
const imgVector9811 = "/divider-line.svg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Layer - z-0 */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src={img394Be3Cbf28563E7D1A869A89Bd2862A3}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Scroll Down Indicator - positioned relative to 1920px center */}
        <div className="absolute left-1/2 ml-[579px] size-[30px] top-[1013px]">
          <img alt="" className="block max-w-none size-full" src={imgDown} />
        </div>
      </div>

      {/* Hero Content - z-10 */}
      <div className="relative z-10 h-full mx-auto max-w-[1920px]">
        {/* Title */}
        <div className="absolute content-stretch flex flex-col font-normal gap-4 items-center justify-center leading-normal left-[437px] text-center top-[420px]">
          <h1 className="font-['Libre_Bodoni'] relative shrink-0 text-[110px] text-white">
            Compliance,Codified
          </h1>
          <p className="font-['Inter'] not-italic relative shrink-0 text-[18px] text-white/80">
            The AI-Driven Compliance Infrastructure for Tokenized Assets.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="absolute left-[759px] top-[721px]">
          {/* Open Platform Button */}
          <div className="absolute content-stretch flex gap-[2px] items-center left-0 top-0">
            <p className="font-['Inter'] font-bold leading-normal not-italic relative shrink-0 text-[20px] text-white">
              Open Platform
            </p>
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="block max-w-none size-full" src={imgGroup1420068994} />
            </div>
          </div>

          {/* Request a demo Button */}
          <div className="absolute content-stretch flex gap-[2px] items-center left-[234px] top-0">
            <p className="font-['Inter'] font-bold leading-normal not-italic relative shrink-0 text-[18px] text-white">
              Request a demo
            </p>
            <div className="relative shrink-0 size-[24px]">
              <img alt="" className="block max-w-none size-full" src={imgGroup1420068994} />
            </div>
          </div>

          {/* Divider Line */}
          <div className="absolute h-0 left-0 top-[40px] w-[160px]">
            <img alt="" className="block max-w-none size-full" src={imgVector9811} />
          </div>
        </div>
      </div>
    </section>
  );
}
