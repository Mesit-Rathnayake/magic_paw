import catLarge from "../images/Cat Large.png"
import catSmall from "../images/Cat Large.png"
import catFull from "../images/Cat Full.png"
import branchesLeft from "../images/Leaves.png"
import branchesRight from "../images/Leaves.png"
import castleMoon from "../images/Horror House.png"
import grass from "../images/Grass.png"

function Landing() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full max-w-full overflow-hidden bg-[#001f1b] pt-20 text-white"
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-[#001f1b]" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[36%] z-[1] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[90px] sm:h-[620px] sm:w-[620px] lg:top-[42%] lg:h-[760px] lg:w-[760px]" />

      {/* Extra green glow */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] z-[1] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[110px] sm:h-[700px] sm:w-[700px]" />

      {/* Left branches */}
      <img
        src={branchesLeft}
        alt="Left dark tree branches"
        className="pointer-events-none absolute left-[-65px] top-[-35px] z-10 w-[230px] scale-x-[-1] opacity-75 sm:left-[-120px] sm:top-[-80px] sm:w-[520px] md:left-[-145px] md:w-[650px] lg:left-[-170px] lg:top-[-90px] lg:w-[820px] xl:left-[-190px] xl:w-[920px]"
      />

      {/* Right branches */}
      <img
        src={branchesRight}
        alt="Right dark tree branches"
        className="pointer-events-none absolute right-[-65px] top-[-35px] z-10 w-[230px] opacity-75 sm:right-[-120px] sm:top-[-80px] sm:w-[520px] md:right-[-145px] md:w-[650px] lg:right-[-170px] lg:top-[-90px] lg:w-[820px] xl:right-[-190px] xl:w-[920px]"
      />

      {/* Dark side shadows */}
      <div className="pointer-events-none absolute left-0 top-0 z-[11] h-full w-[35%] bg-gradient-to-r from-black/25 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-[11] h-full w-[35%] bg-gradient-to-l from-black/25 to-transparent" />

      {/* Grass overlay */}
      <img
        src={grass}
        alt="Foreground grass"
        className="pointer-events-none absolute bottom-0 left-0 z-50 h-24 w-full object-cover sm:h-32 md:h-36 lg:h-40"
      />

      {/* Hero */}
      <main className="relative z-20 flex min-h-[calc(100vh-80px)] flex-col items-center px-4 text-center">
        {/* Horror house / moon */}
        <div className="absolute bottom-[65px] z-0 h-[430px] w-[430px] sm:bottom-auto sm:top-[55px] sm:h-[520px] sm:w-[520px] md:h-[620px] md:w-[620px] lg:top-[45px] lg:h-[740px] lg:w-[740px] xl:h-[800px] xl:w-[800px]">
          <img
            src={castleMoon}
            alt="Moon and haunted castle"
            className="h-full w-full object-contain opacity-95"
          />
        </div>

        {/* Text content */}
        <div className="relative z-30 mt-3 sm:mt-10 md:mt-16 lg:mt-12">
          <h1 className="text-4xl font-bold leading-none tracking-tight text-white drop-shadow-xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[135px]">
            MagicPaw
          </h1>

          <p className="mx-auto mt-3 max-w-[310px] text-sm leading-snug text-white/95 sm:mt-4 sm:max-w-[720px] sm:text-sm md:text-base lg:text-lg">
            Where cute meets crypto, and every pawprint brings you closer to
            magic.
          </p>
        </div>

        {/* Mobile only: Cat Full */}
        <div className="relative z-40 mt-auto flex w-full justify-center pb-7 sm:hidden">
          <img
            src={catFull}
            alt="MagicPaw full cat"
            className="w-[280px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Desktop/tablet only: Two cats */}
        <div className="relative z-40 mt-auto hidden w-full items-end justify-center gap-2 pb-10 sm:flex sm:gap-6 md:gap-10 lg:pb-6 xl:pb-8">
          <img
            src={catLarge}
            alt="MagicPaw cat with wizard hat"
            className="w-[320px] object-contain drop-shadow-2xl md:w-[390px] lg:w-[460px] xl:w-[520px]"
          />

          <img
            src={catSmall}
            alt="Small MagicPaw cat with wizard hat"
            className="mb-2 w-[185px] object-contain drop-shadow-2xl md:w-[235px] lg:w-[285px] xl:w-[330px]"
          />
        </div>
      </main>
    </section>
  )
}

export default Landing