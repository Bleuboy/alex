import { AnchorHTMLAttributes, useEffect, useRef, useState } from 'react';

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
    <div id={id} className="flex flex-col justify-center min-h-screen pt-24">
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

const LINKS = [
  {
    href: '#use-case',
    title: 'Use Case',
  },
  {
    href: '#our-tool',
    title: 'Our Tool',
  },
  {
    href: '#technology',
    title: 'Technology',
  },
  {
    href: '#comparison',
    title: 'Comparison',
  },
  {
    href: '#data-privacy',
    title: 'Data Privacy',
  },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef(null);

  const handleClick = (event: MouseEvent) => {
    setIsOpen((state) => !state);

    if (event.target instanceof HTMLElement) {
      if (event.target.tagName === 'A') {
        const href = event.target.getAttribute('href');

        if (href) {
          window.location.href = href;
        }
      }
    }
  };

  useEffect(() => {
    // Add the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      // Remove the event listener when the dropdown is closed
      document.removeEventListener('mousedown', handleClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpen]);

  return (
    <div
      className="px-4 py-4 flex justify-between items-center sticky top-0 bg-white bg-opacity-80 backdrop-blur-md z-10"
      ref={node}
    >
      <div className="flex items-center gap-4">
        <a href="#">
          <img src="/alex-logo.png" className="w-12 h-12" />
        </a>
        <div className="hidden md:flex gap-4">
          {LINKS.map(({ href, title }) => (
            <AlexLink href={href}>{title}</AlexLink>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="font-semibold"
            onClick={() => setIsOpen((state) => !state)}
          >
            Menu
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {LINKS.map(({ href, title }) => (
                  <AlexLink
                    href={href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {title}
                  </AlexLink>
                ))}
              </div>
            </div>
          )}
        </div>
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
  return (
    <div className="flex flex-col justify-center min-h-screen gap-12">
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

// create 4 points why our technology is the best for this use case
const TECHNOLOGY: Item[] = [
  {
    title:
      'Judicially tailored LLM for nuanced brief analysis with transparent results',
  },
  { title: 'Encrypted data handling with privacy-centric-processing' },
  { title: 'Automated case registration' },
  { title: 'Drag and drop application powered by AI' },
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

const UseCaseSection = () => {
  return (
    <div id="use-case" className="flex flex-col justify-center min-h-screen">
      <h2 className="text-3xl font-semibold text-center pb-2">Use Case</h2>
      <p className="text-center pb-16">
        ALex is a tool that helps judges make better decisions. It is designed
        to be easy to use and provides you with reliable results.
      </p>
      <img
        className="w-full sm:w-1/2 mx-auto"
        src="/use-case.png"
        alt="Use Case"
      />
    </div>
  );
};

const CompetitorsSection = () => {
  return (
    <div id="comparison" className="flex flex-col justify-center min-h-screen">
      <h2 className="text-3xl font-semibold text-center pb-2">Comparison</h2>
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
    <div className="mx-auto max-w-7xl">
      <NavigationBar />
      <div className="px-4 py-4 mx-auto flex flex-col gap-16">
        <HeaderSection />
        <UseCaseSection />
        <InfoSection
          id="our-tool"
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
          id="technology"
          title="Our Technology"
          description="TODO"
          items={TECHNOLOGY}
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
    </div>
  );
};

export default Home;
