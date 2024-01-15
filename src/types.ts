export type Party = 'Claimant' | 'Defendant';

export type AspectType = 'Factual' | 'Legal';
export type TestimonyType = 'Disputed' | 'Undisputed';

export type Filter = 'aspect' | 'testimony';

export interface CourtFile {
  party: Party;
  document: File;
}

export interface Testimony {
  party: Party;
  type: TestimonyType;
  
  text: string;
}

export interface Aspect {
  party: Party;
  type: AspectType;

  text: string;
}

export interface CourtState {
  previewFile: CourtFile | null;
  courtFiles: CourtFile[];
}

export interface RootState {
  documents: CourtState;
}
