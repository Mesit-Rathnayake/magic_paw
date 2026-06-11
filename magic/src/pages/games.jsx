import horrorHouseGlow from "../images/Horror House Glow.png"
import pumpBox from "../images/pumpbox.png"
import grass from "../images/Grass.png"

function Games() {
  const games = [
    {
      title: "MAGICPAW QUESTS",
      subtitle: "The Beginning of the Magic",
      description:
        "Embark on the first adventure where our magical cats set out to discover hidden treasures and mystical powers.",
    },
    {
      title: "MAGICPAW ARENA",
      subtitle: "Open Beta (In Development)",
      description:
        "Face off in exciting battles against players worldwide in our web-based magical cat arena. Only the cleverest paws will win!",
    },
  ]

  return (
    <>
    <section
  id="games"
  className="relative min-h-screen overflow-hidden bg-[#001f1b] px-4 py-14 font-['PT_Sans'] text-white sm:px-6 lg:px-8"
>
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Center haunted house background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center">
        <img
          src={horrorHouseGlow}
          alt="Haunted house"
          className="w-[360px] object-contain opacity-90 sm:w-[460px] md:w-[560px] lg:w-[650px]"
        />
      </div>

      {/* Black overlay above house */}
      <div className="pointer-events-none absolute inset-0 z-5 bg-black/60" />


      <div className="relative z-20 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
            OUR GAMES
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            MagicPaw is building a magical gaming world where every pawprint
            tells a story. Step into our enchanted realms and join adorable yet
            powerful magical cats on their adventures. From quests to battles,
            our games bring the fun, charm, and thrill of MagicPaw to life.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="relative mt-12 hidden min-h-[480px] items-end justify-between lg:flex">
          {/* Left card */}
          <div className="relative z-20 w-[360px] shrink-0">
            <img
              src={pumpBox}
              alt="Pumpkin card frame"
              className="w-full object-contain"
            />

            <div className="absolute inset-0 flex flex-col items-center px-10 pt-16 text-center">
              <h2 className="text-[22px] font-bold leading-tight">
                {games[0].title}
              </h2>

              <h3 className="mt-4 text-[17px] font-normal leading-snug">
                {games[0].subtitle}
              </h3>

              <p className="mt-6 text-[14px] leading-relaxed text-white/90">
                {games[0].description}
              </p>
            </div>
          </div>

          {/* Right card */}
          <div className="relative z-20 w-[360px] shrink-0">
            <img
              src={pumpBox}
              alt="Pumpkin card frame"
              className="w-full object-contain"
            />

            <div className="absolute inset-0 flex flex-col items-center px-10 pt-16 text-center">
              <h2 className="text-[22px] font-bold leading-tight">
                {games[1].title}
              </h2>

              <h3 className="mt-4 text-[17px] font-normal leading-snug">
                {games[1].subtitle}
              </h3>

              <p className="mt-6 text-[14px] leading-relaxed text-white/90">
                {games[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet layout */}
        <div className="mt-12 grid gap-8 lg:hidden">
          {games.map((game) => (
            <div key={game.title} className="relative mx-auto w-full max-w-[380px]">
              <img
                src={pumpBox}
                alt="Pumpkin card frame"
                className="w-full object-contain"
              />

              <div className="absolute inset-0 flex flex-col items-center px-8 pt-14 text-center sm:px-10 sm:pt-16">
                <h2 className="text-xl font-bold leading-tight sm:text-2xl">
                  {game.title}
                </h2>

                <h3 className="mt-3 text-base font-normal leading-snug sm:text-lg">
                  {game.subtitle}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-white/90 sm:text-[15px]">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
    </>
  )
}

export default Games