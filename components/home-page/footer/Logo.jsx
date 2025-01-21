import React from "react";
import { Zap } from "lucide-react";
import { Image, Link } from "@nextui-org/react";

const Logo = () => {
  return (
    <div className="">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </Link>
    </div>
  );
};

export default Logo;
