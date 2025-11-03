import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Simple work highlight section */}
        <section id="work" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
              <p className="mt-3 text-gray-600">A glimpse into recent launches crafted for growth and brand love.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-gray-50 to-white">
                  <div className="aspect-video w-full bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                  <div className="p-5">
                    <h3 className="font-semibold">Campaign #{i}</h3>
                    <p className="mt-1 text-sm text-gray-600">Brand identity, website, and launch content.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}

export default App;
