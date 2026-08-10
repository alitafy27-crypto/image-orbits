import {
  Globe,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process images instantly with optimized browser-based technology.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Your files never leave your device. Everything runs locally.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Compatible with Chrome, Edge, Firefox, Safari and all modern browsers.",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure",
    description:
      "No registration, no hidden uploads and no personal data collection.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-slate-50 py-24">
      <Heading
        badge="Why Choose Us"
        title="Built for Speed & Privacy"
        description="Professional online image tools designed with performance, security and simplicity in mind."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}