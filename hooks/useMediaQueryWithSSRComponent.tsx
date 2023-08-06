import { useEffect, useState } from "react";

interface IUseMediaQuerySSR {
  media?: string;
  component?: React.ReactNode;
  MatchedComponent: React.FC;
  UnMatchedComponent: React.FC;
}

export default function useMediaQueryWithSSRComponent({
  media = "(min-width: 768px)",
  component,
  MatchedComponent,
  UnMatchedComponent,
}: IUseMediaQuerySSR) {
  const [match, setMatch] = useState<undefined | boolean>();

  useEffect(() => {
    //? Example: "(min-width: 768px)"
    // let mediaQuery = window.matchMedia(media);
    // mediaQuery.addListener(setMQuery);
    // return () => mediaQuery.removeListener(setMQuery);
  }, []);

  // it's for ssr mode
  if (match === undefined) {
    return component ?? <></>;
  }

  // bottom codes on client side
  else if (match) {
    return <MatchedComponent />;
  }

  return <UnMatchedComponent />;
}
