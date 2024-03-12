import Hero from "@/components/hero";

import performanceImg from "../../../public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="angle grinder in use"
        title="We serve high performance applications"
      />
    </div>
  );
}
