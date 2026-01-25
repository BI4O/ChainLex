"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const imgDown = "/scroll-down.svg";
const imgGroup1420068994 = "/btn-arrow.svg";
const imgVector9811 = "/divider-line.svg";

export default function Hero() {
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
    <section className="relative w-full flex justify-center bg-black overflow-hidden">
      {/* 1. 背景层：直接相对于 Section 定位，不参与 16:9 比例锁定 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 2. 内容层：保持 16:9 比例并居中 */}
      <div ref={wrapperRef} className="relative z-10 aspect-video w-full max-w-[1920px] overflow-hidden">
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
            {/* Scroll Down Indicator */}
            <div className="absolute left-1/2 ml-[579px] size-[30px] top-[1013px]">
              <img alt="" className="block max-w-none size-full" src={imgDown} />
            </div>

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
        </div>
      </div>
    </section>
  );
}
