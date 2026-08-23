import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Hero Section - reduced top spacing */}
        <main className="pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Content Column */}
            <div className="space-y-10">
              {/* Header Block */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-black leading-none tracking-tight whitespace-nowrap w-max">
                  Vincent Jay Peterson
                </h1>
                <p className="text-lg text-gray-600 tracking-[0.2em] uppercase text-center">
                  Otsego City Council
                </p>
              </div>

              {/* Biography */}
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-800">
                <p>
                  Lifelong Otsego resident. Husband. Father. Small-business owner with 25 years of experience building and operating a private security company that employed hundreds of officers.
                </p>
                <p>
                  Former Wright County Sheriff Reserve Explorer and former Otsego EDAAC Commissioner.
                </p>
              </div>

              {/* Campaign Statement */}
              <div className="space-y-6 py-4">
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  I'm running for City Council to protect taxpayers, control spending, and keep Otsego a place where families can still afford to live.
                </p>
              </div>

              {/* Key Message */}
              <div className="space-y-4 py-4">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  No more runaway projects.
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                  No more blank checks.
                </p>
              </div>

              {/* Supporting line */}
              <p className="text-xl md:text-2xl font-medium text-gray-700 pt-2">
                Just practical, long-term budgeting and real accountability.
              </p>

              {/* Campaign Slogan */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-3xl md:text-4xl font-black tracking-tight">
                  Common Sense for Otsego
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="flex lg:justify-start">
              <div className="relative w-full max-w-sm lg:max-w-xs mt-20 lg:mt-40 lg:ml-20">
                {/* Subtle backdrop */}
                <div className="absolute -inset-8 bg-gray-50 rounded-2xl -z-10" />
                {/* Photo Container */}
                <div className="relative pb-[100%] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/vincentjaypeterson.jpg"
                    alt="Vincent Jay Peterson"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer / Disclaimer */}
        <footer className="border-t border-gray-200 py-8">
          <p className="text-sm text-gray-500 text-center">
            Paid for by Vincent Jay Peterson for City Council
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
