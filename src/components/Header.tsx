import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="w-full h-14 px-8 border-b border-black flex justify-start items-center font-mono">
      <Link href="/">
        <a className="font-semibold text-3xl">(・_・)</a>
      </Link>
    </div>
  );
};
