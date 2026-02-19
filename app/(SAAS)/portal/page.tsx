import Link from "next/link";

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          THE PORTAL IS CURRENTLY
          <span className="block text-blue-400 mt-2">UNDER DEVELOPMENT</span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          We&apos;re building something great. The Digital Wakeel platform for legal research and case management will be available soon.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
