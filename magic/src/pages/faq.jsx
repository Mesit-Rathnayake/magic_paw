import logo from "../images/Logo.png"
import bgImage from "../images/bg image.png"

function FAQ() {
  const faqs = [
    {
      question: "Q1: What is MagicPaw?",
      answer:
        "MagicPaw is a community-driven meme token that combines adorable cat-themed magic with real blockchain utility.",
    },
    {
      question: "Q2: How can I buy MagicPaw?",
      answer:
        "You can purchase MagicPaw through supported exchanges. Simply connect your wallet, swap for MagicPaw, and you’re ready to join the magic.",
    },
    {
      question: "Q3: Which blockchain is MagicPaw on?",
      answer:
        "MagicPaw runs on a secure and fast blockchain to ensure smooth transactions and community growth.",
    },
    {
      question: "Q4: Is there a tax on buying or selling?",
      answer:
        "No! MagicPaw has 0% tax for both buying and selling — pure magic with every trade.",
    },
    {
      question: "Q5: Will there be NFTs or games?",
      answer:
        "Yes! Our roadmap includes NFT launches, games, and exciting community events to make MagicPaw even more fun.",
    },
    {
      question: "Q6: How can I join the community?",
      answer:
        "Follow our official social channels, join discussions, and become part of our magical family.",
    },
  ]

  return (
    <section
      id="faq"
      className="relative min-h-screen overflow-hidden bg-[#001f1b] bg-cover bg-center bg-no-repeat px-4 py-12 font-['PT_Sans'] text-white sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 31, 27, 0.72), rgba(0, 31, 27, 0.88)), url(${bgImage})`,
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Got questions? We’ve got the answers! Here’s everything you need to
            know about the magical world of MagicPaw.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/30 bg-[#002b25]/70 px-5 py-4 backdrop-blur-md transition hover:border-white/60 hover:bg-[#00362f]/80"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold sm:text-lg">
                <span>{faq.question}</span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 text-sm transition group-open:rotate-180">
                  ⌄
                </span>
              </summary>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Footer */}
        <footer
          id="contact"
          className="mx-auto mt-14 max-w-6xl rounded-3xl border border-white/10 bg-[#001714]/95 px-6 py-8 shadow-2xl backdrop-blur-md sm:px-10 lg:px-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* Brand */}
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

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/75">
              <a href="#about" className="transition hover:text-orange-300">
                About us
              </a>
              <a href="#roadmap" className="transition hover:text-orange-300">
                Roadmap
              </a>
              <a
                href="#tokenomics"
                className="transition hover:text-orange-300"
              >
                Tokenomics
              </a>
              <a href="#games" className="transition hover:text-orange-300">
                Games
              </a>
              <a href="#faq" className="transition hover:text-orange-300">
                FAQ
              </a>
            </nav>

            {/* Newsletter */}
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
      </div>
    </section>
  )
}

export default FAQ