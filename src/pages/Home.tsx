import { AnchorHTMLAttributes } from 'react';

import { Link } from 'react-router-dom';

import Button from '../components/Button';

interface Item {
  title: string;
  description?: string;
}

type GridViewProps = {
  items: Item[];
};

const GridView = ({ items }: GridViewProps) => {
  const colsClass = `grid-cols-${items.length <= 4 ? 2 : 3}`;

  return (
    <div className={`grid ${colsClass} gap-8`}>
      {items.map(({ title, description }) => (
        <div className="bg-gray-200 p-4">
          <h3 className="text-xl font-semibold text-center">{title}</h3>
          <p className="text-center">{description}</p>
        </div>
      ))}
    </div>
  );
};

type InfoSectionProps = {
  id: string;
  title: string;
  description: string;
  items: Item[];
};

const InfoSection = ({ id, title, description, items }: InfoSectionProps) => {
  return (
    <div id={id} className="flex flex-col justify-center min-h-screen">
      <h2 className="text-3xl font-semibold text-center pb-2">{title}</h2>
      <p className="text-center pb-16">{description}</p>
      <GridView items={items} />
    </div>
  );
};

type AlexLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const AlexLink = ({ className, children, ...props }: AlexLinkProps) => {
  return (
    <a
      className={
        'no-underline font-semibold transition duration-200 ease-in-out hover:underline' +
        (className ? ' ' + className : '')
      }
      {...props}
    >
      {children}
    </a>
  );
};

const NavbarSection = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src="/alex-logo.png" className="w-12 h-12" />
        {/* Add links to every section of this page, with automatic scrolling */}
        <AlexLink href="#features">Features</AlexLink>
        <AlexLink href="#benefits">Benefits</AlexLink>
        <AlexLink href="#usps">USPs</AlexLink>
        <AlexLink href="#competitors">Competitors</AlexLink>
        <AlexLink href="#data-privacy">Data Privacy</AlexLink>
      </div>
      <div>
        <Link to="/upload">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

const HeaderSection = () => {
  // max-width: 600px;
  return (
    <div
      className="flex flex-col gap-6"
      style={{
        justifyContent: 'center',
        maxWidth: 600,
        minHeight: 'calc(100vh - 80px)',
      }}
    >
      <h1 className="text-6xl font-semibold">
        Empower Your Judgements with AI
      </h1>
      <p>
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

const FEATURES: Item[] = [
  {
    title: 'AI-Enhanced Factual Analysis',
    description:
      'ALex provides you with a structured overview of the facts of the case. This allows you to focus on the most important aspects of the case and make better decisions.',
  },
  {
    title: 'Drag & Drop Application powered by AI',
    description: 'ALex is easy to use and provides you with reliable results.',
  },
  {
    title: 'AI-Driven Evidence Check and Compilation',
    description:
      'ALex is designed to fit into your existing workflow. It can be used as a standalone application or integrated into your existing software.',
  },
  {
    title: 'Automated Case Registration',
    description: 'ALex can automatically register your cases.',
  },
];

const BENEFITS: Item[] = [
  { title: 'Consistent and Reliable Insights', description: '' },
  { title: 'Enhanced Decision Accuracy', description: '' },
  { title: 'Seamless Workflow Integration', description: '' },
  { title: 'Improved Focus on Complex Cases', description: '' },
];

const USPS: Item[] = [
  {
    title:
      'Familiar interface that structures information according to judicial best practices',
  },
  {
    title:
      'Judicially tailored LLM for nuanced brief analysis with transparent results',
  },
  { title: 'Encrypted data handling with privacy-centric-processing' },
];

const DATA_PRIVACY: Item[] = [
  {
    title: 'Data Encryption',
    description:
      'We encrypt your data using the latest encryption standards. This ensures that your data is protected from unauthorized access.',
  },
  {
    title: 'Data Integrity',
    description:
      'We ensure that your data is not altered in any way. This ensures that your data is not altered in any way.',
  },
  {
    title: 'Data Availability',
    description:
      'We ensure that your data is available when you need it. This ensures that your data is available when you need it.',
  },
];

const CompetitorsSection = () => {
  return (
    <div id="competitors" className="flex flex-col justify-center min-h-screen">
      <h2 className="text-3xl font-semibold text-center pb-2">Competitors</h2>
      <p className="text-center pb-16">
        ALex outperforms the competition in terms of automation and
        user-friendliness.
      </p>
      <img
        className="w-full sm:w-1/2 mx-auto"
        src="/competitors.png"
        alt="Competitors"
      />
    </div>
  );
};

const Home = () => {
  return (
    <div className="container px-4 py-4 mx-auto max-w-7xl h-full flex flex-col gap-16">
      <NavbarSection />
      <HeaderSection />
      <InfoSection
        id="features"
        title="Tailor-made features"
        description="Unleash the Power of ALex: Explore Our Cutting-Edge Features"
        items={FEATURES}
      />
      <InfoSection
        id="benefits"
        title="Your Benefits"
        description="TODO"
        items={BENEFITS}
      />
      <InfoSection
        id="usps"
        title="Our Unique Selling Propositions"
        description="TODO"
        items={USPS}
      />
      <CompetitorsSection />
      <InfoSection
        id="data-privacy"
        title="Your Privacy Matters: Our Commitment to Data Security"
        description="At Alex, safeguarding your data is our utmost priority. We are dedicated
        to ensuring the confidentiality, integrity, and availability of your
        information. Our commitment to data protection is unwavering, and we
        adhere to stringent measures to maintain your privacy."
        items={DATA_PRIVACY}
      />
    </div>
  );
};

export default Home;
