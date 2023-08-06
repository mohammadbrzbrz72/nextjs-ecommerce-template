import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { Text, TagType } from ".";

interface ITextIcon {
  as?: TagType;
  text: string;
  classes?: {
    root?: string;
    text?: string;
    img?: string;
  };
  icon?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectFit?: string;
  };
}

const styles = {
  root: `
    flex items-center
  `,
};

export default function TextIcon({
  as,
  classes,
  text = "",
  image,
  icon,
}: ITextIcon) {
  return (
    <div className={clsx(styles.root, classes?.root)}>
      <Text as={as} className={classes?.text}>
        {text}
      </Text>
      {!!icon ? (
        icon
      ) : (
        <Image
          src={image!.src}
          width={image!.width}
          height={image!.height}
          alt={image!.alt}
          className={classes?.img}
          objectFit={image?.objectFit}
        />
      )}
    </div>
  );
}
