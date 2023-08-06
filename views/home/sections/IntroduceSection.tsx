import { Text } from "@/components";
import React from "react";

export default function IntroduceSection() {
  return (
    <div className="pb-24">
      <Text as="h1" className="flex-center text-xl font-medium">
        This is{" "}
        <strong className="text-green-400 px-3 text-2xl">Boilerplate</strong>
        for next.js
      </Text>
    </div>
  );
}
