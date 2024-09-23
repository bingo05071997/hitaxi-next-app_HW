'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function SideNavItems({ children }: Props) {
  return (
    <ul className="text-white flex-grow  bottom-5 text-center flex justify-between px-8 items-center gap-x-4">
      {children}
    </ul>
  );
}
