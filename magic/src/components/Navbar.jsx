import { useState } from "react"
import logo from "../images/Logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact us", href: "#contact" },
  ]

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop / Mobile Top Navbar */}
      <header className="fixed left-0 top-0 z-[999] w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-20">
          {/* Logo */}
          <a href="#home" onClick={closeMenu} className="flex items-center">
            <img
              src={logo}
              alt="MagicPaw logo"
              className="h-11 w-11 object-contain sm:h-14 sm:w-14"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-5 text-[10px] font-medium text-white/90 md:flex lg:gap-7 lg:text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-orange-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buy Button */}
          <a
            href="#games"
            className="hidden rounded-xl bg-white px-5 py-3 text-[10px] font-bold text-black shadow-md transition hover:bg-orange-200 sm:px-6 md:inline-flex lg:text-xs"
          >
            Buy Now
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-xl text-white backdrop-blur-md md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[1000] md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Dark overlay */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/65 backdrop-blur-[2px] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right side mobile menu panel */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[68vw] max-w-[270px] flex-col bg-black px-4 py-5 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeMenu}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold leading-none text-black"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Menu links */}
          <div className="mt-8 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl border border-white/80 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-black"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Buy Now */}
          <a
            href="#games"
            onClick={closeMenu}
            className="mt-auto rounded-xl bg-white px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-orange-200"
          >
            Buy Now
          </a>
        </aside>
      </div>
    </>
  )
}

export default Navbar