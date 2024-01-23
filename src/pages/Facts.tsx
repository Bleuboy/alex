import { useState } from 'react';

import { useSelector } from 'react-redux';

import Button from '../components/Button';
import CrossExam from '../components/CrossExam';
import {
  Aspect,
  Filter,
  RootState,
  Testimony,
} from '../types';

const Facts = () => {
  const facts = useSelector((state: RootState) => state.facts);
  console.log(facts);

  const [filter, setFilter] = useState<Filter>('testimony');

  const testimonies: Testimony[] = facts.testimonies;
  
  console.log(testimonies);

  const aspects: Aspect[] = facts.aspects;


  console.log(aspects);


  // const aspects: Aspect[] = [/*
  //   {
  //     party: 'Claimant',
  //     type: 'Factual',
  //     text: "Der Vorfall ereignete sich am 21.09.2023",
  //   },
  //   {
  //     party: 'Claimant',
  //     type: 'Factual',
  //     text: 'Die Handlungen des Angeklagten haben zu materiellen und nicht-materiellen Schäden geführt.',
  //   },
  //   {
  //     party: 'Claimant',
  //     type: 'Legal',
  //     text: 'Es bestehe kein Zweifel daran, dass die vorliegenden Beweise die Forderungen stützen.',
  //   },
  //   {
  //     party: 'Defendant',
  //     type: 'Factual',
  //     text: "Der Angeklagte bestreitet die gegen ihn erhobenen Vorwürfe. Die Handlung war nicht vorsätzlich.",
  //   },
  //   {
  //     party: 'Defendant',
  //     type: 'Legal',
  //     text: ' Es gibt Faktoren und Umstände, die nicht angemessen berücksichtigt wurden und die eine Unschuld belegen können',
  //   },
  // */];

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
