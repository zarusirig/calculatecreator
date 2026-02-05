import Link from 'next/link';
import { Calculator, BookOpen, BarChart3, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-16">
      <div className="container-custom max-w-2xl text-center">
        <img
          src="/images/calculate-creator-transparent-v2.png"
          alt="CalculateCreator logo"
          className="h-12 w-auto mx-auto mb-8"
        />

        <h1 className="text-display-md md:text-display-lg font-display font-bold text-neutral-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-body-lg text-neutral-600 mb-10">
          Sorry, the page you're looking for doesn't exist or has been moved. Try one of these popular resources instead.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link
            href="/calculators/tiktok-money/"
            className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-left shadow-sm transition-all hover:shadow-md hover:border-primary-300"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-body-md">Money Calculator</p>
              <p className="text-body-sm text-neutral-500">Estimate your TikTok earnings</p>
            </div>
          </Link>

          <Link
            href="/calculators/engagement-rate/"
            className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-left shadow-sm transition-all hover:shadow-md hover:border-primary-300"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-body-md">Engagement Rate</p>
              <p className="text-body-sm text-neutral-500">Measure your content performance</p>
            </div>
          </Link>

          <Link
            href="/guides/"
            className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-left shadow-sm transition-all hover:shadow-md hover:border-primary-300"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-body-md">Creator Guides</p>
              <p className="text-body-sm text-neutral-500">Learn monetization strategies</p>
            </div>
          </Link>

          <Link
            href="/calculators/"
            className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-left shadow-sm transition-all hover:shadow-md hover:border-primary-300"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-neutral-900 text-body-md">All Calculators</p>
              <p className="text-body-sm text-neutral-500">Browse 45+ free tools</p>
            </div>
          </Link>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-neutral-800"
        >
          <Home className="h-4 w-4" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
