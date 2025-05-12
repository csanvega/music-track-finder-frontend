import AlbumCard from '../components/AlbumCard';

export default function TrackDetails() {
  const trackMock = {
    name: 'Wake Up Mr. West',
    artistName: 'Kanye West',
    albumName: 'Late Registration',
    playbackSeconds: 41066,
    isExplicit: true,
    coverUrl:
      'https://i.scdn.co/image/ab67616d00001e02428d2255141c2119409a31b2',
  };

  return <AlbumCard track={trackMock} />;
}
