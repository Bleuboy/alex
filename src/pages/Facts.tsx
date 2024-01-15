import { useState } from 'react';

import Button from '../components/Button';
import CrossExam from '../components/CrossExam';
import { Aspect, Filter, Testimony } from '../types';

const Facts = () => {
  const [filter, setFilter] = useState<Filter>('aspect');

  const testimonies: Testimony[] = [
    {
      party: 'Claimant',
      type: 'Disputed',
      text: 'Claimant argues that medical expenses should be attributed to the defendant.',
    },
    {
      party: 'Defendant',
      type: 'Undisputed',
      text: 'On the day of the accident, the weather conditions were foggy, with limited visibility.',
    },
    {
      party: 'Defendant',
      type: 'Undisputed',
      text: "Defendant argues that claimant's injury existed before the accident and were not a direct result.",
    },
  ];

  const aspects: Aspect[] = [
    {
      party: 'Claimant',
      type: 'Factual',
      text: 'Claimant argues that medical expenses should be attributed to the defendant.',
    },
    {
      party: 'Claimant',
      type: 'Legal',
      text: 'On the day of the accident, the weather conditions were foggy, with limited visibility.',
    },
    {
      party: 'Defendant',
      type: 'Factual',
      text: "Defendant argues that claimant's injury existed before the accident and were not a direct result.",
    },
    {
      party: 'Defendant',
      type: 'Legal',
      text: ' On the day of the accident, the weather conditions were foggy, with limited visibility.',
    },
  ];

  const handleToggleFilter = () => {
    setFilter((filter) => (filter === 'aspect' ? 'testimony' : 'aspect'));
  };

  return (
    <div className="w-full h-full flex-grow flex flex-col gap-4 min-h-screen">
      <header className="flex flex-row items-center p-4 bg-gray-500">
        <Button onClick={handleToggleFilter}>
          {filter === 'aspect' ? 'Show (U)Disp. Facts' : 'Show Legal/Factual'}
        </Button>
      </header>

      <div className="flex-grow flex flex-row gap-4 px-16">
        <CrossExam
          party="Claimant"
          filter={filter}
          testimonies={testimonies}
          aspects={aspects}
        />

        <CrossExam
          party="Defendant"
          filter={filter}
          testimonies={testimonies}
          aspects={aspects}
        />
      </div>
    </div>
  );
};

export default Facts;
