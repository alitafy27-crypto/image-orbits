import type {
  ImageFormat,
  ToolOperation,
} from "@/components/converter/types";

export type ToolCategory =
  | "convert"
  | "compress"
  | "resize"
  | "edit";

export interface ToolItem {
  slug: string;
  title: string;
  description: string;

  inputFormat: ImageFormat | "";
  outputFormat: ImageFormat | "";

  operation: ToolOperation;

  category: ToolCategory;

  icon: string;

  featured?: boolean;
}

export const tools: ToolItem[] = [
  {
    slug: "png-to-jpg",
    title: "PNG to JPG",
    description:
      "Convert PNG images to JPG instantly while preserving excellent quality.",
    inputFormat: "png",
    outputFormat: "jpg",
    operation: "convert",
    category: "convert",
    icon: "🖼️",
    featured: true,
  },

  {
    slug: "jpg-to-png",
    title: "JPG to PNG",
    description:
      "Convert JPG images to PNG in seconds.",
    inputFormat: "jpg",
    outputFormat: "png",
    operation: "convert",
    category: "convert",
    icon: "📷",
    featured: true,
  },

  {
    slug: "png-to-webp",
    title: "PNG to WEBP",
    description:
      "Convert PNG images into modern WEBP format.",
    inputFormat: "png",
    outputFormat: "webp",
    operation: "convert",
    category: "convert",
    icon: "🌐",
    featured: true,
  },

  {
    slug: "webp-to-png",
    title: "WEBP to PNG",
    description:
      "Convert WEBP images back to PNG.",
    inputFormat: "webp",
    outputFormat: "png",
    operation: "convert",
    category: "convert",
    icon: "🧩",
    featured: true,
  },

  {
    slug: "compress",
    title: "Image Compressor",
    description:
      "Reduce image size while keeping the best possible quality.",
    inputFormat: "",
    outputFormat: "",
    operation: "compress",
    category: "compress",
    icon: "⚡",
    featured: true,
  },

  {
    slug: "resize",
    title: "Resize Image",
    description:
      "Resize images for websites, social media and print.",
    inputFormat: "",
    outputFormat: "",
    operation: "resize",
    category: "resize",
    icon: "📐",
    featured: true,
  },

  {
    slug: "crop",
    title: "Crop Image",
    description:
      "Crop images quickly with precision.",
    inputFormat: "",
    outputFormat: "",
    operation: "crop",
    category: "edit",
    icon: "✂️",
  },

  {
    slug: "rotate",
    title: "Rotate Image",
    description:
      "Rotate images by 90°, 180° or any angle.",
    inputFormat: "",
    outputFormat: "",
    operation: "rotate",
    category: "edit",
    icon: "🔄",
  },

  {
    slug: "watermark",
    title: "Watermark Image",
    description:
      "Add text or image watermarks easily.",
    inputFormat: "",
    outputFormat: "",
    operation: "watermark",
    category: "edit",
    icon: "💧",
  },
];