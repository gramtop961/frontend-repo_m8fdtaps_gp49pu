import { UploadCloud, Brain, Sprout, Activity, Wallet, ShieldCheck } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: UploadCloud,
      title: "Drone Monitoring",
      desc: "Upload multispectral drone imagery to generate color-coded NDVI health maps and detect pest hotspots.",
    },
    {
      icon: Brain,
      title: "AI Insight Engine",
      desc: "Fuses drone, IoT, and weather data for friendly recommendations, risk alerts, and nutrient deficiency detection.",
    },
    {
      icon: Sprout,
      title: "Agriculture Planning",
      desc: "Get crop suggestions by season and soil. Plan irrigation and fertilizers with subsidy predictions.",
    },
    {
      icon: Activity,
      title: "IoT Integration",
      desc: "Stream real-time soil moisture, nutrients, and temperature with anomaly alerts and charts.",
    },
    {
      icon: Wallet,
      title: "Marketplace + Wallet",
      desc: "Buy/sell inputs and rent equipment with integrated wallet and vendor analytics.",
    },
    {
      icon: ShieldCheck,
      title: "Profit Forecasts",
      desc: "AI yield predictions combine with input costs and prices to estimate profits each season.",
    },
  ];

  return (
    <section id="insights" className="py-16 sm:py-20 bg-gradient-to-b from-white to-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need for smart farming</h2>
          <p className="mt-3 text-gray-700">An end-to-end platform to monitor fields, plan crops, and manage farm economics.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
