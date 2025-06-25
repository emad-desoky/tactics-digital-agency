import { Image, Link } from "@nextui-org/react";

const Logo = () => {
  return (
    <div className="flex justify-center lg:justify-start">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Tactics Digital Agency Logo"
          width={240}
          height={240}
          className="hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
  );
};

export default Logo;
