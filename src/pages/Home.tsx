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
        <div className="p-4 bg-white bg-opacity-70 backdrop-blur-md rounded">
          <h3 className="text-xl font-semibold text-center pb-2">{title}</h3>
          <p className="description text-center">{description}</p>
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
      <p className="description text-center pb-16">{description}</p>
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
    <div className="flex flex-col justify-center min-h-screen gap-12 max-w-[600px]">
      <h1 className="text-6xl font-semibold">
        Empower Your Judgements with AI
      </h1>
      <p className="description">
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
      'Gain a structured overview of case facts with ALex, ensuring consistent and reliable insights, allowing you to focus on essential aspects for better decisions.',
  },
  {
    title: 'Drag & Drop Application powered by AI',
    description:
      'Experience ease of use and reliable results with ALex, enhancing decision accuracy and seamlessly integrating into your existing workflow for improved focus on complex cases.',
  },
  {
    title: 'AI-Driven Evidence Check and Compilation',
    description:
      'Integrate ALex effortlessly into your workflow, benefitting from automated case registration, consistent insights, enhanced decision accuracy, and improved focus on complex cases.',
  },
  {
    title: 'Automated Case Registration',
    description:
      'Enjoy the convenience of automated case registration with ALex, streamlining your workflow and providing consistent, reliable insights for improved decision-making.',
  },
];

const TECHNOLOGY: Item[] = [
  {
    title:
      'Judicially tailored LLM for nuanced brief analysis with transparent results',
    description:
      'ALex incorporates a Judicially tailored Language Model (LLM) that refines legal brief analysis, ensuring nuanced understanding and providing transparent, insightful results.',
  },
  {
    title: 'Encrypted data handling with privacy-centric-processing',
    description:
      'Our technology prioritizes data security through encrypted handling, employing privacy-centric processing to safeguard sensitive legal information.',
  },
  {
    title: 'Automated case registration',
    description:
      'Experience unparalleled efficiency with ALex’s automated case registration, streamlining the process and eliminating manual hassles for judges.',
  },
  {
    title: 'Drag and drop application powered by AI',
    description:
      'ALex introduces a user-friendly drag-and-drop application, seamlessly powered by AI, to enhance user experience and simplify the navigation of legal documents.',
  },
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
    <div
      id="use-case"
      className="flex flex-col justify-center min-h-screen pt-24"
    >
      <h2 className="text-3xl font-semibold text-center pb-2">
        Empower Your Legal Insight: ALex - Transforming Chaos into Clarity
      </h2>
      <p className="description text-center pb-16">
        Judges, grappling with the chaotic structure and inflated text of legal
        briefs while under time constraints, encounter a critical need for
        enhanced structure to understand the facts of each case thoroughly.
        Enter ALex, our AI judge assistant—an innovative solution designed to
        streamline the comprehension process. With ALex, judges experience a
        transformative use case where complex legal documents are deciphered
        intelligently, ensuring clarity, efficiency, and a deeper understanding
        of every case within constrained timelines.
      </p>
      <div className="flex justify-around">
        <img
          className="w-1/4 sm:w-1/4 mx-4"
          src="/assistant.png"
          alt="Assistant"
        />
        <img className="w-1/4 sm:w-1/4 mx-4" src="/brief.png" alt="Brief" />
      </div>
    </div>
  );
};

const CompetitorsSection = () => {
  return (
    <div
      id="comparison"
      className="flex flex-col justify-center min-h-screen pt-24"
    >
      <h2 className="text-3xl font-semibold text-center pb-2">
        Unleashing Precision in Legal Analysis
      </h2>
      <p className="text-center pb-16">
        ALex, where the coolest automations meet unparalleled ease of use, all
        powered by AI innovation. Elevate your legal insights effortlessly as
        ALex transforms complex cases into clear, concise analyses. With ALex,
        experience the pinnacle of legal assistance—effortless, powerful, and
        undeniably cool.
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
          title="Revolutionary Insights, Seamless Solutions"
          description="Empower your legal journey with ALex: Explore cutting-edge features tailored for revolutionary insights and seamless solutions. From AI-enhanced factual analysis to intuitive drag-and-drop functionality, ALex transforms legal complexities into clarity. Experience consistent insights, enhanced decision accuracy, seamless workflow integration, and improved focus on intricate cases. Join the legal revolution with ALex – the future of judicial excellence."
          items={FEATURES}
        />
        <InfoSection
          id="technology"
          title="AI at Your Fingertips: Seamless Power in Every Click"
          description="Dive into the future of legal technology with ALex's cutting-edge features and a user interface that defines cool and clean. Our AI-driven tool not only simplifies the complex but redefines the user experience, making legal analysis intuitive and efficient. Explore the synergy of the coolest automations and a UI designed for clarity, ensuring that every interaction with ALex is a testament to the seamless power of AI innovation."
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
