import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faUser } from '@fortawesome/free-solid-svg-icons';

import { CourtFile, Party, RootState, Testimony } from '../types';

import { setPreviewFile } from '../redux/slices/documents';

import Button from './Button';
import TestimonyBlock from './Testimony';
import PDF from './PDF';

interface CrossExamProps {
  party: Party;
  testimonies: Testimony[];
}

const CrossExam = ({ party, testimonies }: CrossExamProps) => {
  const documents = useSelector((state: RootState) => state.documents);
  const dispatch = useDispatch();

  const previewFile = documents.previewFile;
  const partyFiles =
    documents.courtFiles.filter((courtFile) => courtFile.party === party) ?? [];

  const handlePreviewPDF = (file: CourtFile | null) => {
    return () => {
      dispatch(setPreviewFile(file));
    };
  };

  return (
    <div className="relative flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-4">
        <span className="flex gap-2 items-center font-semibold rounded-lg px-4 py-2 bg-divider">
          <FontAwesomeIcon icon={faUser} />
          {party}
        </span>

        <Button
          color="primary"
          onClick={handlePreviewPDF(previewFile ? null : partyFiles[0])}
        >
          <FontAwesomeIcon icon={faFilePdf} />
          {previewFile ? 'Close Preview' : 'Preview PDF'}
        </Button>
      </div>

      {previewFile && previewFile.party !== party && (
        <PDF
          file={previewFile.document}
          highlight={[
            'Bestellkatalog oder auf dem Bestellschein der Klägerin, wohl aber auf der',
            'Rückseite des Lieferscheins abgedruckt waren, bleibt die Ware bis zur vollständigen',
            'Bezahlung des Kaufpreises ihr Eigentum), steht der Klage nicht entgegen. Dr. Thyler',
            'Rechtsanwa',
          ]}
        />
      )}

      <div className="flex flex-col gap-4">
        {testimonies.map((testimony) => (
          <TestimonyBlock {...testimony} />
        ))}
      </div>
    </div>
  );
};

export default CrossExam;
