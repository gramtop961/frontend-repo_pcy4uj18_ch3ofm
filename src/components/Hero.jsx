import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-800 ring-1 ring-black/5">
              Vibrant ideas. Pixel-perfect execution.
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
              Feur Media House
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
              A full-service marketing agency specializing in Design, Web & App Development, Social Media, Photography, Videography, I.T, Media Buying, Consultation, and Event Planning & Management.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-gray-900"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-6 py-3 text-sm text-gray-900 ring-1 ring-black/10 hover:bg-white"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
