import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import { siteConfig } from "@/lib/site";

export default function AboutSection() {
  return (
    <Section>
      <Heading
        title="About Our Image Tools"
        description="Fast, secure and free online image editing directly in your browser."
      />

      <div className="mx-auto mt-16 max-w-5xl space-y-8 text-lg leading-8 text-slate-600">
        <p>
          {siteConfig.name} is an all-in-one platform designed to simplify image
          editing and conversion for everyone. Whether you are a designer,
          developer, student, photographer or content creator, our collection
          of online image tools helps you work faster without installing any
          software.
        </p>

        <p>
          Convert PNG to JPG, transform WEBP images, compress large photos,
          resize images for social media and optimize graphics for websites
          using modern browser technology. Most operations are performed
          directly on your device, providing better privacy and significantly
          faster processing.
        </p>

        <p>
          Unlike traditional desktop software, {siteConfig.name} works on
          Windows, macOS, Linux, Android and iPhone directly from your browser.
          There is nothing to download, no account to create and no hidden
          limitations. Simply upload your image, choose your preferred settings
          and download the result within seconds.
        </p>

        <p>
          We continuously improve our tools to support modern image formats
          including PNG, JPG, JPEG, WEBP and AVIF while maintaining excellent
          image quality and performance.
        </p>
      </div>
    </Section>
  );
}