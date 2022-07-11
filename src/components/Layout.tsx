import Head from "next/head";
import { FC, ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ label, children }) => {
  return (
    <div className=" max-w-prose h-auto mx-auto">
      <Head>
        <title>{label}</title>
      </Head>
      {children}
    </div>
  );
};
