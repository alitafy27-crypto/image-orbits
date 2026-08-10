import {
  Cpu,
  Download,
  Upload,
} from "lucide-react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description:
      "Choose one or multiple images from your computer.",
  },
  {
    icon: Cpu,
    title: "Process",
    description:
      "Your browser converts the images instantly without uploading them.",
  },
  {
    icon: Download,
    title: "Download",
    description:
      "Save the converted images individually or as a ZIP archive.",
  },
];

export default function HowItWorks() {
  return (
    <Section className="py-24">
      <Heading
        badge="How It Works"
        title="Three Simple Steps"
        description="Convert your images in seconds without installing any software."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>

              <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Icon size={36} />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}