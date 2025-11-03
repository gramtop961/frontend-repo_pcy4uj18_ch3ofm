import { Palette, Code2, Smartphone, Camera, Video, Server, ShoppingCart, Megaphone, Calendar, MessageSquare } from 'lucide-react';

const serviceDetails = [
  {
    icon: Palette,
    title: 'Brand & Design',
    desc: 'From strategy to identity systems, we craft brands people remember.',
    bullets: ['Naming & Positioning', 'Logo & Visual Identity', 'Brand Guidelines', 'Collateral & Packaging'],
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'High-performance websites built for speed, SEO, and conversion.',
    bullets: ['Marketing Sites', 'Headless CMS', 'Ecommerce', 'Analytics & CRO'],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Cross-platform mobile and web apps focused on usability and scale.',
    bullets: ['iOS & Android', 'React Native', 'Prototype to Launch', 'Maintenance & Support'],
  },
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Studio and on-location shoots for products, lifestyle, and events.',
    bullets: ['Product Shoots', 'Lifestyle', 'Portraits', 'Editing & Retouching'],
  },
  {
    icon: Video,
    title: 'Videography',
    desc: 'Story-driven films made for digital, broadcast, and events.',
    bullets: ['Concept & Scripting', 'Production', 'Editing & Motion', 'Social Cutdowns'],
  },
  {
    icon: Server,
    title: 'I.T Services',
    desc: 'Reliable infrastructure, cloud, and ongoing technical support.',
    bullets: ['Cloud & Hosting', 'Automation', 'Helpdesk', 'Security'],
  },
  {
    icon: ShoppingCart,
    title: 'Media Buying',
    desc: 'Performance media across Google, Meta, TikTok, and programmatic.',
    bullets: ['Funnel Strategy', 'Creative Testing', 'Retargeting', 'Reporting'],
  },
  {
    icon: Megaphone,
    title: 'Social Media',
    desc: 'Always-on content, community management, and growth.',
    bullets: ['Content Calendars', 'UGC & Creator', 'Community', 'Reporting'],
  },
  {
    icon: MessageSquare,
    title: 'Consultation',
    desc: 'Audits, roadmaps, and embedded advisory for growing teams.',
    bullets: ['Marketing Audits', 'Roadmaps', 'Workshops', 'Embedded Support'],
  },
  {
    icon: Calendar,
    title: 'Event Planning',
    desc: 'End-to-end planning, production, and on-site management.',
    bullets: ['Experiential', 'Launch Events', 'Conferences', 'Logistics'],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24"> {/* offset for sticky nav */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Services</h1>
            <p className="mt-3 text-gray-600">Full-funnel marketing and content production across strategy, design, and engineering.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDetails.map(({ icon: Icon, title, desc, bullets }) => (
              <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 list-disc list-inside">
                  {bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href="/\#contact" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-gray-900">
              Get a tailored proposal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
