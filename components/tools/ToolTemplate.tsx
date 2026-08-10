import ToolHero from "@/components/tools/ToolHero";
import ConvertPanel from "@/components/tools/ConvertPanel";
import ToolFeatures from "@/components/tools/ToolFeatures";
import RelatedTools from "@/components/tools/RelatedTools";
import ToolFAQ from "@/components/tools/ToolFAQ";
interface Props {
  title: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
}

export default function ToolTemplate({
  title,
  description,
  inputFormat,
  outputFormat,
}: Props) {
  return (
    <>
      <ToolHero
        title={title}
        description={description}
      />

      <ConvertPanel
        inputFormat={inputFormat}
        outputFormat={outputFormat}
      />

      <ToolFeatures />

      <RelatedTools />

      <ToolFAQ
        items={[
          {
            question: `How do I convert ${inputFormat.toUpperCase()} to ${outputFormat.toUpperCase()}?`,
            answer:
              "Upload your image, click Convert, then download the result instantly.",
          },
          {
            question: "Is it free?",
            answer:
              "Yes. All image conversions are completely free.",
          },
          {
            question: "Are my files private?",
            answer:
              "Yes. Everything is processed locally in your browser whenever possible.",
          },
        ]}
      />
    </>
  );
}