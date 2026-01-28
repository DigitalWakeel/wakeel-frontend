import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Digital Wakeel</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#team" className="text-gray-700 hover:text-gray-900 transition-colors">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Pakistan's First Legal Tech AI Platform
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Legal Research
              <span className="block text-blue-600 mt-2">For Lawyers & Law Students</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Access comprehensive statutes, case laws, and legal research tools powered by AI. 
              Streamline your research workflow and connect with clients through our integrated marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Legal Research Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI-driven research tools for lawyers and law students, plus a marketplace to connect with clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Primary: Statutes Research */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Statutes Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Instantly search and access comprehensive legal statutes and case laws. AI-powered search makes finding relevant legal references faster than ever.
              </p>
            </div>

            {/* Feature 2 - Primary: Case Research */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Case Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep dive into case laws with intelligent search and analysis. Perfect for lawyers and law students preparing arguments and studying precedents.
              </p>
            </div>

            {/* Feature 3 - Primary: Document Analysis */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-7 4h7M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Document Review</h3>
              <p className="text-gray-600 leading-relaxed">
                Summarize and analyze legal documents with AI precision. Extract key insights and save hours of manual review time.
              </p>
            </div>

            {/* Feature 4 - Primary: Statutes Library */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive Statutes Library</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse curated collections of essential statutes and case laws that shape the Pakistani legal system. Organized and easily accessible.
              </p>
            </div>

            {/* Feature 5 - Secondary: Lawyer Marketplace */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lawyer Marketplace</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with clients seeking legal assistance. Our marketplace helps lawyers grow their practice while helping people find trusted legal professionals.
              </p>
            </div>

            {/* Feature 6 - Secondary: Case Management */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Track and manage your legal cases with AI-powered insights. Get personalized recommendations and streamline your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Digital Wakeel Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful research tools for legal professionals, plus a marketplace to connect with clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Research Platform</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access comprehensive statutes, case laws, and legal documents with AI-powered search. 
                    Perfect for lawyers and law students conducting research, preparing cases, and studying precedents.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Analysis</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Use AI to summarize documents, extract key insights, and get intelligent recommendations. 
                    Save hours of manual research and analysis time.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect with Clients</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Grow your practice through our marketplace. Connect with people seeking legal assistance 
                    and build lasting client relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">⚖️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Practice</h3>
              <p className="text-gray-700 text-lg">
                Join thousands of legal professionals who are already using Digital Wakeel to enhance their practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Digital Wakeel?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for the needs of legal professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tailored Solutions</h3>
              <p className="text-gray-600">Designed specifically for the needs of legal professionals</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Collaboration</h3>
              <p className="text-gray-600">Simplifies collaboration between teams and clients</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <div className="text-3xl font-bold text-green-600 mb-2">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Efficiency</h3>
              <p className="text-gray-600">Automation and organization tools to boost productivity</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <div className="text-3xl font-bold text-orange-600 mb-2">04</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Centralized Platform</h3>
              <p className="text-gray-600">All your practice management needs in one place</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Digital Wakeel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Digital Wakeel is Pakistan's first AI-powered legal research platform for lawyers and law students. 
              Our primary focus is providing comprehensive research tools for statutes and case laws, while also 
              offering a marketplace to connect legal professionals with clients seeking assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower lawyers and law students with AI-powered research tools that make legal research faster, 
                more accurate, and more accessible. We're revolutionizing how legal professionals conduct research 
                and prepare cases.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading legal research platform in Pakistan, enabling every lawyer and law student 
                to access comprehensive legal information instantly. We're building the future of legal research 
                and practice management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate founders behind Digital Wakeel, combining technology expertise with legal excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Shahab Uddin Irfan */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/shahab.png"
                    alt="Shahab Uddin Irfan"
                    width={192}
                    height={192}
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Shahab Uddin Irfan</h3>
                <p className="text-lg font-semibold text-blue-600 mb-4">Founder & CTO</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Serial entrepreneur and technology architect with a proven track record of building scalable platforms 
                  that transform industries. Previously architected an end-to-end investment platform serving retail investors 
                  across the U.S., and built core infrastructure for a Swedish payment platform powering 25,000+ users. 
                  Now leading Digital Wakeel's mission to revolutionize legal services in Pakistan through AI-powered innovation.
                </p>
                <div className="flex gap-4 mt-4">
                  <a 
                    href="https://github.com/shahab0105" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/shahab0694" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Razia Sultana */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/razia.png"
                    alt="Razia Sultana"
                    width={192}
                    height={192}
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Razia Sultana</h3>
                <p className="text-lg font-semibold text-purple-600 mb-4">Co-Founder & Legal Director</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Law graduate from the University of London with expertise in litigation, corporate legal services, 
                  family law, and criminal prosecution. Currently serving as Intake Manager at Tariq Law PC, bringing 
                  extensive experience in legal research, client consultation, and case management to Digital Wakeel.
                </p>
                <div className="flex gap-4 mt-4">
                  <a 
                    href="https://www.linkedin.com/in/razia-sultana-9b44631b8/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
              <p className="text-xl text-gray-600">
              Hear from lawyers, law students, and clients who use Digital Wakeel for research and legal services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The AI-powered statutes research has transformed how I conduct legal research. Finding relevant 
                case laws and statutes is now instant. Essential for any practicing lawyer."
              </p>
              <div className="font-semibold text-gray-900">Practicing Lawyer</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "As a law student, Digital Wakeel's research tools have been invaluable. The case law database 
                and AI analysis help me prepare for exams and moot court competitions much more efficiently."
              </p>
              <div className="font-semibold text-gray-900">Law Student</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Digital Wakeel's research platform has become essential for our firm. The comprehensive statutes 
                library and AI document review save us countless hours. Plus, the marketplace helps us connect with new clients."
              </p>
              <div className="font-semibold text-gray-900">Law Firm Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Transform Your Legal Practice?
          </h2>
              <p className="text-xl text-blue-100 mb-8">
            Discover how Digital Wakeel can transform your legal research workflow and help you serve clients better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Schedule a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Wakeel</h3>
              <p className="text-gray-400">
                Pakistan's first AI-powered legal research platform for lawyers and law students, transforming how legal research is conducted.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@digitalwakeel.com</li>
                <li className="text-gray-400">Phone: +92 XXX XXXXXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Digital Wakeel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
