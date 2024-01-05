import { useEffect, useState } from 'react';

interface PDFProps {
  file: File;
}

const PDF = ({ file }: PDFProps) => {
  const [fileUrl, setFileUrl] = useState<string>('');

  useEffect(() => {
    const fileUrl = URL.createObjectURL(file);
    setFileUrl(fileUrl);
  }, [file]);

  return (
    <iframe
      src={fileUrl}
      className="absolute top-0 left-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default PDF;
