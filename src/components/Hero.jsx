import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden" id="get-started">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8uTii6f2r0bQ3cO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
              <Sparkles className="h-3.5 w-3.5" /> AI for Sustainable Farming
            </span>
            <h1 className="mt-4 font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl text-gray-900">
              SowCast: Precision farming made simple
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              Upload drone data, stream IoT sensors, and get farmer-friendly AI insights: crop health maps, pest risks, irrigation & fertilizer plans, and profit forecasts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#monitoring" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-white shadow hover:bg-green-700 transition">
                <Rocket className="h-4 w-4" /> Launch Dashboard
              </a>
              <a href="#marketplace" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-green-700 ring-1 ring-green-200 hover:ring-green-300 transition">
                Explore Marketplace
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
