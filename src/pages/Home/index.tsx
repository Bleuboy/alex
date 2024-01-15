import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { DATA_PRIVACY, FEATURES, TECHNOLOGY } from './informationData';
import { InfoSection } from './InfoSection';
import { NavigationBar } from './NavigationBar';

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
      <div className="flex gap-4">
        {import.meta.env.VITE_APP_IS_INTERNAL === 'true' && (
          <Link to="/upload">
            <Button>Get Started</Button>
          </Link>
        )}
        <Link to="/demo-video" target="_blank">
          <Button color="secondary">Watch Video</Button>
        </Link>
      </div>
    </div>
  );
};

const UseCaseSection = () => {
  return (
    <div
      id="use-case"
      className="flex flex-col justify-center min-h-screen pt-24"
    >
      <h2 className="text-3xl font-semibold text-center pb-4">
        Empower Your Legal Insight: ALex - Transforming Chaos into Clarity
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <p className="description text-center">
          Judges, grappling with the chaotic structure and inflated text of
          legal briefs while under time constraints, encounter a critical need
          for enhanced structure to understand the facts of each case
          thoroughly. Enter ALex, our AI judge assistant—an innovative solution
          designed to streamline the comprehension process. With ALex, judges
          experience a transformative use case where complex legal documents are
          deciphered intelligently, ensuring clarity, efficiency, and a deeper
          understanding of every case within constrained timelines.
        </p>
        <img className="w-1/2 sm:w-1/4" src="/brief.png" alt="Brief" />
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
      <h2 className="text-3xl font-semibold text-center pb-4">
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

const AboutUsSection = () => {
  return (
    <div id="about-us" className="flex flex-col justify-center min-h-screen">
      <h2 className="text-3xl font-semibold text-center pb-8">
        About Us: The Future of Judicial Excellence
      </h2>
      <div className="flex flex-col md:flex-row justify-between pb-16 gap-4">
        <p className="description text-center md:w-1/3 md:px-2">
          ALex is a revolutionary AI judge assistant designed by a passionate
          team of students from the Technical University Munich. Committed to
          innovation, our team brings together expertise in AI and legal
          technology to address the complex challenges faced by judges.
        </p>
        <p className="description text-center md:w-1/3 md:px-2">
          Our mission is to empower judges with cutting-edge technology that
          enhances their decision-making processes. We envision a future where
          legal professionals can navigate complexities with ease, making the
          judicial system more efficient and accessible for everyone.
        </p>
        <p className="description text-center md:w-1/3 md:px-2">
          With ALex, we've created a transformative tool that intelligently
          deciphers complex legal documents, ensuring clarity, efficiency, and a
          deeper understanding of every case within constrained timelines. Join
          us in shaping the future of judicial excellence with ALex.
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="px-4 py-4 mx-auto max-w-7xl flex flex-col gap-16">
        <HeaderSection />
        <UseCaseSection />
        <InfoSection
          id="our-tool"
          title="Revolutionary Insights, Seamless Solutions"
          description="Empower your legal journey with ALex: Explore cutting-edge features tailored for revolutionary insights and seamless solutions. From AI-enhanced factual analysis to intuitive drag-and-drop functionality, ALex transforms legal complexities into clarity. Experience consistent insights, enhanced decision accuracy, seamless workflow integration, and improved focus on intricate cases. Join the legal revolution with ALex – the future of judicial excellence."
          imageSrc="/assistant.png"
          items={FEATURES}
        />
        <InfoSection
          id="technology"
          title="AI at Your Fingertips: Seamless Power in Every Click"
          description="Dive into the future of legal technology with ALex's cutting-edge features and a user interface that defines cool and clean. Our AI-driven tool not only simplifies the complex but redefines the user experience, making legal analysis intuitive and efficient. Explore the synergy of the coolest automations and a UI designed for clarity, ensuring that every interaction with ALex is a testament to the seamless power of AI innovation."
          items={TECHNOLOGY}
        />
        <InfoSection
          id="data-privacy"
          title="Your Privacy Matters: Our Commitment to Data Security"
          description="At Alex, safeguarding your data is our utmost priority. We are dedicated
          to ensuring the confidentiality, integrity, and availability of your
          information. Our commitment to data protection is unwavering, and we
          adhere to stringent measures to maintain your privacy."
          items={DATA_PRIVACY}
        />
        <CompetitorsSection />
        <AboutUsSection />
      </div>
    </div>
  );
};
