import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('darkMode', 'false');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggle}
      className={`w-8 h-8 rounded-full ${
        darkMode ? 'bg-slate-900' : 'bg-red-800'
      }`}
    >
      {darkMode ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </button>
  );
};

export default Toggle;
