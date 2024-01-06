import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import Button from './Button';

import { CourtFile, Party, RootState } from '../types';
import { setCourtFiles } from '../redux/slices/documents';

interface UploadProps {
  party: Party;
}

const Upload = ({ party }: UploadProps) => {
  const documents = useSelector((state: RootState) => state.documents);
  const dispatch = useDispatch();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [dragOver, setDragOver] = useState<boolean>(false);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragOver(false);

      const uploadedFiles: CourtFile[] = Array.from(e.dataTransfer.files)
        .filter((file) => file.type === 'application/pdf')
        .map((file: File) => ({
          party,
          document: file,
        }));

      if (uploadedFiles.length > 0) {
        dispatch(setCourtFiles([...documents.courtFiles, ...uploadedFiles]));
      }
    },
    [documents.courtFiles],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const uploadedFiles: CourtFile[] = Array.from(e.target.files)
          .filter((file) => file.type === 'application/pdf')
          .map((file: File) => ({
            party,
            document: file,
          }));

        if (uploadedFiles.length > 0) {
          dispatch(setCourtFiles([...documents.courtFiles, ...uploadedFiles]));
        }
      }
    },
    [documents.courtFiles],
  );

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col">
      <h2
        className={clsx(
          'w-full font-semibold text-xl border-b-2 border-divider',
          party === 'Claimant' ? 'text-left' : 'text-right',
        )}
      >
        {party}
      </h2>

      <div
        className={clsx('flex flex-grow flex-col gap-4 p-4', {
          'border-r border-divider': party === 'Claimant',
          'border-l border-divider': party === 'Defendant',
        })}
      >
        <div
          className={`border-dashed border-4 rounded p-4 text-center cursor-pointer hover:border-gray-300 ${
            dragOver ? 'border-success' : 'border-divider'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleFileClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={handleChange}
            className="hidden"
            multiple
          />
          <p>
            Drag 'n' drop the <span className="font-semibold">{party}</span>{' '}
            files here, or click to select files
          </p>
          <em>(Only *.pdf files will be accepted)</em>
        </div>

        <div className="flex-grow">
          <table width="100%">
            {/*<thead className="border-b-2 border-divider">
              <tr>
                <td className="font-semibold w-full">Name</td>
                <td className="font-semibold">Delete</td>
              </tr>
            </thead>*/}

            <tbody className="divide-y-2 border-divider">
              {documents.courtFiles
                .filter((file) => file.party === party)
                .map((file, i) => {
                  return (
                    <tr key={i}>
                      <td className="py-2 w-full">{file.document.name}</td>
                      <td className="py-2">
                        <Button variant="icon" color="tertiary">
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <Button color="tertiary" onClick={handleFileClick}>
          <FontAwesomeIcon icon={faFileCirclePlus} />
          Add Document(s)
        </Button>
      </div>
    </div>
  );
};

export default Upload;
