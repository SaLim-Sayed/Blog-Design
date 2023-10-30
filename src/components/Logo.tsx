import Image from "next/image";
import Link from "next/link";

import LogoImage from "public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className=" flex items-end gap-2">
      <Image src={LogoImage} alt="" width={32} height={32} />
      <div className="relative">
        <h1 className=" capitalize text-white text-xl font-bold  tracking-wide">
          next <span className="absolute w-2 h-2 rounded-full  bottom-1.5 bg-sky-700" />
        </h1>
        {/* <span className="absolute w-2 h-2 rounded-full -right-2.5 bottom-1.5 bg-sky-700" /> */}
      </div>
    </Link>
  );
};

export default Logo;
