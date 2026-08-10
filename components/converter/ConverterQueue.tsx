import type { QueueItem } from "./types";

interface Props {
  queue: QueueItem[];
}

export default function ConverterQueue({
  queue,
}: Props) {
  if (!queue.length) return null;

  return (
    <section className="rounded-3xl border bg-white p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Processing Queue
      </h2>

      <div className="space-y-3">
        {queue.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <span className="font-medium">
              {item.name}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                item.status === "completed"
                  ? "bg-green-100 text-green-700"
                  : item.status === "processing"
                  ? "bg-blue-100 text-blue-700"
                  : item.status === "failed"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}