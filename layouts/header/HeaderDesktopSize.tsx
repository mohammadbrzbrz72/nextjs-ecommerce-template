"use client";

import React from "react";
import Image from "next/image";

import { Link, Button } from "@/components";
import { LINKS } from "./constant";

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

export default function HeaderDesktopSize() {
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
        <nav className={styles.navbar}>
          {LINKS.map(({ href, text }) => (
            <Link key={text} href={href}>
              {text}
            </Link>
          ))}
        </nav>
      </div>
      <section className={styles.leftSide}>
        <Button
          onClick={() => {
            console.log("Open custom login/signup modal");
          }}
        >
          login / signup
        </Button>
      </section>
    </>
  );
}
