import React from 'react';
import { cn } from "../lib/utils";

const LogBook = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Under Construction Text */}
      <div className=" coming-soon-text relative z-20 h-full flex justify-center items-center text-white text-xl">
        Under Development 🏗️
      </div>
    </div>
  );
};


export default LogBook