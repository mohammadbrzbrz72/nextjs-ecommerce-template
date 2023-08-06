"use client";

import clsx from "clsx";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
  children?: React.ReactNode;
  classes?: Partial<{
    root: string;
    embla: string;
  }>;
};

const styles = {
  root: `
  
  `,
  embla: `
    overflow-hidden
  `,
  /**
  ** css example for slides
    slide: `
      min-w-0 flex-[0_0_100%] or flex-[0_0_90%]
      border
      text-white
      flex-center
      pointer-events-none
    `
  */
};

const OPTIONS: EmblaOptionsType = {
  align: "start",
  containScroll: false,
  // direction: "rtl", //* set rtl for rtl language
};

export const AlignCarousel: React.FC<PropType> = ({ classes, children }) => {
  const [emblaRef] = useEmblaCarousel(OPTIONS);

  //? it should has a container div in children props when you pass slides according to the children
  //? container should has a flex display property
  // <div class="flex"> [...slides] </div>

  return (
    <div className={clsx(styles.root, classes?.root)}>
      <div className={clsx(styles.embla, classes?.embla)} ref={emblaRef}>
        {children}
      </div>
    </div>
  );
};

//? Carousel usage
/**
 <AlignCarousel>
    <div class="flex gap-5">
      {[...].map(props => (
        <Comp key={props.id} {...props} className={styles.slide} />
      ))}
    </div>
 </AlignCarousel>
*/
