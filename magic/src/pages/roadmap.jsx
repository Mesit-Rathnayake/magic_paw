

function Roadmap() {
  const stages = [
    {
      title: "STAGE 1",
      items: [
        "MagicPaw Launch",
        "Token Listings on Exchanges",
        "$4M+ Daily Volume Target",
        "2,500+ Holders",
      ],
      side: "top",
    },
    {
      title: "STAGE 2",
      items: [
        "Security & Smart Contract Audit",
        "Community Growth Campaigns",
        "$4M+ Daily Volume Goal",
        "10,000+ Holders",
      ],
      side: "bottom",
    },
    {
      title: "STAGE 3",
      items: [
        "NFT Collection Launch",
        "Strategic Partnerships",
        "$4M+ Daily Volume Target",
        "10,000+ Holders",
      ],
      side: "top",
    },
    {
      title: "STAGE 4",
      items: [
        "MagicPaw Game Development",
        "Full Website & Digital Identity Upgrade",
        "Social Media Expansion & Global Marketing",
      ],
      side: "bottom",
    },
  ]

  return (
    <section
  id="roadmap"
  className="min-h-screen bg-[#001f1b] px-4 py-14 text-white sm:px-6 lg:px-8"
>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-font text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
            ROADMAP MAGICPAW
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Our journey with MagicPaw is filled with magic, milestones, and
            community growth. Each stage unlocks new possibilities, bringing us
            closer to a world where fun, creativity, and blockchain magic come
            together.
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="relative mx-auto mt-16 hidden h-[470px] max-w-6xl px-[4%] md:block">
          {/* Horizontal center line */}
          <div className="absolute left-0 right-0 top-1/2 z-0 h-px bg-white/20" />

          {stages.map((stage, index) => {
            const leftPositions = ["0%", "25%", "50%", "75%"]

            return (
              <div
                key={stage.title}
                className="absolute z-10 w-1/4"
                style={{ left: leftPositions[index] }}
              >
                {stage.side === "top" ? (
                  <div className="relative h-[235px]">
                    {/* Top box */}
                    <div className="absolute bottom-0 left-0 h-[235px] w-full rounded-t-full border border-b-0 border-white/20 px-8 pt-14">
                      <ul className="space-y-5 text-sm leading-relaxed text-white/95">
                        {stage.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stage title */}
                    <h2 className="heading-font absolute bottom-[-42px] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap bg-[#001f1b] px-4 text-3xl font-bold">
                      {stage.title}
                    </h2>
                  </div>
                ) : (
                  <div className="relative mt-[235px] h-[235px]">
                    {/* Stage title */}
                    <h2 className="heading-font absolute top-[-42px] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap bg-[#001f1b] px-4 text-3xl font-bold">
                      {stage.title}
                    </h2>

                    {/* Bottom box */}
                    <div className="absolute top-0 left-0 h-[235px] w-full rounded-b-full border border-t-0 border-white/20 px-8 pt-10">
                      <ul className="space-y-5 text-sm leading-relaxed text-white/95">
                        {stage.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile / Tablet Roadmap */}
        <div className="mt-12 space-y-6 md:hidden">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="rounded-3xl border border-white/20 bg-white/[0.02] p-6"
            >
              <h2 className="heading-font text-2xl font-bold">{stage.title}</h2>

              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/95">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Roadmap