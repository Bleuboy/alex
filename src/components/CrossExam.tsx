import { useDispatch, useSelector } from 'react-redux';

import { setPreviewFile } from '../redux/slices/documents';
import {
  Aspect,
  CourtFile,
  Filter,
  Party,
  RootState,
  Testimony,
} from '../types';
import AspectBlock from './Aspect';
import Button from './Button';
import PDF from './PDF';
import TestimonyBlock from './Testimony';

interface CrossExamProps {
  party: Party;
  filter: Filter;
  testimonies: Testimony[];
  aspects: Aspect[];
}

const CrossExam = ({ party, filter, testimonies, aspects }: CrossExamProps) => {
  const documents = useSelector((state: RootState) => state.documents);
  const dispatch = useDispatch();

  const partyTestimonies = testimonies.filter(
    (testimony) => testimony.party == party,
  );
  const partyAspects = aspects.filter((aspect) => aspect.party == party);

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
        <span className="flex gap-2 items-center font-semibold rounded-lg px-4 py-2">
          {party}
        </span>

        <Button
          color="primary"
          onClick={handlePreviewPDF(previewFile ? null : partyFiles[0])}
        >
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
        {filter === 'testimony' &&
          partyTestimonies.map((testimony) => (
            <TestimonyBlock {...testimony} />
          ))}

        {filter === 'aspect' &&
          partyAspects.map((aspect) => <AspectBlock {...aspect} />)}
      </div>
    </div>
  );
};

export default CrossExam;
