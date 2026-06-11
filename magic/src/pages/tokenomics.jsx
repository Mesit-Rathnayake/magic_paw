import catFull from "../images/Cat Full.png"


function Tokenomics() {
  const totalSupply = "30,000,000"

  const tokenomicsData = [
    {
      label: "Marketing",
      value: 50,
      color: "#ec005b", // Magenta
    },
    {
      label: "Liquidity Pool (LP)",
      value: 20,
      color: "#00e6b0", // Blue-green
    },
    {
      label: "Tax",
      value: 15,
      color: "#1667ff", // Blue
    },
    {
      label: "Sell Tax",
      value: 15,
      color: "#ffc400", // Yellow
    },
  ]

  const size = 360
  const center = size / 2
  const strokeWidth = 44
  const radius = 125
  const circumference = 2 * Math.PI * radius

  let accumulatedValue = 0

  const chartSegments = tokenomicsData.map((item) => {
    const segmentLength = (item.value / 100) * circumference
    const dashOffset = -accumulatedValue

    accumulatedValue += segmentLength

    return {
      ...item,
      dashArray: `${segmentLength} ${circumference - segmentLength}`,
      dashOffset,
    }
  })

  return (
    <section
  id="tokenomics"
  className="min-h-screen bg-[#001f1b] px-4 py-14 font-['PT_Sans'] text-white sm:px-6 lg:px-8"
>
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center">
        <div className="flex w-full items-center">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          {/* Left side donut chart */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative aspect-square w-full max-w-[420px] sm:max-w-[470px]">
              <svg
                viewBox={`0 0 ${size} ${size}`}
                className="h-full w-full -rotate-[110deg] overflow-visible"
              >
                {/* Background ring */}
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth={strokeWidth}
                />

                {/* Connected donut segments */}
                {chartSegments.map((item) => (
                  <circle
                    key={item.label}
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={item.color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="butt"
                    strokeDasharray={item.dashArray}
                    strokeDashoffset={item.dashOffset}
                  />
                ))}
              </svg>

              {/* Inner circle + cat */}
              <div className="absolute left-1/2 top-1/2 flex aspect-square w-[54%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#050b0d]">
                <img
                  src={catFull}
                  alt="MagicPaw cat"
                  className="w-[72%] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
              TOKENOMICS
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base lg:mx-0">
              The entire MagicPaw ecosystem is powered by the MagicPaw token—a
              magical currency designed to reward our community, fuel
              development, and keep our adventures alive. Every token plays a
              role in creating a fun, engaging, and secure meme token
              experience.
            </p>

            <div className="mx-auto mt-10 max-w-2xl lg:mx-0">
              <h2 className="text-left text-2xl font-normal tracking-tight sm:text-3xl">
                SUPPLY: {totalSupply}
              </h2>

              <div className="mt-6 space-y-5">
                {tokenomicsData.map((item) => (
                  <div key={item.label}>
                    {/* Bar */}
                    <div className="h-3 w-full overflow-hidden rounded-full bg-white/35">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${item.value}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>

                    {/* Label */}
                    <p className="mt-1 text-left text-sm text-white sm:text-base">
                      {item.label}: {item.value}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="w-full px-4 pb-12 sm:px-6 lg:px-8">

        </div>
      </div>
    </section>
  )
}

export default Tokenomics