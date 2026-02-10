import FeatureCard from "./FeatureCard";
import { WHY_CHOOSE_US } from "@/constants/WhyChooseUs";

function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              highlighted={item.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;