import CrossExam from '../components/CrossExam';

const Facts = () => {
  return (
    <div className="w-full h-full flex-grow flex flex-col gap-4">
      <header className="flex flex-row items-center">
        <div></div>
      </header>

      <div className="flex-grow flex flex-row gap-4 p-16">
        <CrossExam
          party="Claimant"
          testimonies={[
            {
              text: 'Es hat gereget',
              aspect: 'Factual',
            },
            {
              text: 'Der Kläger behauptet der Angeklate lügt',
              aspect: 'Legal',
            },
          ]}
        />

        <CrossExam
          party="Defendant"
          testimonies={[
            {
              text: 'Es hat gereget',
              aspect: 'Factual',
            },
            {
              text: 'Der Angeklate behauptet der Kläger lügt',
              aspect: 'Legal',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Facts;
