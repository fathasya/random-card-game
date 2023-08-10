import { IconGithub } from 'assets/icons';
import { Toggle } from 'components/atoms';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav
        className="flex-no-wrap relative flex w-full items-center justify-between text-white p-2 shadow bg-red-800 dark:bg-slate-900 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <p className="text-sm md:text-lg font-bold">RANDOM CARD GAMES</p>
          <div className="flex">
            <Toggle />
            <a
              href="https://fathasya.github.io"
              className="p-2 rounded-full bg-red-800 dark:bg-slate-900 cursor-pointer"
              target="_blank"
            >
              <IconGithub />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
