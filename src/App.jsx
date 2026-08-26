import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeInUp 0.45s ease-out both; }
        .fade-in-delay { animation: fadeInUp 0.55s ease-out 0.05s both; }
        .fade-in-delay-2 { animation: fadeInUp 0.55s ease-out 0.1s both; }
      `}</style>

      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">

        {/* Hero Section */}
        <main className="pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Content Column */}
            <div className="space-y-10">

              {/* Header Block - Badge on top, name below */}
              <div className="space-y-7">
                <div className="fade-in">
                  <span className="block w-full px-5 py-2.5 text-xs font-extrabold tracking-widest uppercase text-center text-gray-700 border-2 border-gray-600 rounded">
                    Candidate for Otsego City Council
                  </span>
                </div>
                <div className="fade-in-delay">
                  <h1 className="text-center text-5xl lg:text-6xl font-black leading-none tracking-tight">
                    Vincent "Vinny" Jay Peterson
                  </h1>
                </div>
              </div>

              {/* Photo: mobile inline under header, desktop column on right */}
              <div className="lg:hidden fade-in-delay-2">
                <div className="relative w-full max-w-xs mx-auto">
                  <div className="relative pb-[100%] rounded-[10px] overflow-hidden border border-gray-200">
                    <img
                      src="./vincentjaypeterson.jpg"
                      alt="Vincent Jay Peterson"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="fade-in-delay-2 space-y-5 text-base md:text-lg leading-relaxed text-gray-800 max-w-prose">
                <p>Hello, fellow citizens of Otsego.</p>
                <p>
                  I am a candidate for the Otsego City Council. My family moved to Otsego in 1972, and I
                  graduated from St. Michael-Albertville (STMA) High School. When I turned 16 and got my
                  driver's license, I joined the Wright County Sheriff Explorers. We competed at the MN
                  State Explorer competition four times and took home trophies all four years, and in 1989
                  I was elected Captain of the Explorers.
                </p>
                <p>
                  After high school I earned my Associate of Science degree from North Hennepin Community
                  College, majoring in Law Enforcement and minoring in Political Science. In college I was
                  elected President of the Law Enforcement Student Organization (LESO) and also served as
                  the LESO student council representative.
                </p>
                <p>
                  While I was in college I worked as a security officer — and rather than become a Deputy
                  Sheriff, I bought the security company I was working for. I owned and operated my private
                  detective and uniformed security guard company until 2020, when I retired because of
                  COVID. During my career I bought out four other detective/security companies and employed
                  hundreds of detectives and security guards. I have negotiated with the CEOs and upper
                  management of many well-known companies in the metro area, and I was a bodyguard for
                  Hollywood movie stars like Christian Slater, Woody Harrelson, Christopher Lloyd,
                  Marisa Tomei, Rosie Perez, Elisabeth Shue, and Gladys Knight.
                </p>
                <p>
                  In 1997 I was appointed Commissioner for the City of Otsego (EDAAC), on which I served
                  for many years. Currently I am working part-time at the Albertville/Otsego compost site.
                </p>
                <p>
                  The reason I am campaigning for Otsego City Council is that two seats are open, and I
                  firmly believe we need to put a stop to the out-of-control and unnecessary spending that
                  the big spenders on the City Council are doing. My motto: elect me to help put a stop to
                  the unnecessary spending. I know we are a growing city and a lot of spending needs to
                  happen — but in my opinion there is way too much unnecessary spending. For example, a new
                  City Hall is out of the question.
                </p>
                <p>
                  I hope to see many of you out and about while I am campaigning. If anyone has any
                  questions, please contact me anytime. My email is{' '}
                  <a
                    href="mailto:ranger770@aol.com"
                    className="underline decoration-gray-400 underline-offset-4 hover:text-black"
                  >
                    ranger770@aol.com
                  </a>{' '}
                  and my phone/text number is{' '}
                  <a
                    href="tel:+16127016991"
                    className="underline decoration-gray-400 underline-offset-4 hover:text-black"
                  >
                    612-701-6991
                  </a>.
                </p>
                <div className="pt-2 space-y-1 text-xl md:text-2xl font-bold tracking-tight text-black">
                  <p>In God we trust,</p>
                  <p>Vincent Jay Peterson</p>
                </div>
              </div>

              {/* Campaign Statement */}
              <div className="fade-in-delay space-y-5 py-2">
                <p className="text-base md:text-lg font-semibold text-gray-800 max-w-prose">
                  Bring common sense back to the Otsego City Council.
                </p>
                <div className="border-t border-gray-300 my-4"></div>
                <p className="text-base md:text-lg font-semibold text-gray-800 max-w-prose">
                  Keep Otsego a place where families can still afford to live.
                </p>
              </div>

              {/* Key Message */}
              <div className="fade-in-delay-2 space-y-3 py-2">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  No more runaway projects.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  No more blank checks.
                </p>
              </div>

              {/* Campaign Slogan */}
              <div className="fade-in-delay pt-10 border-t border-gray-200">
                <p className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight">
                  Common Sense for Otsego
                </p>
              </div>

              {/* Yard Sign - mobile only */}
              <div className="lg:hidden fade-in-delay-2 mt-6">
                <div className="w-full max-w-[360px] mx-auto">
                  <img
                    src="./vince-yard-sign.png"
                    alt="Vincent Jay Peterson yard sign"
                    className="w-full h-auto rounded-[10px] border border-gray-200"
                  />
                </div>
              </div>

            </div>

            {/* Image Column - desktop only, right column */}
            <div className="hidden lg:block lg:col-start-2 relative fade-in-delay-2">
              <div className="absolute -inset-6 bg-gray-50 rounded-2xl -z-10 border border-gray-100" />
              <div className="w-full max-w-sm">
                <div className="relative pb-[100%] rounded-[10px] overflow-hidden border border-gray-200">
                  <img
                    src="./vincentjaypeterson.jpg"
                    alt="Vincent Jay Peterson"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Yard Sign - desktop only, nested inside photo column */}
              <div className="mt-12 fade-in-delay-2">
                <div className="w-full max-w-[360px]">
                  <img
                    src="./vince-yard-sign.png"
                    alt="Vincent Jay Peterson yard sign"
                    className="w-full h-auto rounded-[10px] border border-gray-200"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* Watermark - contained so it can't cause horizontal overflow */}
          <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 -z-10 pointer-events-none overflow-hidden max-w-full">
            <span className="block text-[60px] md:text-[100px] lg:text-[140px] font-black text-gray-50 opacity-5 leading-none tracking-tight">
              Common Sense
            </span>
          </div>

        </main>

        {/* Footer / Disclaimer */}
        <footer className="fade-in border-t border-gray-200 py-8">
          <p className="text-sm text-gray-500 text-center">
            Paid for by Vincent Jay Peterson for City Council
          </p>
        </footer>

      </div>
    </div>
  )
}

export default App
