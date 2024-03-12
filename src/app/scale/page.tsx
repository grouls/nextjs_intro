import Hero from "@/components/hero";

import scaleImg from "../../../public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      <Hero
        imgData={scaleImg}
        imgAlt="steel factory interior"
        title="Scale your app to infinity"
      />
    </div>
  );
}
