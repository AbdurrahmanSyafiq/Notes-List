import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-2 py-2 border-emerald-400 border-2 rounded-lg mb-4 shadow-md bg-slate-100 max-w-sm w-full"
      />
    </div>
  );
};

export default Input;
