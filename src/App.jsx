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
                <p>Hello, fellow citizens of Otsego!</p>
                <p>
                  My name is Vincent J. Peterson, and I am proud to announce my candidacy for Otsego
                  City Council.
                </p>
                <p>
                  My family moved to Otsego in 1972, so I have deep roots in this community. I graduated
                  from St. Michael-Albertville High School and, at the age of 16, joined the Wright County
                  Sheriff&rsquo;s Explorers after obtaining my driver&rsquo;s license. In 1989, I was
                  honored to be elected Captain of the Explorers.
                </p>
                <p>
                  After high school, I attended North Hennepin Community College, where I earned an
                  Associate of Science degree, majoring in Law Enforcement and minoring in Political
                  Science. I also graduated from the Minnesota Law Enforcement Training Center and
                  successfully passed the Minnesota POST Board examination.
                </p>
                <p>
                  While attending college, I worked as a security officer. Rather than pursue a career as
                  a deputy sheriff, I decided to take an entrepreneurial path and purchased the security
                  company I was working for. I went on to own and operate my private detective and
                  uniformed security company until 2020.
                </p>
                <p>
                  Over the course of my career, I acquired four additional detective and security companies
                  and employed hundreds of detectives and security officers. I negotiated with CEOs and
                  upper management of many well-known companies throughout the metropolitan area and had
                  the unique opportunity to provide security and personal protection for numerous Hollywood
                  stars, including Christian Slater, Woody Harrelson, Christopher Lloyd, Marisa Tomei, Rosie
                  Perez, Elisabeth Shue, and Gladys Knight.
                </p>
                <p>
                  My commitment to Otsego goes beyond my professional career. In 1997, I was appointed to
                  serve as a commissioner for the City of Otsego&rsquo;s EDAAC, where I served for many
                  years. While in college, I was elected President of the Law Enforcement Student
                  Organization (LESO) and also served as the LESO student council representative.
                </p>
                <p>
                  Today, I continue to stay connected to our community by working seasonally as a part-time
                  attendant at the Albertville/Otsego compost site.
                </p>

                <h3 className="pt-4 text-xl md:text-2xl font-black tracking-tight text-black">
                  Why am I running for Otsego City Council?
                </h3>
                <p>
                  There are two seats open, and I believe Otsego needs a strong voice for responsible
                  spending, accountability, and common sense.
                </p>
                <p>
                  Otsego is a growing community, and I understand that growth requires investment. However,
                  I also believe we have a responsibility to carefully evaluate how taxpayer dollars are
                  spent and distinguish between what we need and what we simply want.
                </p>
                <p>My motto is simple:</p>
                <blockquote className="border-l-4 border-gray-300 pl-5 my-2 text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-black leading-tight text-center">
                  &ldquo;Bring Common Sense Back to the Otsego City Council.&rdquo;
                </blockquote>
                <p>
                  For example, I do not support moving forward with an unnecessary new City Hall when I
                  believe there are more responsible ways to prioritize our resources. I want to see our
                  tax dollars used wisely and decisions made with the long-term interests of Otsego
                  residents in mind.
                </p>
                <p>
                  I would be honored to earn your vote and the opportunity to serve the community I have
                  called home for so many years.
                </p>
                <p>
                  I hope to see many of you out and about as I campaign. If you have questions, concerns, or
                  simply want to talk about the future of Otsego, please don&rsquo;t hesitate to reach
                  out. I want to hear from you.
                </p>
                <p className="space-y-1 text-base md:text-lg">
                  <span className="block">
                    Email:{' '}
                    <a
                      href="mailto:ranger770@aol.com"
                      className="underline decoration-gray-400 underline-offset-4 hover:text-black"
                    >
                      ranger770@aol.com
                    </a>
                  </span>
                  <span className="block">
                    Call or Text:{' '}
                    <a
                      href="tel:+16127016991"
                      className="underline decoration-gray-400 underline-offset-4 hover:text-black"
                    >
                      612-701-6991
                    </a>
                  </span>
                </p>
                <div className="pt-4 space-y-1 text-xl md:text-2xl font-bold tracking-tight text-black">
                  <p>In God We Trust,</p>
                  <p>Vincent J. Peterson</p>
                </div>
              </div>

              {/* Campaign Slogan */}
              <div className="fade-in-delay pt-6 border-t border-gray-200">
                <p className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-center">
                  &ldquo;Bring Common Sense Back to the Otsego City Council.&rdquo;
                </p>
              </div>

              {/* Yard Sign - mobile only */}
              <div className="lg:hidden fade-in-delay-2 mt-6">
                <div className="w-full max-w-[360px] mx-auto">
                  <picture>
                    <source srcSet="./vince-yard-sign-720.webp" type="image/webp" />
                    <img
                      src="./vince-yard-sign-720.jpg"
                      alt="Vincent Jay Peterson yard sign"
                      className="w-full h-auto rounded-[10px] border border-gray-200"
                    />
                  </picture>
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
                  <picture>
                    <source srcSet="./vince-yard-sign-720.webp" type="image/webp" />
                    <img
                      src="./vince-yard-sign-720.jpg"
                      alt="Vincent Jay Peterson yard sign"
                      className="w-full h-auto rounded-[10px] border border-gray-200"
                    />
                  </picture>
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