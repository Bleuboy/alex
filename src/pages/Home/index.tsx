import { useState } from 'react';

import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { InfoSection } from './InfoSection';
import { JUDGES_DATA } from './JUDGES_DATA';
import { LandingPageData } from './model';
import { NavigationBar } from './NavigationBar';
import { NON_JUDGES_DATA } from './NON_JUDGES_DATA';

const ContactButton = () => {
  return (
    <a href="mailto:info@alex.com?subject=ALex%20-%20Let's%20connect&body=Hi%20team%2C%0AI'd%20love%20to%20receive%20more%20info%20about%20your%20tool.%0A%0ABest">
      <Button>Get in Contact</Button>
    </a>
  );
};

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
        {import.meta.env.VITE_APP_IS_EXTERNAL === 'false' ? (
          <Link to="/upload">
            <Button>Get Started</Button>
          </Link>
        ) : (
          <ContactButton />
        )}
        <Link to="/demo-video" target="_blank">
          <Button color="secondary">Watch Demo</Button>
        </Link>
      </div>
    </div>
  );
};

type CompetitorsSectionProps = {
  data: LandingPageData;
};

const CompetitorsSection = ({ data }: CompetitorsSectionProps) => {
  const content = data.competitors;

  return (
    <div
      id="comparison"
      className="flex flex-col justify-center min-h-screen pt-24"
    >
      <h2 className="text-3xl font-semibold text-center pb-4">
        {content.title}
      </h2>
      <p className="text-center pb-12">{content.description}</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
        <img
          className="md:w-1/2 mx-auto"
          src="/comparison-table.png"
          alt="Competitors Table"
        />
        <img
          className="md:w-1/2 mx-auto"
          src="/competitors.png"
          alt="Competitors"
        />
      </div>
    </div>
  );
};

type AboutUsSectionProps = {
  data: LandingPageData;
};

const AboutUsSection = ({ data }: AboutUsSectionProps) => {
  const content = data.aboutUs;

  return (
    <div
      id={content.id}
      className="flex flex-col items-center min-h-screen pt-24"
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
      <ContactButton />
    </div>
  );
};

export const Home = () => {
  const [isJudge, setIsJudge] = useState(true);
  const data = isJudge ? JUDGES_DATA : NON_JUDGES_DATA;

  const toggleIsJudge = () => {
    setIsJudge((state) => !state);
  };

  return (
    <div>
      <NavigationBar isJudge={isJudge} onIsJudgeClick={toggleIsJudge} />
      <div className="px-4 py-4 mx-auto max-w-7xl flex flex-col gap-16">
        <HeaderSection />
        <InfoSection {...data.useCase} />
        <InfoSection {...data.ourTool} />
        <InfoSection {...data.technology} />
        <InfoSection {...data.dataPrivacy} />
        <CompetitorsSection data={data} />
        <AboutUsSection data={data} />
      </div>
    </div>
  );
};
