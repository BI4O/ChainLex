"use client";

import { useState, useRef, useEffect } from "react";

export default function Section3() {
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
    <section className="relative w-full flex justify-center bg-white">
      {/* Content Container */}
      <div ref={wrapperRef} className="relative w-full max-w-[1920px] overflow-visible">
        <div
          className="relative mx-auto"
          style={{
            width: '1920px',
            height: '400px',
            transform: scale < 1 ? `scale(${scale})` : 'none',
            transformOrigin: 'top center',
          }}
        >
          {/* Headline - Centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-0">
            <p className="font-['Inter'] font-semibold leading-[42px] not-italic text-[32px] text-black text-center mb-0">
              This is not a legal problem,
            </p>
            <p className="font-['Inter'] font-semibold leading-[42px] not-italic text-[32px] text-black text-center mb-0">
              {`it's a missing compliance infrastructure problem.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
