import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex-center mt-4">
      <Image
        src={"/images/homepage/ipsum-image.jpg"}
        width={800}
        height={900}
        alt="bird logo"
      />
    </div>
  );
}
