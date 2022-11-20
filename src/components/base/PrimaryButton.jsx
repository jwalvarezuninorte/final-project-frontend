import React from "react";

export const PrimaryButton = ({ label, disabled = false }) => {
  let color = !disabled
    ? "bg-blue-600 text-white "
    : "bg-gray-300 text-gray-400 ";

  return (
    <button
      className={"px-3 py-2 rounded-lg w-full " + color}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
