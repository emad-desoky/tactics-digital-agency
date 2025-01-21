import React from "react";
import { Zap } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Zap className="w-8 h-8 text-blue-500" />

      <span className="text-2xl font-bold text-white">Company</span>
    </div>
  );
};

export default Logo;
