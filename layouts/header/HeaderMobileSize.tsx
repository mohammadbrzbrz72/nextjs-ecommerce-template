"use client";

import React from "react";
import Image from "next/image";

import { Link, Button } from "@/components";
import { LINKS } from "./constant";

const styles = {
  rightSide: `
    flex h-full
  `,

  leftSide: `
    flex items-center h-full
    border
  `,
};

export default function HeaderMobileSize() {
  return (
    <>
      <div className={styles.rightSide}>
        <Link href="/">
          <Image
            src={"icons/header-logo.svg"}
            width={80}
            height={70}
            alt="bird logo"
          />
        </Link>
      </div>
      <div className={styles.leftSide}>lo</div>
    </>
  );
}
