import type {
  ConverterSettings as Settings,
} from "./types";

interface Props {
  settings: Settings;
  onChange: (settings: Settings) => void;
}

export default function ConverterSettings({
  settings,
  onChange,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Conversion Settings
        </h2>

        <p className="mt-2 text-slate-600">
          Customize the conversion quality and background color before processing
          your images. These settings help you balance image quality and file
          size depending on your needs.
        </p>
      </header>

      <div className="space-y-10">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <label
              htmlFor="quality"
              className="text-base font-semibold text-slate-800"
            >
              Image Quality
            </label>

            <span className="rounded-xl bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              {settings.quality}%
            </span>
          </div>

          <input
            id="quality"
            type="range"
            min={1}
            max={100}
            value={settings.quality}
            onChange={(e) =>
              onChange({
                ...settings,
                quality: Number(e.target.value),
              })
            }
            className="w-full accent-blue-600"
          />

          <div className="mt-3 flex justify-between text-sm text-slate-500">
            <span>Smaller File</span>
            <span>Recommended: 90–95%</span>
            <span>Highest Quality</span>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <label
            htmlFor="background"
            className="mb-4 block text-base font-semibold text-slate-800"
          >
            Background Color
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <input
              id="background"
              type="color"
              value={settings.backgroundColor}
              onChange={(e) =>
                onChange({
                  ...settings,
                  backgroundColor: e.target.value,
                })
              }
              className="h-14 w-20 cursor-pointer rounded-xl border border-slate-300 bg-white"
            />

            <div>
              <p className="font-mono text-sm font-medium text-slate-700">
                {settings.backgroundColor.toUpperCase()}
              </p>

              <p className="text-sm text-slate-500">
                Used when converting transparent images to JPG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}