import { Item, LandingPageData } from './model';

const USE_CASES: Item[] = [
  {
    title: 'Chaotic structure',
    description:
      'Briefs often do not follow judicial best-practices and mix legal and factual argumentation throughout the document',
  },
  {
    title: 'Inflated briefs',
    description:
      'Briefs are often inflated with references that are irrelevant to the case and hinder an efficient analysis of arguments.',
  },
  {
    title: 'Limited time per case',
    description:
      'Judges can only spend a limited amount of time per pleading, which increases the risk of overlooking important details.',
  },
];

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
    title: 'Familiar judicial interface',
    description:
      'Our interface is designed with familiarity in mind, making it easy for you to navigate and structure information according to judicial best practices. This ensures a seamless transition and a more efficient workflow.',
  },
  {
    title: 'Judicially tailored LLM',
    description:
      'Our Large Language Model (LLM) is specifically tailored for the judicial sector. It provides nuanced brief analysis and presents results in a transparent manner, enabling you to make informed decisions.',
  },
  {
    title: 'Encrypted data handling',
    description:
      'We prioritize your privacy. Our system handles data with robust encryption and our processing methods are designed with a privacy-centric approach. This ensures your data remains secure and confidential at all times.',
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

export const JUDGES_DATA: LandingPageData = {
  useCase: {
    id: 'use-case',
    title: 'What is wrong with current briefs?',
    description:
      'Briefs serve as the cornerstone of information in civil proceedings, yet they often present challenges that impede the efficiency of judicial processes. These documents, while crucial, can be dense and complex, making it difficult for judges to quickly extract the key points and arguments.',
    imageSrc: '/brief.png',
    items: USE_CASES,
    conclusion:
      'Judges need better structured briefs that allow to find the necessary information more quickly.',
  },
  ourTool: {
    id: 'our-tool',
    title: 'Where can a Judge Assisstant support me?',
    description:
      'Instead of spending time on manual analysis, ALex pre-classifies information in factual and legal arguments offering consistent and reliable insights, boosting efficiency and accuracy in case handling and makes time for more important tasks.',
    items: FEATURES,
    imageSrc: '/assistant.png',
  },
  technology: {
    id: 'technology',
    title: 'What makes ALex unique?',
    description:
      'ALex was developed with the user in mind. We offer a familiar interface that judges know from their individual workarounds. ALex traces the arguments in the briff and offers transparency in the categorization of our models. Finally, we offer a highly secure platform that is suitable for use in public authorities.',
    items: TECHNOLOGY,
  },
  dataPrivacy: {
    id: 'data-privacy',
    title: 'How do we care about your data?',
    description:
      'At Alex, safeguarding your data is our utmost priority. We are dedicated to ensuring the confidentiality, integrity, and availability of your information. Our commitment to data protection is unwavering, and we adhere to stringent measures to maintain your privacy.',
    items: DATA_PRIVACY,
  },
  competitors: {
    id: 'comparison',
    title: 'Unleashing Precision in Legal Analysis',
    description:
      'ALex, where the coolest automations meet unparalleled ease of use, all powered by AI innovation. Elevate your legal insights effortlessly as ALex transforms complex cases into clear, concise analyses. With ALex, experience the pinnacle of legal assistance—effortless, powerful, and undeniably cool.',
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
