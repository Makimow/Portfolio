import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-violet-400 hover:bg-violet-500 text-black font-medium py-2 px-4 rounded-xl transition ${className}`}
    >
      {children}
    </button>
  );
}
