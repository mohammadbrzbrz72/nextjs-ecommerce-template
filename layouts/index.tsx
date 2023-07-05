"use client";

import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
