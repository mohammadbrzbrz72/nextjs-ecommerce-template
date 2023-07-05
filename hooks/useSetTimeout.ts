"use client";

import { useEffect, useState } from "react";

export function useSetTimeout(time = 1000, initialState: boolean) {
  const [isTimeout, setIsTimeout] = useState(initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimeout((data) => !data);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isTimeout;
}
