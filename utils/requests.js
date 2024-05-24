const apiKey = process.env.LIMEWIRE_API || null;

// Fetch Image based off of text prompt

async function fetchImage(prompt, quality, style, guidance) {
  try {
    console.log('API Running');

    if (!apiKey) {
      return [];
    }

    const resp = await fetch('https://api.limewire.com/api/image/generation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Version': 'v1',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        samples: 4,
        quality: quality,
        guidance_scale: guidance,
        aspect_ratio: '1:1',
        style: style,
      }),
    });

    if (!resp.ok) {
      throw new Error('Failed to fetch data.');
    }
    return res.json();
  } catch (error) {
    console.log(Error);
    return [];
  }
}

export { fetchImage };
