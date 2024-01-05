import { useState } from 'react';
import { useSelector } from 'react-redux';


import { CourtFile, Party, RootState, Testimony } from '../types';

import Button from '../components/Button';

import TestimonyBlock from './Testimony';
import PDF from './PDF';

interface CrossExamProps {
  party: Party;
  testimonies: Testimony[];
}

const CrossExam = ({ party, testimonies }: CrossExamProps) => {
  const files = useSelector((state: RootState) => state.files);

  const [previewFile, setPreviewFile] = useState<CourtFile>();

  const handlePreviewPDF = (file: CourtFile) => {
    return () => {
      setPreviewFile(file);
    };
  };

  return (
    <div className="relative flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-4">
        <span className="flex gap-2 items-center font-semibold rounded-lg px-4 py-2 bg-divider">
          {party}
        </span>

        <Button color="primary" onClick={handlePreviewPDF(files[0])}>
          Preview PDF
        </Button>
      </div>

      {previewFile && <PDF file={previewFile.document} />}

      <div className="flex flex-col gap-4">
        {testimonies.map((testimony) => (
          <TestimonyBlock {...testimony} />
        ))}
      </div>
    </div>
  );
};

export default CrossExam;
