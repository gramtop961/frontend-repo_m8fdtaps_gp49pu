import { Leaf, Map, ShoppingCart, LineChart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-green-700 font-semibold">
            <Leaf className="h-6 w-6" />
            <span className="text-lg">SowCast</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#monitoring" className="hover:text-gray-900 flex items-center gap-2">
              <Map className="h-4 w-4" /> Drone Monitoring
            </a>
            <a href="#insights" className="hover:text-gray-900 flex items-center gap-2">
              <LineChart className="h-4 w-4" /> AI Insights
            </a>
            <a href="#marketplace" className="hover:text-gray-900 flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" /> Marketplace
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#get-started" className="rounded-full px-4 py-2 text-sm font-medium text-green-800 bg-green-100 hover:bg-green-200 transition">Get started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
