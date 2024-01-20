import { AboutUsData, InfoSectionData, Item, SectionData } from './model';

export const FEATURES: Item[] = [
  {
    title: 'AI-Enhanced Factual Analysis',
    description:
      'Gain a structured overview of case facts with ALex, ensuring consistent and reliable insights, allowing you to focus on essential aspects for better decisions.',
  },
  {
    title: 'Drag & Drop Application powered by AI',
    description:
      'Experience ease of use and reliable results with ALex, enhancing decision accuracy and seamlessly integrating into your existing workflow for improved focus on complex cases.',
  },
  {
    title: 'AI-Driven Evidence Check and Compilation',
    description:
      'Integrate ALex effortlessly into your workflow, benefitting from automated case registration, consistent insights, enhanced decision accuracy, and improved focus on complex cases.',
  },
  {
    title: 'Automated Case Registration',
    description:
      'Enjoy the convenience of automated case registration with ALex, streamlining your workflow and providing consistent, reliable insights for improved decision-making.',
  },
];

export const TECHNOLOGY: Item[] = [
  {
    title:
      'Judicially tailored LLM for nuanced brief analysis with transparent results',
    description:
      'ALex incorporates a Judicially tailored Language Model (LLM) that refines legal brief analysis, ensuring nuanced understanding and providing transparent, insightful results.',
  },
  {
    title: 'Encrypted data handling with privacy-centric-processing',
    description:
      'Our technology prioritizes data security through encrypted handling, employing privacy-centric processing to safeguard sensitive legal information.',
  },
  {
    title: 'Automated case registration',
    description:
      'Experience unparalleled efficiency with ALex’s automated case registration, streamlining the process and eliminating manual hassles for judges.',
  },
  {
    title: 'Drag and drop application powered by AI',
    description:
      'ALex introduces a user-friendly drag-and-drop application, seamlessly powered by AI, to enhance user experience and simplify the navigation of legal documents.',
  },
];

export const DATA_PRIVACY: Item[] = [
  {
    title: 'Data Encryption',
    description:
      'We encrypt your data using the latest encryption standards. This ensures that your data is protected from unauthorized access.',
  },
  {
    title: 'Data Integrity',
    description:
      'We ensure that your data is not altered in any way. This ensures that your data is not altered in any way.',
  },
  {
    title: 'Data Availability',
    description:
      'We ensure that your data is available when you need it. This ensures that your data is available when you need it.',
  },
];

interface LandingPageData {
  useCase: SectionData;
  competitors: SectionData;
  ourTool: InfoSectionData;
  technology: InfoSectionData;
  dataPrivacy: InfoSectionData;
  aboutUs: AboutUsData;
}

export const JUDGES_DATA: LandingPageData = {
  useCase: {
    id: 'use-case',
    title: 'Use Case',
    description:
      'Judges, grappling with the chaotic structure and inflated text of legal briefs while under time constraints, encounter a critical need for enhanced structure to understand the facts of each case thoroughly. Enter ALex, our AI judge assistant—an innovative solution designed to streamline the comprehension process. With ALex, judges experience a transformative use case where complex legal documents are deciphered intelligently, ensuring clarity, efficiency, and a deeper understanding of every case within constrained timelines.',
    imageSrc: '/brief.png',
  },
  ourTool: {
    id: 'our-tool',
    title: 'Revolutionary Insights, Seamless Solutions',
    description:
      'Empower your legal journey with ALex: Explore cutting-edge features tailored for revolutionary insights and seamless solutions. From AI-enhanced factual analysis to intuitive drag-and-drop functionality, ALex transforms legal complexities into clarity. Experience consistent insights, enhanced decision accuracy, seamless workflow integration, and improved focus on intricate cases. Join the legal revolution with ALex – the future of judicial excellence.',
    items: FEATURES,
    imageSrc: '/images/home/features.png',
  },
  technology: {
    id: 'technology',
    title: 'AI at Your Fingertips: Seamless Power in Every Click',
    description:
      "Dive into the future of legal technology with ALex's cutting-edge features and a user interface that defines cool and clean. Our AI-driven tool not only simplifies the complex but redefines the user experience, making legal analysis intuitive and efficient. Explore the synergy of the coolest automations and a UI designed for clarity, ensuring that every interaction with ALex is a testament to the seamless power of AI innovation.",
    items: TECHNOLOGY,
  },
  dataPrivacy: {
    id: 'data-privacy',
    title: 'Your Privacy Matters: Our Commitment to Data Security',
    description:
      'At Alex, safeguarding your data is our utmost priority. We are dedicated to ensuring the confidentiality, integrity, and availability of your information. Our commitment to data protection is unwavering, and we adhere to stringent measures to maintain your privacy.',
    items: DATA_PRIVACY,
  },
  competitors: {
    id: 'comparison',
    title: 'Unleashing Precision in Legal Analysis',
    description:
      'ALex, where the coolest automations meet unparalleled ease of use, all powered by AI innovation. Elevate your legal insights effortlessly as ALex transforms complex cases into clear, concise analyses. With ALex, experience the pinnacle of legal assistance—effortless, powerful, and undeniably cool.',
    imageSrc: '/competitors.png',
  },
  aboutUs: {
    id: 'about-us',
    title: 'About Us: The Future of Judicial Excellence',
    descriptions: [
      'ALex is a revolutionary AI judge assistant designed by a passionate team of students from the Technical University Munich. Committed to innovation, our team brings together expertise in AI and legal technology to address the complex challenges faced by judges.',
      'Our mission is to empower judges with cutting-edge technology that enhances their decision-making processes. We envision a future where legal professionals can navigate complexities with ease, making the judicial system more efficient and accessible for everyone.',
      "With ALex, we've created a transformative tool that intelligently deciphers complex legal documents, ensuring clarity, efficiency, and a deeper understanding of every case within constrained timelines. Join us in shaping the future of judicial excellence with ALex.",
    ],
  },
};
