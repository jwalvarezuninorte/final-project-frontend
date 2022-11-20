import React from "react";

export const SecondaryButton = ({ label, disabled = false }) => {
  let color = !disabled
    ? "text-white border-white"
    : "text-gray-400 border-gray-400";

  return (
    <button
      className={"px-3 py-2 rounded-lg border w-1/2 " + color}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
