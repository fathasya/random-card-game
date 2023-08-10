import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex p-5 items-center justify-center text-xs text-white bg-red-800 dark:bg-slate-900">
      Created by&nbsp;
      <Link href={`https://github.com/fathasya`} target="_blank">
        Fathasya Meyra Arliansyah
      </Link>
    </div>
  );
};

export default Footer;
