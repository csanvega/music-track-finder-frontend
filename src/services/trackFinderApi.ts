const TRACK_FINDER_API =
  import.meta.env.TRACK_FINDER_API || 'http://localhost:8080/codechallenge';

export const trackFinderApi = {
  createTrack: async (isrc: string) => {
    const responseCreate = await fetch(`${TRACK_FINDER_API}/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isrc }),
    });

    const data = await responseCreate.json();
    if (!responseCreate.ok) {
      throw new Error(data.message);
    }

    return data;
  },
  getTrackMetadata: async (isrc: string) => {
    const responseGetTrack = await fetch(`${TRACK_FINDER_API}/track/${isrc}`);

    const data = await responseGetTrack.json();

    if (!responseGetTrack.ok) {
      throw new Error(data.message);
    }

    const responseGetImage = await fetch(
      `${TRACK_FINDER_API}/track/${isrc}/cover`
    );

    if (!responseGetTrack.ok) {
      throw new Error('Error getting the cover image');
    }

    const blob = await responseGetImage.blob();
    const coverUrl = URL.createObjectURL(blob);

    return { ...data, coverUrl };
  },
};
