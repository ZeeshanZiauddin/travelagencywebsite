/** @format */

import React from "react";

const loading = () => {
  return (
    <div className="w-100 h-[70vh] container flex justify-center items-center">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary dark:text-white"
        role="status"
      ></div>
    </div>
  );
};

export default loading;
