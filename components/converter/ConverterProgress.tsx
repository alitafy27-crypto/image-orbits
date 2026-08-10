import type {
  ConverterState,
} from "./types";

interface Props {
  state: ConverterState;
}

export default function ConverterProgress({
  state,
}: Props) {
  if (!state.processing) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Converting Images
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Please wait while your images are being processed.
          </p>
        </div>

        <span className="text-lg font-bold text-blue-600">
          {state.progress}%
        </span>

      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${state.progress}%`,
          }}
        />

      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">

        <span>
          {state.completed} of {state.total} completed
        </span>

        <span>
          {state.total - state.completed} remaining
        </span>

      </div>

    </section>
  );
}