import { Footer, Navbar } from 'components';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-gradient-to-r from-red-900 via-red-700 to-red-900 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700 animate-gradient">
        <div className="relative flex flex-col items-center justify-center w-full h-full backdrop-blur-2xl bg-white/10 dark:bg-black/20">
          {children}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MainLayout;
