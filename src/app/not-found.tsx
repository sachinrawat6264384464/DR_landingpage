import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-4">
        <div className="w-12 h-12 rounded-full bg-academic-navy text-academic-gold flex items-center justify-center mx-auto">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-academic-navy">Page Not Found</h2>
        <p className="text-xs text-slate-600">
          The requested academic resource or page could not be located.
        </p>
        <Link
          href="/"
          className="inline-block bg-academic-navy text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
