"use client";
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`flex items-center text-xl font-semibold ${resolvedTheme === 'dark' ? 'filter invert' : ''}`}>
      <Image
        src="/assets/images/coralflow.svg"
        alt="Clerk"
        width="100"
        height="30"
      />
    </div>
  );
};

export { Logo };