import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';

interface BlogPostTemplateProps {
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  children: React.ReactNode;
}

export function BlogPostTemplate({
  title,
  description,
  category,
  publishDate,
  readTime,
  gradientFrom = 'from-blue-600',
  gradientVia = 'via-purple-600',
  gradientTo = 'to-pink-500',
  children,
}: BlogPostTemplateProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-neutral-900 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-neutral-900">{title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} py-12`}>
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {publishDate}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {readTime}</span>
            <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> {category}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {children}
      </div>
    </div>
  );
}
