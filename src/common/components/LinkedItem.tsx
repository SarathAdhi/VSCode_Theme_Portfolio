import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const LinkedItem: React.FC<Props> = ({
  href,
  className,
  children,
  onClick,
}) => {
  return (
    <Link href={href}>
      <a className={clsx(className)} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

export default LinkedItem;
