import { Link } from 'react-router-dom';

import Button from '../components/Button';

// GridView which takes a list of strings and renders them in a flexible grid
type GridViewProps = {
  items: string[];
};

const GridView = ({ items }: GridViewProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div className="bg-gray-200 p-4">{item}</div>
      ))}
    </div>
  );
};

const HeaderSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Welcome to ALex - Your AI Assistant
      </h1>
      <h2 className="text-3xl font-semibold text-center">
        Empower Your Judgements with AI
      </h2>
      <p className="text-center">
        Judges often struggle with chaotic structure, inflated text, and limited
        time per case. ALex is here to help increase the structure of your
        briefs and improve your understanding of the facts of the case.
      </p>
      <Link to="/upload">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

const FEATURES = [
  'AI-Enhanced Factual Analysis: Consistent and Reliable Insights',
  'Drag & Drop Application powered by AI: Enhanced Decision Accuracy',
  'AI-Driven Evidence Check and Compilation: Seamless Workflow Integration',
  'Improved Focus on Complex Cases: Automated Case Registration',
];

const FeaturesSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Our Features</h2>
      <GridView items={FEATURES} />
    </div>
  );
};

const BENEFITS = [
  'Consistent and Reliable Insights',
  'Enhanced Decision Accuracy',
  'Seamless Workflow Integration',
  'Improved Focus on Complex Cases',
];

const BenefitsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Your Benefits</h2>
      <GridView items={BENEFITS} />
    </div>
  );
};

const USPS = [
  'Familiar interface that structures information according to judicial best practices',
  'Judicially tailored LLM for nuanced brief analysis with transparent results',
  'Encrypted data handling with privacy-centric-processing',
];

const USPsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">
        Our Unique Selling Propositions
      </h2>
      <GridView items={USPS} />
    </div>
  );
};

const COMPETITORS = [
  'Input Modules Justiz by paradatec',
  'Pen & Paper',
  'Codefy',
  'University Regensburg',
];

const CompetitorsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Competitors</h2>
      <p className="text-center">
        ALex outperforms the competition in terms of automation and
        user-friendliness.
      </p>
      <GridView items={COMPETITORS} />
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full h-full flex-grow flex flex-col gap-4">
      <header className="flex flex-row items-center">
        <div></div>
      </header>
      <HeaderSection />
      <FeaturesSection />
      <BenefitsSection />
      <USPsSection />
      <CompetitorsSection />
    </div>
  );
};

export default Home;
