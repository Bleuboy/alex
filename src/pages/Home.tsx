import { Link } from 'react-router-dom';

import Button from '../components/Button';

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

const FeaturesSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Our Features</h2>
      <ul className="list-disc list-inside">
        <li>AI-Enhanced Factual Analysis: Consistent and Reliable Insights</li>
        <li>
          Drag & Drop Application powered by AI: Enhanced Decision Accuracy
        </li>
        <li>
          AI-Driven Evidence Check and Compilation: Seamless Workflow
          Integration
        </li>
        <li>Improved Focus on Complex Cases: Automated Case Registration</li>
      </ul>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Your Benefits</h2>
      <ul className="list-disc list-inside">
        <li>Consistent and Reliable Insights</li>
        <li>Enhanced Decision Accuracy</li>
        <li>Seamless Workflow Integration</li>
        <li>Improved Focus on Complex Cases</li>
      </ul>
    </div>
  );
};

const USPsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">
        Our Unique Selling Propositions
      </h2>
      <ul className="list-disc list-inside">
        <li>
          Familiar interface that structures information according to judicial
          best practices
        </li>
        <li>
          Judicially tailored LLM for nuanced brief analysis with transparent
          results
        </li>
        <li>Encrypted data handling with privacy-centric-processing</li>
      </ul>
    </div>
  );
};

const CompetitorsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Competitors</h2>
      <p className="text-center">
        ALex outperforms the competition in terms of automation and
        user-friendliness.
      </p>
      <ul className="list-disc list-inside">
        <li>Input Modules Justiz by paradatec</li>
        <li>Pen & Paper</li>
        <li>Codefy</li>
        <li>University Regensburg</li>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <HeaderSection />
      <FeaturesSection />
      <BenefitsSection />
      <USPsSection />
      <CompetitorsSection />
    </div>
  );
};

export default Home;
