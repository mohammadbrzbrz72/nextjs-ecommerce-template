import React from "react";

import Header from "./header";
import Footer from "./footer";

interface IMainLayout {
  children: React.ReactNode;
}

const styles = {
  root: `
    h-screen w-screen
  `,
  main: `
    overflow-x-hidden
  `,
};

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
}
