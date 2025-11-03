import { ExternalLink, BadgeCheck } from 'lucide-react';

const projects = [
  {
    title: 'Aurora Cosmetics – Global Launch',
    cover:
      "https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    tags: ['Brand Identity', 'Ecommerce', 'Social'],
  },
  {
    title: 'Volt Mobility – App & Website',
    cover:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['App', 'Web', 'Product Video'],
  },
  {
    title: 'Harbor & Co. – Seasonal Campaign',
    cover:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Photography', 'Film', 'OOH'],
  },
  {
    title: 'North Peak – Rebrand',
    cover:
      'https://images.unsplash.com/photo-1520975682032-c50191a74137?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Strategy', 'Identity', 'Website'],
  },
];

export default function Work() {
  return (
    <div className="pt-24"> {/* offset for sticky nav */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Selected Work</h1>
            <p className="mt-3 text-gray-600">A collection of launches, rebrands, and content built for impact.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${p.cover})` }} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                        <BadgeCheck size={14} className="mr-1" /> {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-sm font-medium text-pink-600 inline-flex items-center gap-1 cursor-pointer">
                    View case study <ExternalLink size={14} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Let’s create your next big moment</h2>
          <p className="mt-3 text-gray-600">Share your goals, and we’ll craft a plan that fits your timeline and budget.</p>
          <a href="/\#contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-gray-900">
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}
