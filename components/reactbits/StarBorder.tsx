"use client";

import React from "react";

interface StarBorderProps<T extends React.ElementType> {
  as?: T;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

export default function StarBorder<T extends React.ElementType = "button">({
  as,
  className = "",
  color = "#00f2fe",
  speed = "4s",
  children,
  ...rest
}: StarBorderProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden rounded-2xl border border-white/10 ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-80 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-80 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-1 border border-white/10 bg-gradient-to-b from-[#111622] to-[#0b0e14] py-3 px-6 rounded-2xl text-white text-center">
        {children}
      </div>
    </Component>
  );
}
