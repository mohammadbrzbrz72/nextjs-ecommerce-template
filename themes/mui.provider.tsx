"use client";

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import RootStyleRegistry from "./emotion.provider";
import theme from "./theme";

export default function MUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootStyleRegistry>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </RootStyleRegistry>
  );
}
