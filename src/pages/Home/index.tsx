import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { JUDGES_DATA } from './informationData';
import { InfoSection } from './InfoSection';
import { NavigationBar } from './NavigationBar';

const HeaderSection = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen gap-12 max-w-[600px]">
      <h1 className="text-6xl font-semibold">
        Empower Your Judgements with <span className="text-success">AI</span>
      </h1>
      <p className="description">
        Judges often lose a lot of time on finding the relevant information in
        briefs. ALex is here to assist them in factual discovery and upgrade the
        brief analysis with an AI Assitant.
      </p>
      <div className="flex gap-4">
        {import.meta.env.VITE_APP_IS_EXTERNAL === 'false' && (
          <Link to="/upload">
            <Button>Get Started</Button>
          </Link>
        )}
        <Link to="/demo-video" target="_blank">
          <Button color="secondary">Watch Demo</Button>
        </Link>
      </div>
    </div>
  );
};

const UseCaseSection = () => {
  const content = JUDGES_DATA.useCase;

  return (
    <div
      id="use-case"
      className="flex flex-col justify-center min-h-screen pt-24"
    >
      <h2 className="text-3xl font-semibold text-center pb-4">
        {content.title}
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <p className="description text-center">{content.description}</p>
        <img className="w-1/2 sm:w-1/4" src={content.imageSrc} alt="Brief" />
      </div>
    </div>
  );
};

const CompetitorsSection = () => {
  const content = JUDGES_DATA.competitors;

  return (
    <div
      id="comparison"
      className="flex flex-col justify-center min-h-screen pt-24"
    >
      <h2 className="text-3xl font-semibold text-center pb-4">
        {content.title}
      </h2>
      <p className="text-center pb-16">{content.description}</p>
      <img
        className="w-full sm:w-1/2 mx-auto"
        src={content.imageSrc}
        alt="Competitors"
      />
    </div>
  );
};

const AboutUsSection = () => {
  const content = JUDGES_DATA.aboutUs;

  return (
    <div
      id={content.id}
      className="flex flex-col justify-center min-h-screen pt-24"
    >
      <h2 className="text-3xl font-semibold text-center pb-8">
        {content.title}
      </h2>
      <div className="flex flex-col md:flex-row justify-between pb-16 gap-4">
        {content.descriptions.map((text) => (
          <p key={text} className="description text-center md:w-1/3 md:px-2">
            {text}
          </p>
        ))}
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
        <InfoSection {...JUDGES_DATA.ourTool} />
        <InfoSection {...JUDGES_DATA.technology} />
        <InfoSection {...JUDGES_DATA.dataPrivacy} />
        <CompetitorsSection />
        <AboutUsSection />
      </div>
    </div>
  );
};
