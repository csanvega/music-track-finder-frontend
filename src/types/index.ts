export interface Track {
  name: string;
  artistName: string;
  albumName: string;
  playbackSeconds: number;
  isExplicit: boolean;
  coverUrl: string;
}

export interface TrackState {
  trackSelected: Track | null;
  trackCreated: Track | null;
  loading: boolean;
  error: string | null;
}
