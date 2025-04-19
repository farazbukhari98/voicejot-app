import Link from "next/link";
import Image from "next/image";

export default function UseCases() {
  const useCases = [
    {
      id: 1,
      title: "Meeting Minutes",
      description: "Record important discussions and decisions during meetings. Get accurate transcriptions to share with team members who couldn't attend.",
      icon: "📝",
      colorClasses: {
        outer: "bg-primary/20",
        middle: "bg-primary/30",
        inner: "bg-primary",
      },
    },
    {
      id: 2,
      title: "Lecture Notes",
      description: "Capture every detail from lectures and classes. Focus on understanding rather than frantically writing notes.",
      icon: "🎓",
      colorClasses: {
        outer: "bg-secondary/20",
        middle: "bg-secondary/30",
        inner: "bg-secondary",
      },
    },
    {
      id: 3,
      title: "On-the-Go Ideas",
      description: "Dictate thoughts, memos, and reminders while commuting or traveling. Never lose a brilliant idea again.",
      icon: "💡",
      colorClasses: {
        outer: "bg-accent/20",
        middle: "bg-accent/30",
        inner: "bg-accent",
      },
    },
    {
      id: 4,
      title: "Interview Transcription",
      description: "Conduct and transcribe interviews effortlessly. Focus on the conversation instead of taking notes.",
      icon: "🎤",
      colorClasses: {
        outer: "bg-primary/20",
        middle: "bg-primary/30",
        inner: "bg-primary",
      },
    },
  ];

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
            <span className="text-2xl font-bold gradient-text">VoiceJot</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-opacity-80 transition-colors">Home</Link>
          <Link href="/use-cases" className="text-primary font-medium">Use Cases</Link>
          <button className="relative px-6 py-2 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 transform font-medium border-2 border-white/30 bg-[#5247eb] overflow-hidden group">
            <span className="relative text-white font-semibold z-10">Get Started</span>
          </button>
        </div>
        <button className="md:hidden text-xl">☰</button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-8 max-h-[calc(100vh-80px)]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Use Cases</span>
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Discover how VoiceJot can transform the way you work, study, and capture ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {useCases.map((useCase) => (
            <div 
              key={useCase.id}
              className="bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all hover:scale-105 hover:bg-foreground/10"
            >
              <div className={`w-16 h-16 rounded-full ${useCase.colorClasses.outer} flex items-center justify-center mb-4`}>
                <div className={`w-12 h-12 rounded-full ${useCase.colorClasses.middle} flex items-center justify-center`}>
                  <div className={`w-8 h-8 rounded-full ${useCase.colorClasses.inner} flex items-center justify-center text-white text-xl`}>
                    {useCase.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
              <p className="text-sm opacity-80">{useCase.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link 
            href="/" 
            className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-full text-lg font-medium transition-all hover:shadow-md hover:scale-105 transform inline-flex items-center"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-8 md:px-16 text-center text-sm opacity-70">
        <p>© {new Date().getFullYear()} VoiceJot. All rights reserved.</p>
      </footer>
    </div>
  );
}
