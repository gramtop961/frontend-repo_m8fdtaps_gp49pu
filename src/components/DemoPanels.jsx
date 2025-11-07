import { useState } from 'react';
import { Upload, Image as ImageIcon, Map as MapIcon, AlertTriangle, BarChart3 } from 'lucide-react';

export default function DemoPanels() {
  const [fileName, setFileName] = useState('');
  const [healthScore, setHealthScore] = useState(null);

  function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFileName(f.name);
    // Fake result for demo UI
    setTimeout(() => setHealthScore(Math.round(70 + Math.random() * 30)), 600);
  }

  return (
    <section id="monitoring" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Drone Data Uploader</h3>
              <Upload className="h-4 w-4 text-gray-500" />
            </div>
            <p className="mt-2 text-sm text-gray-600">Drop your NDVI/orthomosaic files to generate a color-coded field health map.</p>
            <label className="mt-4 block cursor-pointer rounded-xl border border-dashed border-green-300 p-6 text-center hover:bg-green-50">
              <input type="file" className="hidden" onChange={handleFile} />
              <div className="flex flex-col items-center">
                <ImageIcon className="h-8 w-8 text-green-600" />
                <span className="mt-2 text-sm text-gray-700">{fileName || 'Click to select or drag & drop'}</span>
              </div>
            </label>
            {healthScore !== null && (
              <div className="mt-4 rounded-xl bg-gradient-to-r from-red-100 via-yellow-100 to-green-100 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-800">Estimated Field Health</span>
                  <span className="font-semibold text-green-700">{healthScore}%</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded bg-gray-100">
                  <div className="h-2 bg-green-500" style={{ width: `${healthScore}%` }} />
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">AI Insights Preview</h3>
              <BarChart3 className="h-4 w-4 text-gray-500" />
            </div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-green-50 p-4">
                <p className="font-medium text-green-800">Best Crop Now</p>
                <p className="text-green-900">Maize • 92% fit</p>
              </div>
              <div className="rounded-xl bg-yellow-50 p-4">
                <p className="font-medium text-yellow-800">Fertilizer Plan</p>
                <p className="text-yellow-900">NPK 10-26-26 • split into 3 stages</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="font-medium text-blue-800">Irrigation</p>
                <p className="text-blue-900">8-10 mm every 3 days</p>
              </div>
              <div className="rounded-xl bg-red-50 p-4">
                <p className="font-medium text-red-800 flex items-center gap-1"><AlertTriangle className="h-4 w-4" /> Pest Risk</p>
                <p className="text-red-900">Armyworm risk in NW corner</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border p-3 flex items-center gap-3 text-sm text-gray-700">
              <MapIcon className="h-4 w-4 text-gray-500" />
              <span>Interactive map coming soon – upload to generate color-coded overlays.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
