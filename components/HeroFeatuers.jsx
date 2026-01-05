// components/HeroFeatures.tsx
import { CheckCircle2 } from "lucide-react";

const features = [
  "Experienced Drivers",
  "Clean & Well-Maintained Fleet",
  "24/7 Customer Support",
  "Best Price Guarantee",
];

export default function HeroFeatures() {
  return (
    <div className="w-full bg-black/60 backdrop-blur-sm rounded-2xl p-1 md:p-3 ">
      <div className="max-w-6xl mx-auto px-3 md:px-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white text-lg font-medium"
          >
            <CheckCircle2 className="text-yellow-400 w-6 h-6 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
