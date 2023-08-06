"use client";

import InternalLink, { LinkProps } from "next/link";
import clsx from "clsx";

type IProps = { className?: string; children: React.ReactNode } & LinkProps;

const styles = {
  main: "text-sm not-italic font-bold text-gray-400",
};

export function Link({ className, children, ...rest }: IProps) {
  return (
    <InternalLink className={clsx(styles.main, className)} {...rest}>
      {children}
    </InternalLink>
  );
}
