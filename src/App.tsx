import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import FlowDiagram from './components/FlowDiagram';
import ComparisonTable from './components/ComparisonTable';
import Pricing from './components/Pricing';
import TechMarquee from './components/TechMarquee';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden selection:bg-snow-red selection:text-white">
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
        {/* Aurora Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-snow-red/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-electric-blue/15 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <ProblemSolution />
          <FlowDiagram />
          <ComparisonTable />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
