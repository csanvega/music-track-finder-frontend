export const trackFinderApi = {
  createTrack: async (isrc: string) => {
    const response = await fetch('http://localhost:8080/codechallenge/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isrc }),
    });

    if (!response.ok) {
      throw new Error('Failed to create track');
    }

    const data = await response.json();
    if (!response.ok) {
      throw data;
    }
    
    return data;
  },
  getTrackMetadata: async (isrc: string) => {
    const response = await fetch(
      `http://localhost:8080/codechallenge/track/${isrc}`
    );

    const data = await response.json();
    if (!response.ok) {
      throw data;
    }
  
    return data;
  },
};
