import homeImg from "../../public/home.jpg";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
