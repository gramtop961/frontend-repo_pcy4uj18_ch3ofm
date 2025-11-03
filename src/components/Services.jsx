import { Palette, Code2, Smartphone, Camera, Video, Server, ShoppingCart, Megaphone, Calendar, MessageSquare } from 'lucide-react';

const services = [
  { title: 'Brand & Design', desc: 'Visual identities, brand systems, and standout creative.', icon: Palette },
  { title: 'Web Development', desc: 'High-performance websites built for conversion.', icon: Code2 },
  { title: 'App Development', desc: 'iOS, Android, and cross-platform experiences.', icon: Smartphone },
  { title: 'Photography', desc: 'Product, lifestyle, and event photography.', icon: Camera },
  { title: 'Videography', desc: 'Story-driven films and social-first video content.', icon: Video },
  { title: 'I.T Services', desc: 'Reliable systems, cloud, and technical support.', icon: Server },
  { title: 'Media Buying', desc: 'ROI-focused ads across digital channels.', icon: ShoppingCart },
  { title: 'Social Media', desc: 'Strategy, content, and community management.', icon: Megaphone },
  { title: 'Consultation', desc: 'Marketing audits, roadmaps, and growth plans.', icon: MessageSquare },
  { title: 'Event Planning', desc: 'End-to-end planning and on-site management.', icon: Calendar },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">Full-funnel marketing and content production tailored to your brand.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500 text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-pink-600">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
