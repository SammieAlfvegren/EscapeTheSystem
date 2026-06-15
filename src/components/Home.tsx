function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center bg-zinc-900/80 border border-zinc-800 rounded-2xl p-10 shadow-2xl">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
          AI Research Facility
        </p>
        <h1 className="text-5xl font-bold mb-6 pb-2 leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Project NEXUS
        </h1>
        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
          You are trapped inside a derelict AI research facility.
          The system has entered lockdown and every exit has been sealed.
          To survive and escape, you must explore the facility, solve
          puzzles, and uncover the secrets hidden within Project NEXUS.
        </p>
        <div className="border border-cyan-500/30 bg-cyan-500/10 rounded-xl p-4">
          <p className="text-cyan-300 font-medium">
            Begin your journey by entering the Server Room.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;