import { Link } from "react-router-dom";
import { ReactNode } from "react";
import classNames from "classnames";

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  type?: string;
};

export const LinkButton = ({ to, type, children }: LinkButtonProps) => {
  const colors = "bg-sp-secondary-500 hover:bg-sp-secondary-300";
  return (
    <Link
      className={classNames(
        colors,
        `w-fit inline-flex items-center justify-center py-[8px] px-10 tracking-wide transition-all duration-200 rounded-[28px] text-3xl shadow-md`
      )}
      to={to}
    >
      {children}
    </Link>
  );
};
