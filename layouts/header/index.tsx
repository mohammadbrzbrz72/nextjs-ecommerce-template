"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import useMediaQuery from "@mui/material/useMediaQuery";

const DynamicHeaderDesktopSize = dynamic(() => import("./HeaderDesktopSize"), {
  loading: () => <></>,
});
const DynamicHeaderMobileSize = dynamic(() => import("./HeaderMobileSize"), {
  loading: () => <></>,
});

const styles = {
  root: `
    bg-slate-50
  `,
  wrapper: `
    wrapper
    flex justify-between items-center
    py-2
  `,
  rightSide: `
    flex h-full
  `,
  navbar: `
    flex items-center gap-7
    ml-5
  `,
  leftSide: `
    flex items-center h-full
    border
  `,
};

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <RenderCurrentHeader />
      </div>
    </header>
  );
}

function RenderCurrentHeader() {
  const matches = useMediaQuery("(min-width:600px)");

  if (matches) {
    return <DynamicHeaderDesktopSize />;
  }

  return <DynamicHeaderMobileSize />;
}
