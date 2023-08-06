"use client";

import React from "react";

const styles = {
  root: `
    bg-slate-50
  `,
  wrapper: `
    wrapper flex items-center justify-between
    h-16 
  `,
};

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <span className="text-gray-400 text-sm">Social links</span>
        <span className="text-gray-400 text-sm">Contact us</span>
      </div>
    </footer>
  );
}
