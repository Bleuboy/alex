import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import clsx from 'clsx';

import Upload from '../components/Upload';

import Card from '../components/Card';
import Button from '../components/Button';
import CircleLoader from '../components/CircleLoader';

import { RootState } from '../types';

const AddDocumentPage = () => {
  const navigate = useNavigate();

  const files = useSelector((state: RootState) => state.files);
  
  const [loading, setLoading] = useState<boolean>(false);

  const [progress, setProgress] = useState<number>(0);

  const handleAnalyze = () => {
    setLoading(true);
    setProgress(0);

    let progressInterval = setInterval(() => {
      setProgress((progress) => progress += 1);
    }, 100);

    setTimeout(() => {
      clearInterval(progressInterval);
      setLoading(false);

      navigate('/facts');
    }, 100 * 99);
  };

  return (
      <Card className="relative flex flex-col">
        <h1 className="text-2xl font-semibold">Add Document</h1>

        <div className="grid grid-cols-2">
          <Upload party="Claimant" />
          <Upload party="Defendant" />
        </div>

        <div className="w-full flex justify-center">
          <Button disabled={!files.length} onClick={handleAnalyze}>
            Analyze
          </Button>
        </div>

        <div
          className={clsx(
            'absolute top-0 left-0 w-full h-full bg-white p-16 flex flex-col justify-between items-center transition-opacity duration-300',
            loading ? 'opacity-100 block' : 'opacity-0 hidden',
          )}
        >
          <h1 className="text-4xl font-semibold">Analyzing Documents</h1>

          <div className="flex flex-col items-center justify-center flex-grow">
            <CircleLoader progress={progress} />
          </div>

          <div>You're almost done!</div>
          <div>We're analyzing your documents.</div>
        </div>
      </Card>
  );
}

export default AddDocumentPage;
