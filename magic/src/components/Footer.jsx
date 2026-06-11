import logo from "../images/Logo.png"

function Footer() {
  return (
    <footer className="mx-auto mt-8 max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <img
              src={logo}
              alt="MagicPaw logo"
              className="h-16 w-16 object-contain"
            />
          </div>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/70 lg:mx-0">
            MagicPaw brings cute, crypto, and community together in one
            magical ecosystem.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/75">
          <a href="/about" className="transition hover:text-orange-300">
            About us
          </a>
          <a href="/roadmap" className="transition hover:text-orange-300">
            Roadmap
          </a>
          <a href="/tokenomics" className="transition hover:text-orange-300">
            Tokenomics
          </a>
          <a href="/faq" className="transition hover:text-orange-300">
            FAQ
          </a>
          <a href="#contact" className="transition hover:text-orange-300">
            Contact us
          </a>
        </nav>

        <div className="lg:justify-self-end">
          <p className="mb-3 text-center text-sm font-bold text-white lg:text-left">
            Join the MagicPaw newsletter
          </p>

          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 min-w-0 rounded-xl border border-white/35 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/55 focus:border-orange-300 sm:w-64"
            />

            <button
              type="submit"
              className="h-11 rounded-xl bg-white px-6 text-sm font-bold text-black transition hover:bg-orange-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row">
        <p>© 2025 MagicPaw. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#privacy" className="transition hover:text-white">
            Privacy Policy
          </a>
          <a href="#terms" className="transition hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer