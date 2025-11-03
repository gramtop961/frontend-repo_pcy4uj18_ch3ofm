export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Let’s build something bold</h2>
            <p className="mt-3 text-gray-600 max-w-prose">
              Tell us about your goals and we’ll come back with a tailored plan, clear timelines, and transparent pricing.
            </p>
            <div className="mt-8 space-y-3 text-sm text-gray-700">
              <p><span className="font-medium">Email:</span> hello@feurmediahouse.com</p>
              <p><span className="font-medium">Phone:</span> +1 (555) 123-4567</p>
              <p><span className="font-medium">HQ:</span> Available worldwide • Remote-first</p>
            </div>
          </div>

          <form className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Budget</label>
              <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option>Under $5k</option>
                <option>$5k – $15k</option>
                <option>$15k – $50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project details</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="What are you looking to create?" />
            </div>
            <button type="button" className="w-full rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-gray-900">Send inquiry</button>
            <p className="text-xs text-gray-500">By submitting, you agree to our terms. We’ll never share your info.</p>
          </form>
        </div>

        <div className="mt-20 border-t border-black/5 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Feur Media House. All rights reserved.
        </div>
      </div>
    </section>
  );
}
