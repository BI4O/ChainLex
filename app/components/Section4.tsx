"use client";

import { useState, useRef, useEffect } from "react";

export default function Section4() {
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
      <div ref={wrapperRef} className="relative aspect-video w-full max-w-[1920px] overflow-hidden">
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
            {/* Left Content Area - Text */}
            <div className="absolute left-[320px] top-[100px] w-[585px] h-[92px]">
              {/* Title and Subtitle */}
              <div className="flex flex-col gap-[10px] items-start w-full">
                <p className="font-['Libre_Bodoni'] font-semibold text-[48px] text-black w-full whitespace-nowrap">
                  How We Solve Pain Points?
                </p>
                <p className="font-['Inter'] font-normal not-italic text-[18px] text-black/50 w-full">
                  End-to-End Lifecycle Compliance Platform
                </p>
              </div>
            </div>

            {/* Right Image/Visual Area */}
            <div className="absolute left-[869px] top-[180px] w-[960px] h-[720px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
