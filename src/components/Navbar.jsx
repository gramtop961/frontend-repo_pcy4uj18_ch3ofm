import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', to: '/services' },
    { label: 'Work', to: '/work' },
    { label: 'Contact', to: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg">Feur Media House</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-black text-white text-sm px-4 py-2 hover:bg-gray-900 transition-colors"
            >
              Start a Project
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="block rounded-md px-3 py-2 bg-black text-white text-center"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
