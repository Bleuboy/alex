export type Party = 'Claimant' | 'Defendant';
export type Aspect = 'Factual' | 'Legal';

export interface CourtFile {
  party: Party;
  document: File;
}

export interface Testimony {
  aspect: Aspect;
  text: string;
}

export interface CourtState {
  previewFile: CourtFile | null;
  courtFiles: CourtFile[];
}

export interface RootState {
  documents: CourtState;
}
