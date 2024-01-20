export interface Item {
  title: string;
  description?: string;
}

interface BasicData {
  id: string;
  title: string;
}

export interface SectionData extends BasicData {
  description: string;
  imageSrc?: string;
}

export interface AboutUsData extends BasicData {
  descriptions: string[];
}

export interface InfoSectionData extends SectionData {
  items: Item[];
}
