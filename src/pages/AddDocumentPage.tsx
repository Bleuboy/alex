import { useState } from 'react';

import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Card from '../components/Card';
import CircleLoader from '../components/CircleLoader';
import Upload from '../components/Upload';

import { RootState } from '../types';
import { setFacts } from '../redux/slices/facts';

const AddDocumentPage = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const documents = useSelector((state: RootState) => state.documents);

  const [loading, setLoading] = useState<boolean>(false);

  const [progress, setProgress] = useState<number>(0);

  const sendToBackend = async (files: File[]) => {
    const formData = new FormData();

    for (let file of files) {
      formData.append('files', file);
    }

    const result = await fetch('/api/analyze', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .catch(() => null);

    return result;
  }

  const handleAnalyze = async () => {
    setLoading(true);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((progress) => ((progress += 1) % 98));
    }, 100);

    try {
      const facts = await sendToBackend(documents.courtFiles.map((courtFile) => courtFile.document));

      dispatch(setFacts({
        testimonies: facts.map((fact: { claimedBy: any; type: any; statement: any; }) => ({
          party: fact.claimedBy,
          type: fact.type,
          text: fact.statement,
        })),
        aspects: [],
      }));

      navigate('/facts');
    } catch(ex) {
      console.error(ex);
    } finally {
      clearInterval(progressInterval);
      setLoading(true);
      setProgress(0);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="relative flex flex-col">
        <h1 className="text-2xl font-semibold">Add Document</h1>

        <div className="grid grid-cols-2">
          <Upload party="Claimant" />
          <Upload party="Defendant" />
        </div>

        <div className="w-full flex justify-center">
          <Button
            disabled={!documents.courtFiles.length}
            onClick={handleAnalyze}
          >
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
    </div>
  );
};

export default AddDocumentPage;
