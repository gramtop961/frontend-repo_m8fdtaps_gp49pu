import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} SowCast. Growing intelligence for every acre.</p>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-gray-900 inline-flex items-center gap-1 text-sm"><Github className="h-4 w-4" /> GitHub</a>
            <a href="#" className="hover:text-gray-900 inline-flex items-center gap-1 text-sm"><Twitter className="h-4 w-4" /> Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
