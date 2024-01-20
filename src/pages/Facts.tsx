import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pdfjs } from 'react-pdf';
import axios from 'axios';

import {
  CourtFile,
  RootState,
} from '../types';
import Button from '../components/Button';
import CrossExam from '../components/CrossExam';
import { Aspect, Filter, Testimony } from '../types';
import { TextItem } from 'pdfjs-dist/types/src/display/api';


const Facts = () => {
  const [filter, setFilter] = useState<Filter>('aspect');
  const [extractedText, setExtractedText] = useState<string>('');
  const documents = useSelector((state: RootState) => state.documents);
  const [factualText, setFactualText] = useState<string>('');
  const [legalText, setLegalText] = useState<string>('');


  const PDF1 = documents.courtFiles[0] //Claimant's
  const PDF2 = documents.courtFiles[1] //Defendant's
  console.log(PDF1)
  console.log(PDF2)

//After successfuly extracting the text from the PDFs
// We should make several api calls each containing a different prompt (easiet way to get it up and running)
// assign each response to the different testimonies available below


useEffect(() => {
  const extractTextAndProcess = async (PDFDocument) => {
    if (PDFDocument) {
      try {
        const aspects = await extractTextFromPdf1(PDFDocument.document);
        setFactualText(aspects.factual);
        setLegalText(aspects.legal);
      } catch (error) {
        console.error('Error processing PDF:', error);
        setFactualText('Error processing file.');
        setLegalText('Error processing file.');
      }
    } else {
      setFactualText('No court file available.');
      setLegalText('No court file available.');
    }
  };

  extractTextAndProcess(PDF1);
}, );

  const extractTextFromPdf1 = async (PDF1) => {
    try {
      const pdf = await pdfjs.getDocument(PDF1).promise;
      let extractedText = '';
  
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        extractedText += pageText + '\n';
      }
      console.log(extractedText)
  
      // After extracting text from PDF, call OpenAI API to extract facts
      const extractedAspects = await ExtractFactualAndLegalAspects(extractedText);
      
      // Update the state with the extracted texts
      setFactualText(extractedAspects.factual);
      setLegalText(extractedAspects.legal);
  
      return extractedAspects; // Return the extracted factual and legal information
    } catch (error) {
      console.error('Error in extractTextFromPdf:', error);
    }
  };
 

const ExtractFactualAndLegalAspects = async (text) => {
  try {
    //used for testing, remove later when text is properly extracted
    text = "The plaintiff, John Doe, was driving his car on the highway when he was hit by the defendant, Jane Doe. The plaintiff suffered a broken leg and was taken to the hospital. The plaintiff is suing the defendant for damages."
    const factualPrompt = `Extract factual information from the following text:\n\n${text}`;
    const legalPrompt = `Extract legal information from the following text:\n\n${text}`;

    const factualResponse = await axios.post('https://api.openai.com/v1/engines/davinci/codex/completions', {
      prompt: factualPrompt,
      max_tokens: 1024
    }, {
      headers: {
        'Authorization': ' OPENAI_API_KEY'
      }
    });

    const legalResponse = await axios.post('https://api.openai.com/v1/engines/davinci/codex/completions', {
      prompt: legalPrompt,
      max_tokens: 1024
    }, {
      headers: {
        'Authorization': ' OPENAI_API_KEY'
      }
    });

    return {
      factual: factualResponse.data.choices[0].text,
      legal: legalResponse.data.choices[0].text
    };
  } catch (error) {
    console.error('Error with OpenAI API:', error);
  }
};


  


  
  
  const testimonies: Testimony[] = [
    {
      party: 'Claimant',
      type: 'Disputed',
      text: extractedText || 'Loading text from court file...',
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
      text: factualText || 'Claimant argues that medical expenses should be attributed to the defendant.',
    },
    {
      party: 'Claimant',
      type: 'Legal',
      text: legalText || 'On the day of the accident, the weather conditions were foggy, with limited visibility.',
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




// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import pdfParse from 'pdf-parse';
// import {
//   CourtFile,
//   RootState,
// } from '../types';
// import Button from '../components/Button';
// import CrossExam from '../components/CrossExam';
// import { Aspect, Filter, Testimony } from '../types';
// import { TextItem } from 'pdfjs-dist/types/src/display/api';

// const Facts = () => {
//   const [filter, setFilter] = useState<Filter>('aspect');

//   const documents = useSelector((state: RootState) => state.documents);
  
//   const dispatch = useDispatch();

//   const courtFiles = documents.courtFiles;

//   useEffect(() => {
//     const convertPDFToText = (file: File) => {
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//         const arrayBuffer = reader.result as ArrayBuffer;
//         const data = await pdfParse(Buffer.from(arrayBuffer));
//         console.log(data.text);
//       };
//       reader.readAsArrayBuffer(file);
//     };
    
//     courtFiles.forEach((courtFile) => {
//       if (courtFile.document) {
//         convertPDFToText(courtFile.document);
//       }
//     });
//   }, [courtFiles]);




//   const testimonies: Testimony[] = [
//     {
//       party: 'Claimant',
//       type: 'Disputed',
//       text: 'Claimant argues that medical expenses should be attributed to the defendant.',
//     },
//     {
//       party: 'Defendant',
//       type: 'Undisputed',
//       text: 'On the day of the accident, the weather conditions were foggy, with limited visibility.',
//     },
//     {
//       party: 'Defendant',
//       type: 'Undisputed',
//       text: "Defendant argues that claimant's injury existed before the accident and were not a direct result.",
//     },
//   ];

//   const aspects: Aspect[] = [
//     {
//       party: 'Claimant',
//       type: 'Factual',
//       text: 'Claimant argues that medical expenses should be attributed to the defendant.',
//     },
//     {
//       party: 'Claimant',
//       type: 'Legal',
//       text: 'On the day of the accident, the weather conditions were foggy, with limited visibility.',
//     },
//     {
//       party: 'Defendant',
//       type: 'Factual',
//       text: "Defendant argues that claimant's injury existed before the accident and were not a direct result.",
//     },
//     {
//       party: 'Defendant',
//       type: 'Legal',
//       text: ' On the day of the accident, the weather conditions were foggy, with limited visibility.',
//     },
//   ];

//   const handleToggleFilter = () => {
//     setFilter((filter) => (filter === 'aspect' ? 'testimony' : 'aspect'));
//   };

//   return (
//     <div className="w-full h-full flex-grow flex flex-col gap-4 min-h-screen">
//       <header className="flex flex-row items-center p-4 bg-gray-500">
//         <Button onClick={handleToggleFilter}>
//           {filter === 'aspect' ? 'Show (U)Disp. Facts' : 'Show Legal/Factual'}
//         </Button>
//       </header>

//       <div className="flex-grow flex flex-row gap-4 px-16">
//         <CrossExam
//           party="Claimant"
//           filter={filter}
//           testimonies={testimonies}
//           aspects={aspects}
//         />

//         <CrossExam
//           party="Defendant"
//           filter={filter}
//           testimonies={testimonies}
//           aspects={aspects}
//         />
//       </div>
//     </div>
//   );
// };

// export default Facts;
