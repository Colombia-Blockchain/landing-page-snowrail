import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import FlowDiagram from '../components/FlowDiagram';
import ComparisonTable from '../components/ComparisonTable';
import Pricing from '../components/Pricing';
import TechMarquee from '../components/TechMarquee';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ProblemSolution />
      <FlowDiagram />
      <ComparisonTable />
      <Pricing />
    </>
  );
};

export default LandingPage;

