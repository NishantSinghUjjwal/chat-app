// src/components/Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loading;
