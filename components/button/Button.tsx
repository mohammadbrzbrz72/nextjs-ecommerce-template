/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { css } from "@emotion/react";
import clsx from "clsx";

interface IButton {
  className?: string;
  children: React.ReactNode;
  onClick: (a: React.MouseEvent<HTMLElement>) => void;
}

const styles = {
  root: `
    text-sm text-indigo-50
    transition duration-150
    bg-indigo-600
    font-semibold py-2 px-4 rounded

    hover:bg-indigo-500
  `,
};

// set nested and mediaquery ,.... css styles
const cssStyle = css``;

export function Button({ className, children, onClick }: IButton) {
  return (
    <button
      type="button"
      className={clsx(styles.root, className)}
      css={cssStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
