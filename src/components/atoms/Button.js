import React from 'react';

const Button = ({ text, onClick, isExit, ...props }) => {
  return (
    <button
      type="button"
      className={`${
        isExit
          ? 'w-fit px-3 py-2 bg-red-800 hover:bg-red-700 dark:bg-slate-900 dark:hover:bg-slate-800 text-white'
          : 'w-full p-2 bg-slate-100 hover:bg-white text-red-800 dark:text-slate-900'
      } rounded shadow hover:shadow-xl text-sm`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
