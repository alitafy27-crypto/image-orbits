const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Process images instantly using optimized browser technology.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "Everything runs locally in your browser. Nothing is uploaded.",
  },
  {
    icon: "🌐",
    title: "Works Everywhere",
    description:
      "Compatible with Chrome, Edge, Firefox, Safari and modern browsers.",
  },
  {
    icon: "🛡️",
    title: "100% Secure",
    description:
      "No registration, no hidden uploads and no personal data collection.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Image-Orbits
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Built for Speed,
            <br />
            Privacy & Simplicity
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Everything you need to work with images online without
            compromising your privacy.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}