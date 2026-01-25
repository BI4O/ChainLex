"use client";

import { useState, useRef, useEffect } from "react";

export default function Section2() {
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (wrapperRef.current) {
        const containerWidth = wrapperRef.current.offsetWidth;
        const newScale = Math.min(1, containerWidth / 1920);
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <section className="relative w-full flex justify-center bg-[#f4f7fb]">
      {/* 16:9 Container */}
      <div
        ref={wrapperRef}
        className="relative aspect-video w-full max-w-[1920px] overflow-hidden"
      >
        {/* Content - 严格居中 + 缩放 */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: '1920px',
              height: '1080px',
              transform: `translate(-50%, -50%) ${scale < 1 ? `scale(${scale})` : ''}`,
              transformOrigin: 'center center',
            }}
          >
            {/* Left Content Block */}
            <div className="absolute left-[360px] top-[340px] w-[496px] flex flex-col gap-[16px]">
              <h1 className="font-['Libre_Bodoni'] font-semibold text-[48px] leading-[normal] text-black">
                <p>The Invisible</p>
                <p>Barriers to</p>
                <p>$16Trillion Liquidity.</p>
              </h1>
              <p className="font-['Inter'] font-normal text-[18px] text-black/50">
                Real-world value is trapped in legal silos.
              </p>
            </div>

            {/* Right Stacked Cards Block */}
            {/* Layer 1 - 01 */}
            <div className="absolute left-[869px] top-[176px]">
              <div className="absolute backdrop-blur-[47.5px] bg-[rgba(221,230,245,0.8)] h-[350px] left-0 top-[28px] w-[730px]" />
              <div className="absolute left-0 top-0" style={{ zIndex: 1 }}>
                <svg width="70" height="28" viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.66815 4.91018L0 28H70L60.3318 4.91018C59.0864 1.93587 56.1771 0 52.9526 0H17.0474C13.8229 0 10.9136 1.93587 9.66815 4.91018Z" fill="#E1E9F6"/>
                </svg>
              </div>
              <p className="absolute font-['Funnel_Sans'] font-medium left-[27px] lowercase not-italic text-[16px] text-black top-[4px]" style={{ zIndex: 1 }}>
                01
              </p>
            </div>

            {/* Layer 2 - 02 */}
            <div className="absolute left-[869px] top-[296px]">
              <div className="absolute backdrop-blur-[47.5px] bg-[rgba(235,241,250,0.8)] h-[350px] left-0 top-[28px] w-[730px]" />
              <div className="absolute left-[70px] top-0" style={{ zIndex: 2 }}>
                <svg width="70" height="28" viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.66815 4.91018L0 28H70L60.3318 4.91018C59.0864 1.93587 56.1771 0 52.9526 0H17.0474C13.8229 0 10.9136 1.93587 9.66815 4.91018Z" fill="#E9EFF9"/>
                </svg>
              </div>
              <p className="absolute font-['Funnel_Sans'] font-medium left-[95px] lowercase not-italic text-[16px] text-black top-[4px]" style={{ zIndex: 2 }}>
                02
              </p>
            </div>

            {/* Layer 3 - 03 */}
            <div className="absolute left-[869px] top-[416px]">
              <div className="absolute backdrop-blur-[47.5px] bg-[rgba(241,246,253,0.8)] h-[350px] left-0 top-[28px] w-[730px]" />
              <div className="absolute left-[140px] top-0" style={{ zIndex: 3 }}>
                <svg width="70" height="28" viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.8" d="M9.66815 4.91018L0 28H70L60.3318 4.91018C59.0864 1.93587 56.1771 0 52.9526 0H17.0474C13.8229 0 10.9136 1.93587 9.66815 4.91018Z" fill="#F6FAFF"/>
                </svg>
              </div>
              <p className="absolute font-['Funnel_Sans'] font-medium left-[165px] lowercase not-italic text-[16px] text-black top-[4px]" style={{ zIndex: 3 }}>
                03
              </p>
            </div>

            {/* Layer 4 - 04 (Top layer with content) */}
            <div className="absolute left-[869px] top-[536px]">
              <div className="absolute bg-white h-[340px] left-0 shadow-[2px_4px_12px_0px_rgba(8,35,62,0.04)] top-[28px] w-[730px]" />
              <div className="absolute left-[210px] top-0" style={{ zIndex: 4 }}>
                <svg width="70" height="28" viewBox="0 0 70 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.66815 4.91018L0 28H70L60.3318 4.91018C59.0864 1.93587 56.1771 0 52.9526 0H17.0474C13.8229 0 10.9136 1.93587 9.66815 4.91018Z" fill="#F9FAFD"/>
                </svg>
              </div>
              <p className="absolute font-['Funnel_Sans'] font-medium left-[236px] lowercase not-italic text-[16px] text-black top-[4px]" style={{ zIndex: 4 }}>
                04
              </p>

              {/* Content */}
              <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[126px] top-[104px] w-[480px]">
                {/* Icon */}
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
                  <div className="col-1 ml-0 mt-0 rounded-[16px] row-1 size-[54px]" />
                  <div className="col-1 h-[32px] ml-[9.32px] mt-[9px] relative row-1 w-[34.857px]">
                    <div className="absolute inset-[-3.12%_-2.87%]">
                      <img src="/icon-question.svg" alt="" className="block max-w-none size-full" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="content-stretch flex flex-col gap-[20px] items-start leading-[normal] not-italic relative shrink-0 w-full">
                  <p className="font-['Funnel_Sans'] font-bold relative shrink-0 text-[32px] text-black w-full">
                    The Enforcement Vacuum.
                  </p>
                  <p className="font-['Inter'] font-normal relative shrink-0 text-[18px] text-black/50 w-full">
                    Smart contracts are immutable code, but they lack legal enforceability. We fuse code with courts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
