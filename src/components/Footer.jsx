
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight">
              Code<span className="text-[#eeff00]">Thinker</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Building ideas into powerful digital experiences. Learn,
              create, and think beyond the code with CodeThinker.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-sm text-gray-400 transition hover:border-[#eeff00] hover:text-white"
              >
                GH
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-sm text-gray-400 transition hover:border-[#eeff00] hover:text-white"
              >
                IN
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-sm text-gray-400 transition hover:border-[#eeff00] hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-sm text-gray-400 transition hover:border-[#eeff00] hover:text-white"
              >
                YT
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="transition hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="/services" className="transition hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="/contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Web Development
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  UI / UX Design
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  React Development
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Digital Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Get the latest coding tips, tutorials, and technology insights.
            </p>

            <div className="mt-5 flex">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-l-lg border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gray-600"
              />

              <button className="rounded-r-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} CodeThinker. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

