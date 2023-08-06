import type { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

export type TagType =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "b"
  | "strong"
  | "i"
  | "em"
  | "mark"
  | "small"
  | "del"
  | "ins"
  | "sub"
  | "sup";

interface IText {
  as?: TagType;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

const styles = {
  root: `
    not-italic
  `,
};

export function Text({ className, as: Text = "span", children, style }: IText) {
  return (
    <Text className={clsx(styles.root, className)} style={style}>
      {children}
    </Text>
  );
}
