import React from 'react';
import { AppConfig } from '@/utils/AppConfig';
import Image from 'next/image';

const Logo = () => (
  <div className="flex items-center text-xl font-semibold">
      <Image
          src="/assets/images/coralflow.svg"
          alt="Clerk"
          width="100"
          height="30"
        />
    {/* {AppConfig.name} */}
  </div>
);

export { Logo };