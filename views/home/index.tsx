import HeroSection from "./sections/HeroSection";
import IntroduceSection from "./sections/IntroduceSection";

const styles = {
  root: `
    wrapper  
  `,
};

export default function HomeView() {
  return (
    <main className={styles.root}>
      <HeroSection />
      <IntroduceSection />
    </main>
  );
}
