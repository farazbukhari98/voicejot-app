import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero-gradient h-screen w-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="VoiceJot Logo" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <h1 className="text-2xl font-bold gradient-text">VoiceJot</h1>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="#features" className="hover:text-opacity-80 transition-colors">Features</Link>
          <Link href="/use-cases" className="hover:text-opacity-80 transition-colors">Use Cases</Link>
          <button className="relative px-6 py-2 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 transform font-medium border-2 border-white/30 bg-[#5247eb] overflow-hidden group">
            <span className="relative text-white font-semibold z-10">Get Started</span>
          </button>
        </div>
        <button className="md:hidden text-xl">☰</button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-8 max-h-[calc(100vh-80px)]">
        {/* Left Column - Hero Text */}
        <div className="md:w-1/2 space-y-6 md:pr-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Turn Your <span className="gradient-text">Voice</span> Into <span className="gradient-text">Text Notes</span>
          </h2>
          <p className="text-lg md:text-xl opacity-80 max-w-xl">
            The simple, modern, and intelligent web app that makes recording audio and getting accurate transcriptions effortless using cutting-edge AI.
          </p>
          <div className="flex justify-center md:justify-start pt-4">
            <button className="relative px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden group border-2 border-white/30 bg-[#5247eb]">
              <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative flex items-center justify-center text-white font-semibold z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Start Recording
              </span>
            </button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
              ✓ AI-Powered Accuracy
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
              ⚡ Instant Transcription
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
              💻📱 Works Everywhere
            </span>
          </div>
        </div>

        {/* Right Column - iPhone App Preview */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
          {/* iPhone Frame */}
          <div className="relative w-full max-w-[300px] aspect-[9/19] bg-black rounded-[40px] shadow-2xl overflow-hidden border-8 border-black">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>
            
            {/* iPhone Screen */}
            <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden rounded-[32px]">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-6 z-10">
                <div className="text-xs text-white font-medium">9:41</div>
                <div className="flex space-x-2">
                  <div className="text-xs text-white">5G</div>
                  <div className="text-xs text-white">100%</div>
                </div>
              </div>
              
              {/* App Content */}
              <div className="pt-12 px-4 flex flex-col h-full">
                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mr-2">
                      <span className="text-white text-xs">VJ</span>
                    </div>
                    <span className="text-white font-bold">VoiceJot</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                    <span className="text-white text-xs">👤</span>
                  </div>
                </div>
                
                {/* Microphone Button */}
                <div className="flex justify-center mb-4">
                  <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 pulse-animation">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </div>
                
                <div className="text-center mb-4">
                  <p className="text-white text-sm">Tap to start recording</p>
                </div>
                
                {/* Recent Transcriptions */}
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-white text-sm font-medium mb-2">Recent Transcriptions</h3>
                  
                  {/* Transcription Items */}
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-white text-xs font-medium">Meeting Notes</h4>
                        <span className="text-white/60 text-[10px]">2m ago</span>
                      </div>
                      <p className="text-white/80 text-xs line-clamp-2">Schedule follow-up with marketing team about Q2 campaign launch. Discuss budget allocation for digital ads.</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-white text-xs font-medium">Project Idea</h4>
                        <span className="text-white/60 text-[10px]">1h ago</span>
                      </div>
                      <p className="text-white/80 text-xs line-clamp-2">New feature concept: integrate calendar sync to automatically tag recordings with meeting context from calendar events.</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-white text-xs font-medium">Lecture Notes</h4>
                        <span className="text-white/60 text-[10px]">Yesterday</span>
                      </div>
                      <p className="text-white/80 text-xs line-clamp-2">Key points from AI ethics lecture: transparency in algorithms, bias mitigation strategies, and regulatory frameworks.</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Navigation */}
                <div className="pt-3 pb-6 flex justify-around">
                  <button className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mb-1">
                      <span className="text-white text-xs">🏠</span>
                    </div>
                    <span className="text-white/60 text-[10px]">Home</span>
                  </button>
                  
                  <button className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mb-1">
                      <span className="text-white text-xs">📝</span>
                    </div>
                    <span className="text-white/60 text-[10px]">Notes</span>
                  </button>
                  
                  <button className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mb-1">
                      <span className="text-white text-xs">⚙️</span>
                    </div>
                    <span className="text-white/60 text-[10px]">Settings</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Home Button/Indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-8 md:px-16 text-center text-sm opacity-70">
        <p>© {new Date().getFullYear()} VoiceJot. All rights reserved.</p>
      </footer>
    </div>
  );
}
