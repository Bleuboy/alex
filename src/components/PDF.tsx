import { useCallback, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/TextLayer.css';

import Button from './Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFProps {
  file: File;
  highlight: string[];
}

const PDF = ({ file, highlight }: PDFProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleCustomTextRender = useCallback(
    //@ts-ignore
    ({ str, itemIndex }) => {
      if (highlight.includes(str)) return `<mark>${str}</mark>`;
      else return str;
    },
    [highlight],
  );

  const handlePrevPage = () => {
    setCurrentPage((currentPage) => Math.max(1, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((currentPage) => Math.min(numPages, currentPage + 1));
  };

  return (
    <div className="absolute flex justify-center top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-50">
      <div className="absolute top-5 flex items-center gap-4 z-50">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>
          Page {currentPage} of {numPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === numPages}>
          Next
        </Button>
      </div>

      <Document
        file={file}
        onLoadSuccess={handleDocumentLoadSuccess}
        className="shadow-lg"
      >
        <Page
          pageNumber={currentPage}
          customTextRenderer={handleCustomTextRender}
        />
      </Document>
    </div>
  );
};

export default PDF;
