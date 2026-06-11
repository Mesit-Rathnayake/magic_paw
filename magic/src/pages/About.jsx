import horrorHouseGlow from "../images/Horror House Glow.png"
import catFull from "../images/Cat Full.png"
import branchesRight from "../images/Leaves.png"
import grass from "../images/Grass.png"

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#001f1b] px-4 py-14 font-['PT_Sans'] text-white sm:px-6 lg:px-8"
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-[#001f1b]" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute right-[-80px] top-0 h-80 w-80 rounded-full bg-white/20 blur-3xl md:right-0" />

      {/* Right branches */}
      <div className="pointer-events-none absolute right-[-40px] top-[-30px] z-10 h-[55vh] w-[85vw] overflow-hidden sm:right-[-70px] sm:top-[-40px] sm:h-[85vh] sm:w-[50vw]">
        <img
          src={branchesRight}
          alt="Dark branches"
          className="h-full w-full scale-95 object-cover object-right opacity-80 sm:scale-110 sm:opacity-85"
        />
      </div>

      {/* Grass bottom */}
      <img
        src={grass}
        alt="Grass"
        className="pointer-events-none absolute bottom-0 left-0 z-[35] h-28 w-full object-cover opacity-95 sm:h-40 md:h-48"
      />

      {/* Main content */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text area */}
          <div className="text-center lg:text-left">
            <div className="mx-auto max-w-xl lg:mx-0">
              <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
                ABOUT MAGiCPAW
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                MagicPaw is more than a meme token—it’s a magical community of
                dreamers, cat lovers, and crypto fans. We mix fun, charm, and
                adorable visuals with real utility and strong community spirit.
                With MagicPaw, you hold not just a token, but a piece of magic
                that grows with every new member.
              </p>

              <a
                href="#roadmap"
                className="mt-7 inline-flex w-full justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-black shadow-md transition hover:bg-orange-200 sm:w-auto sm:py-3"
              >
                Learn more
              </a>
            </div>

            {/* Mobile visual: house + cat together */}
            <div className="relative mx-auto mt-10 h-[430px] w-full max-w-[390px] translate-y-20 sm:hidden">
              {/* House large on left */}
              <img
                src={horrorHouseGlow}
                alt="Horror house glowing moon"
                className="absolute bottom-[-5px] left-[-130px] z-30 w-[430px] max-w-none object-contain drop-shadow-2xl"
              />

              {/* Cat on right */}
              <img
                src={catFull}
                alt="MagicPaw cat"
                className="absolute bottom-[-10px] right-[-10px] z-40 w-[230px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Desktop/tablet house */}
            <div className="relative z-20 mx-auto mt-16 hidden max-w-[360px] translate-y-14 sm:block sm:max-w-[430px] sm:translate-y-16 md:max-w-[520px] md:translate-y-20 lg:mx-0 lg:mt-12 lg:translate-y-24">
              <img
                src={horrorHouseGlow}
                alt="Horror house glowing moon"
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Desktop/tablet cat */}
          <div className="relative hidden translate-y-14 justify-center sm:flex lg:translate-y-24 lg:justify-end">
            <img
              src={catFull}
              alt="MagicPaw cat"
              className="relative z-20 w-[365px] object-contain drop-shadow-2xl md:w-[450px] lg:w-[510px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About